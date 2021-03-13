import { without, xor } from "lodash";
import { Id, initialState, IState, RedoStack, UndoStack } from "../bridge";
import { IEvent } from "../utils/EventWrapper";
import { Shortcut } from "./shortcuts.service";
import {
  changeItemTitle,
  process,
  changeSearchInput,
  clickItem,
  shortcutAddItem,
  shortcutDown,
  shortcutMoveDown,
  shortcutMoveUp,
  shortcutRedo,
  shortcutRemoveItem,
  shortcutToggleEditItem,
  shortcutUndo,
  shortcutUp,
  updateHighligted,
  shortcutCollapseItem,
  shortcutEnter,
} from "./tree.service";

const toggleScope = (state: IState, event: IEvent): IState => ({
  ...state,
  scope: without(["tree", "notes"], state.scope).join("") as "tree" | "notes",
});

export const act = (state: IState) => ([type, id, value]: IEvent): IState => {
  // Shortcuts
  const toggleScopeResult =
    type === "keydown" &&
    id === Id.Keyboard &&
    value === Shortcut.ToggleScope &&
    toggleScope(state, [type, id, value]);
  if (state.scope === "tree") {
    const shortcutCollapseItemResult =
      type === "keydown" &&
      id === Id.Keyboard &&
      value === Shortcut.Colapse &&
      shortcutCollapseItem(state, [type, id, value]);
    const shortcutEnterResult =
      type === "keydown" &&
      id === Id.Keyboard &&
      value === Shortcut.Enter &&
      shortcutEnter(state, [type, id, value]);
    const shortcutToggleEditResult =
      type === "keydown" &&
      id === Id.Keyboard &&
      value === Shortcut.Edit &&
      shortcutToggleEditItem(state, [type, id, value]);
    const shortcutAddItemResult =
      type === "keydown" &&
      id === Id.Keyboard &&
      value === Shortcut.Add &&
      shortcutAddItem(state, [type, id, value]);
    const shortcutDownResult =
      type === "keydown" &&
      id === Id.Keyboard &&
      value === Shortcut.Down &&
      shortcutDown(state, [type, id, value]);
    const shortcutUpResult =
      type === "keydown" &&
      id === Id.Keyboard &&
      value === Shortcut.Up &&
      shortcutUp(state, [type, id, value]);
    const shortcutMoveDownResult =
      type === "keydown" &&
      id === Id.Keyboard &&
      value === Shortcut.MoveDown &&
      shortcutMoveDown(state, [type, id, value]);
    const shortcutMoveUpResult =
      type === "keydown" &&
      id === Id.Keyboard &&
      value === Shortcut.MoveUp &&
      shortcutMoveUp(state, [type, id, value]);
    const shortcutRemoveItemResult =
      type === "keydown" &&
      id === Id.Keyboard &&
      value === Shortcut.Remove &&
      shortcutRemoveItem(state, [type, id, value]);
    const shortcutUndoResult =
      type === "keydown" &&
      id === Id.Keyboard &&
      value === Shortcut.Undo &&
      shortcutUndo(state, [type, id, value]);
    const shortcutRedoResult =
      type === "keydown" &&
      id === Id.Keyboard &&
      value === Shortcut.Redo &&
      shortcutRedo(state, [type, id, value]);

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
      shortcutAddItemResult ||
      shortcutRemoveItemResult ||
      shortcutMoveDownResult ||
      shortcutMoveUpResult ||
      clickItemResult ||
      changeItemTitleResult;

    if (undoableTreeResult) {
      RedoStack.length = 0;
      UndoStack.push(state.treeNodes);
    }

    const nonUndoableTreeResult =
      // Undo / Redo
      shortcutUndoResult ||
      shortcutRedoResult ||
      // Other
      shortcutUpResult ||
      shortcutDownResult ||
      shortcutCollapseItemResult ||
      shortcutEnterResult ||
      shortcutToggleEditResult ||
      // IO
      changeSearchInputResult ||
      state;

    const treeResult = undoableTreeResult || nonUndoableTreeResult;

    return process({
      ...treeResult,
      treeNodes: updateHighligted(treeResult),
    });
  }
  return toggleScopeResult || state;
};

export const sequence = (inputs: IEvent[]): IState =>
  inputs.reduce((acc, input) => act(acc)(input), initialState);

export const getSequence = (initialState: IState) => (
  inputs: IEvent[]
): IState => inputs.reduce((acc, input) => act(acc)(input), initialState);
