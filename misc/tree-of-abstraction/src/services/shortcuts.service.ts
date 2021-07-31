import hotkeys from "hotkeys-js";
import { Id } from "../bridge";
import { EventSubject } from "../utils/EventWrapper";
import { randomNumber } from "../utils/memory";

export enum Shortcut {
  ToggleMemory = "alt+shift+m",
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
  // Memory
  ToggleScope = "alt+shift+t",
  IncrementScore = "alt+shift+1",
  DecrementScore = "alt+shift+2",
  UpdateNumber = "alt+shift+3",
}

try {
  hotkeys.filter = () => true;
  hotkeys(Object.values(Shortcut).join(","), (e, handler) => {
    e.preventDefault();
    if (handler.key === Shortcut.UpdateNumber) {
      Object.keys(randomNumber).forEach((id) => {
        delete randomNumber[id];
      });
      console.warn(randomNumber);
    }
    EventSubject.next(["keydown", Id.Keyboard, handler.key]);
  });
} catch (e) {
  console.warn("Couldn't initialize keyboard listener");
}
