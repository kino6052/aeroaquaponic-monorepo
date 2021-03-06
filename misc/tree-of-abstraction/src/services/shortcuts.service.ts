import hotkeys from "hotkeys-js";
import { Id } from "../bridge";
import { EventSubject } from "../utils/EventWrapper";

export enum Shortcut {
  ToggleScope = "alt+shift+t",
  Add = "ctrl+shift+a",
  MoveDown = "ctrl+down",
  MoveUp = "ctrl+up",
  Up = "up",
  Down = "down",
  Edit = "ctrl+shift+e",
  Redo = "ctrl+shift+z",
  Undo = "ctrl+z",
  Collapse = "ctrl+shift+c",
  Enter = "enter",
  Remove = "delete",
  Save = "ctrl+s",
}

try {
  hotkeys.filter = () => true;
  hotkeys(Object.values(Shortcut).join(","), (e, handler) => {
    e.preventDefault();
    EventSubject.next(["keydown", Id.Keyboard, handler.key]);
  });
} catch (e) {
  console.warn("Couldn't initialize keyboard listener");
}
