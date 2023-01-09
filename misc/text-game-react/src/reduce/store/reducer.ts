import produce from "immer";
import { IState, TEvent } from "../../bridge";
import { getCLI } from "../model/cli";
import { selectInput } from "./selectors";

export const reduce = (event: TEvent, state: IState): IState => {
  return produce(state, (draft) => {
    const cli = getCLI(state);
    if (event[0] === "enter") {
      cli.input = selectInput(state); // TODO: Parse state
      cli.interact(cli);
      cli.updateDraft(draft);
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
