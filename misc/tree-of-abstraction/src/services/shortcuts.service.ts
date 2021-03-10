import { Listener } from "keypress.js";
import { Id } from "../bridge";
import { EventSubject } from "../utils/EventWrapper";

export enum Shortcut {
  Add = "ctrl shift a",
  MoveDown = "ctrl down",
  MoveUp = "ctrl up",
  Edit = "ctrl shift e",
  Undo = "ctrl z",
  Redo = "ctrl y",
}

try {
  const listener = new Listener();

  listener.simple_combo(Shortcut.Add, () => {
    EventSubject.next(["keydown", Id.Keyboard, Shortcut.Add]);
  });

  listener.simple_combo(Shortcut.MoveDown, () => {
    EventSubject.next(["keydown", Id.Keyboard, Shortcut.MoveDown]);
  });

  listener.simple_combo(Shortcut.MoveUp, () => {
    EventSubject.next(["keydown", Id.Keyboard, Shortcut.MoveUp]);
  });

  listener.simple_combo(Shortcut.Edit, () => {
    EventSubject.next(["keydown", Id.Keyboard, Shortcut.Edit]);
  });

  listener.simple_combo(Shortcut.Undo, () => {
    EventSubject.next(["keydown", Id.Keyboard, Shortcut.Undo]);
  });

  listener.simple_combo(Shortcut.Redo, () => {
    EventSubject.next(["keydown", Id.Keyboard, Shortcut.Redo]);
  });
} catch (e) {
  console.warn("Couldn't initialize keyboard listener");
}
