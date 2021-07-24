import { without } from "lodash";
import {
  ERoute,
  IAct,
  IAppState,
  Id,
  IEntity,
  initialLoadingState,
  initialState,
  IState,
  Scope,
} from "../bridge";
import { IEvent } from "../utils/EventWrapper";
import { compose } from "../utils/utils";
import {
  changeCollectionSearchInput,
  changeCollectionTitle,
  processCollection as processCollection,
  shortcutAddCollection,
  shortcutDownCollection,
  shortcutEditCollection,
  shortcutEnterCollection,
  shortcutUpCollection,
} from "./collection.service";
import {
  changeNoteDescription,
  changeNotesSearchInput,
  changeNoteTitle,
  clickItemFromNote,
  editNote,
  processNotes,
  shortcutAddNote,
  shortcutCollapseNote,
  shortcutDownNote,
  shortcutRemoveNote,
  shortcutUpNote,
} from "./note.service";
import { Shortcut } from "./shortcuts.service";
import {
  changeItemTitle,
  changeSearchInput,
  clickItem,
  process as processTree,
  shortcutAddItem,
  shortcutCollapse,
  shortcutDown,
  shortcutEnter,
  shortcutMoveDown,
  shortcutMoveUp,
  shortcutRedo,
  shortcutRemoveItem,
  shortcutToggleEditItem,
  shortcutUndo,
  shortcutUp,
  updateHighligted,
} from "./tree.service";

export const UndoStack: IState["treeNodes"][] = [];
export const RedoStack: IState["treeNodes"][] = [];

const toggleScope = (state: IState, event: IEvent): IState => ({
  ...state,
  scope: without(Scope, state.scope)[0],
});

export const actTree: IAct<IState> = (_state) => ([type, id, value]) => {
  // console.warn(type, id, value)
  // Shortcuts
  const toggleScopeResult =
    type === "keydown" &&
    id === Id.Keyboard &&
    value === Shortcut.ToggleScope &&
    toggleScope(_state, [type, id, value]);

  const state = toggleScopeResult || _state;

  if (state.scope === "tree") {
    // IO
    const changeItemTitleResult =
      type === "change" &&
      id.includes(Id.Item) &&
      changeItemTitle(state, [type, id, value]);
    const clickItemResult =
      type === "click" &&
      id.includes(Id.Item) &&
      clickItem(state, [type, id, value]);
    const changeSearchInputResult =
      type === "change" &&
      id === Id.SearchItemsInput &&
      changeSearchInput(state, [type, id, value]);

    const undoableTreeResult =
      // Shortcuts
      compose([
        [Shortcut.Add, shortcutAddItem],
        [Shortcut.Remove, shortcutRemoveItem],
        [Shortcut.MoveDown, shortcutMoveDown],
        [Shortcut.MoveUp, shortcutMoveUp],
      ])(state, [type, id, value]) ||
      clickItemResult ||
      changeItemTitleResult;

    if (undoableTreeResult) {
      RedoStack.length = 0;
      UndoStack.push(state.treeNodes);
    }

    const nonUndoableTreeResult =
      compose([
        [Shortcut.Undo, shortcutUndo],
        [Shortcut.Redo, shortcutRedo],
        [Shortcut.Up, shortcutUp],
        [Shortcut.Down, shortcutDown],
        [Shortcut.Collapse, shortcutCollapse],
        [Shortcut.Enter, shortcutEnter],
        [Shortcut.Edit, shortcutToggleEditItem],
      ])(state, [type, id, value]) ||
      // IO
      changeSearchInputResult ||
      state;

    const treeResult = undoableTreeResult || nonUndoableTreeResult;

    return processNotes(
      processTree({
        ...treeResult,
        treeNodes: updateHighligted(treeResult),
      })
    );
  } else {
    // IO
    const changeNotesSearchInputResult =
      type === "change" &&
      id === Id.SearchNotesInput &&
      changeNotesSearchInput(state, [type, id, value]);

    const changeNoteTitleResult =
      type === "change" &&
      id.includes(Id.NoteTitle) &&
      changeNoteTitle(state, [type, id, value]);

    const changeNoteDescriptionResult =
      type === "change" &&
      id.includes(Id.NoteDescription) &&
      changeNoteDescription(state, [type, id, value]);

    const clickItemResult =
      type === "click" &&
      id.includes(Id.Item) &&
      clickItemFromNote(state, [type, id, value]);

    return processNotes(
      changeNoteTitleResult ||
        changeNoteDescriptionResult ||
        clickItemResult ||
        compose([
          [Shortcut.Add, shortcutAddNote],
          [Shortcut.Up, shortcutUpNote],
          [Shortcut.Down, shortcutDownNote],
          [Shortcut.Collapse, shortcutCollapseNote],
          [Shortcut.Remove, shortcutRemoveNote],
          [Shortcut.Edit, editNote],
        ])(state, [type, id, value]) ||
        changeNotesSearchInputResult ||
        state
    );
  }
};

export const actCollection: IAct<IAppState["collection"]> = (state) => (
  event
) => {
  const [type, id, value] = event;

  const changeCollectionTitleResult =
    type === "change" &&
    id.includes(Id.Collection) &&
    changeCollectionTitle(state, [type, id, value]);

  const changeSearchInputResult =
    type === "change" &&
    id === Id.SearchCollectionsInput &&
    changeCollectionSearchInput(state, [type, id, value]);

  const collection =
    (compose([
      [Shortcut.Add, shortcutAddCollection],
      [Shortcut.Down, shortcutDownCollection],
      [Shortcut.Up, shortcutUpCollection],
      [Shortcut.Edit, shortcutEditCollection],
      [Shortcut.Enter, shortcutEditCollection],
      [Shortcut.Enter, shortcutEnterCollection],
    ])(state, event) as IAppState["collection"]) ||
    changeCollectionTitleResult ||
    changeSearchInputResult ||
    state;
  return processCollection(collection);
};

export const act: IAct<IAppState> = (state) => (event) => {
  const [type, id, value] = event;
  // IO
  if (id === Id.State && state.route === ERoute.Collection) {
    const loadedState = JSON.parse(value);
    const collectionNodes = (Object.keys(loadedState) as string[])
      .map((key) => {
        const node: IEntity = {
          id: key,
          isEditable: false,
          isHighlighted: false,
          title: (loadedState[key] as IAppState["tree"]).title,
        };
        return node;
      })
      .reduce(
        (acc, node) => ({
          ...acc,
          [node.id]: node,
        }),
        {} as IAppState["collection"]["collectionNodes"]
      );
    return {
      ...initialLoadingState,
      isLoading: false,
      collection: {
        ...initialLoadingState.collection,
        collectionNodes,
        collections: Object.keys(collectionNodes),
      },
    };
  } else if (
    id === Id.State &&
    state.route === ERoute.Tree &&
    state.collection.selectedCollection
  ) {
    const tree = JSON.parse(value)[state.collection.selectedCollection];
    return {
      ...initialState,
      isLoading: false,
      tree: tree || initialState.tree,
      collection: {
        ...state.collection,
      },
    };
  } // Switches
  else if (state.isLoading) return { ...state, isLoading: false };
  const tree =
    state.route === ERoute.Tree ? actTree(state.tree)(event) : state.tree;
  const collection =
    state.route === ERoute.Collection
      ? actCollection(state.collection)(event)
      : state.collection;
  const route = !!collection.selectedCollection
    ? ERoute.Tree
    : ERoute.Collection;
  const hasRouteChanged = route !== state.route;
  const title =
    (collection.selectedCollection &&
      collection.collectionNodes[collection.selectedCollection as string]
        ?.title) ||
    "Tree";
  return {
    ...state,
    route,
    tree: { ...tree, title },
    collection,
    isLoading: hasRouteChanged,
  };
};
