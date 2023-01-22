import produce from "immer";
import { IState, TEvent } from "../../bridge";
import { getCLI } from "../model/cli";
import { getEntityMap } from "../model/entities";
import { EntityId } from "../model/entities/utils/types";
import { outputs } from "../outputs";
import { selectInput } from "./selectors";

export const reduce = (event: TEvent, state: IState): IState => {
  return produce(state, (draft) => {
    const cli = getCLI(state);
    if (event[0] === "init") {
      const initializedState: IState = {
        input: "",
        history: [],
        output: outputs.getInitialOutput(),
        entities: [
          EntityId.World,
          EntityId.Status,
          EntityId.Phone,
          EntityId.Help,
          EntityId.Todo,
          EntityId.Internet,
          EntityId.SelfSufficiencyWebsite,
          EntityId.TodoQuest001Task001LearnAboutSelfSufficiency,
          EntityId.Friend001,
          EntityId.Mom,
          EntityId.Skip,
        ].reduce((acc, id) => ({ ...acc, [id]: getEntityMap()[id] }), {}),
      };

      Object.keys(initializedState).forEach((key) => {
        const __key = key as keyof IState;
        // @ts-ignore
        draft[__key] = initializedState[__key];
      });

      return;
    }
    if (event[0] === "enter") {
      cli.input = selectInput(state); // TODO: Parse state
      cli.interact(state, cli);
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
