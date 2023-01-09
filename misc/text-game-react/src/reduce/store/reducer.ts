import produce from "immer";
import { IState, TEvent } from "../../bridge";
import { getCLI } from "../model/cli";
import { selectInput } from "./selectors";

export const reduce = (event: TEvent, state: IState): IState => {
  const cli = getCLI(state);
  return produce(state, (draft) => {
    if (event[0] === "enter") {
      cli.input = selectInput(state); // TODO: Parse state
      cli.interact();
      cli.updateDraft(draft);
      // enterHandler(draft, state);
      // return;
    }
    if (event[0] === "change") {
      draft.input = event[1];
      return;
    }
    if (event[0] === "suggest") {
      cli.input = selectInput(state); // TODO: Parse state
      cli.suggest();
      cli.updateDraft(draft);
    }
  });
};

export const compose = (state: IState) => (events: TEvent[]) =>
  events.reduce((_state, event) => reduce(event, _state), state);
