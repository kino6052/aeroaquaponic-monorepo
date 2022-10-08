import { BehaviorSubject } from "rxjs";
import { act } from "./services/service";
import { EventSubject } from "./utils/EventWrapper";

export type InputType = "change" | "click" | "focus";

export type IInput = [InputType, string, string];

export type IState = {};

EventSubject.subscribe((event) => {
  StateSubject.next(act(StateSubject.getValue())(event));
});

export const StateSubject = new BehaviorSubject<IState>({});
