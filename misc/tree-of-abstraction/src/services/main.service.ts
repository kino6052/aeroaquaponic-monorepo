import { without } from "lodash";
import { Id, initialState, IState, RedoStack, UndoStack } from "../bridge";
import { IEvent } from "../utils/EventWrapper";
import { compose } from "../utils/utils";
import {
  processNotes,
  shortcutAddNote,
  shortcutCollapseNote,
  shortcutDownNote,
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

const toggleScope = (state: IState, event: IEvent): IState => ({
  ...state,
  scope: without(["tree", "notes"], state.scope).join("") as "tree" | "notes",
});

export const act = (_state: IState) => ([type, id, value]: IEvent): IState => {
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

    return processTree({
      ...treeResult,
      treeNodes: updateHighligted(treeResult),
    });
  }
  if (state.scope === "notes") {
    return processNotes(
      compose([
        [Shortcut.Add, shortcutAddNote],
        [Shortcut.Up, shortcutUpNote],
        [Shortcut.Down, shortcutDownNote],
        [Shortcut.Collapse, shortcutCollapseNote],
      ])(state, [type, id, value]) || state
    );
  }
  return state;
};
