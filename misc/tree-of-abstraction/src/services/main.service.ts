import { without } from "lodash";
import { ICollectionState, Id, ITreeState, Scope } from "../bridge";
import { IEvent } from "../utils/EventWrapper";
import { compose } from "../utils/utils";
import {
  changeNoteDescription,
  changeNotesSearchInput,
  changeNoteTitle,
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

export const UndoStack: ITreeState["treeNodes"][] = [];
export const RedoStack: ITreeState["treeNodes"][] = [];

const toggleScope = (state: ITreeState, event: IEvent): ITreeState => ({
  ...state,
  scope: without(Scope, state.scope)[0],
});

export const treeAct = (_state: ITreeState) => ([
  type,
  id,
  value,
]: IEvent): ITreeState => {
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

    return processNotes(
      changeNoteTitleResult ||
        changeNoteDescriptionResult ||
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

export const collectionAct = (state: ICollectionState) => (event: IEvent) => {
  return state;
  // compose([
  //   [Shortcut.Add, shortcutAddItem],
  //   [Shortcut.Remove, shortcutRemoveItem],
  //   [Shortcut.MoveDown, shortcutMoveDown],
  //   [Shortcut.MoveUp, shortcutMoveUp],
  // ]);
};
