import produce from "immer";
import { Id, IState, TEvent } from "../interfaces";

export const reduce = (event: TEvent, state: IState): IState => {
  return produce(state, (draft) => {
    if (event[0] === "select") {
      if (draft.current.includes(event[1] as Id)) {
        const id = event[1] as Id;
        draft.current = draft.data[id].children;
        draft.history.push(id);
        return;
      }
      if (draft.history.includes(event[1] as Id)) {
        const id = event[1] as Id;
        draft.current = draft.data[id].children;
        const index = draft.history.findIndex((_id) => _id === id);
        draft.history = draft.history.slice(0, index + 1);
        return;
      }
      return;
    }
  });
};

export const compose = (state: IState) => (events: TEvent[]) =>
  events.reduce((_state, event) => reduce(event, _state), state);
