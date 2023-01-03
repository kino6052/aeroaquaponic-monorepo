import produce from "immer";
import { IState, TEvent } from "../../bridge";
import * as outputs from "../outputs";
import { templateParser } from "../utils";
import { enterHandler } from "./reducers/enter";
import { selectCommands, selectInput } from "./selectors";

export const reduce = (event: TEvent, state: IState): IState => {
  return produce(state, (draft) => {
    if (event[0] === "enter") {
      enterHandler(draft, state);
      return;
    }
    if (event[0] === "change") {
      draft.input = event[1];
      return;
    }
    if (event[0] === "suggest") {
      const commands = selectCommands(state);
      const input = selectInput(state);
      const [command, _argument = ""] = input.split(" ");
      const argument = _argument.toLowerCase();
      const _command = commands[command];
      if (!_command) {
        const commandNames = Object.keys(commands);
        const matches = commandNames.filter((key) =>
          key.toLocaleLowerCase().includes(input.toLocaleLowerCase())
        );
        if (matches.length === 1) {
          draft.input = matches[0];
        } else {
          draft.output = templateParser(outputs.commandMatch, {
            matches: (matches.length > 0 ? matches : commandNames)
              .map((m) => `<li>${m}</li>`)
              .join("\n"),
          });
        }
      } else {
        const argumentNames = _command.args.map(({ name }) =>
          name.toLowerCase()
        );
        const isArgumentInList = argumentNames.includes(argument);
        if (!isArgumentInList) {
          const matches = argumentNames.filter(
            (name) => argument && name.includes(argument)
          );
          if (matches.length === 1) {
            draft.input = `${command} ${matches[0]}`;
          } else {
            draft.output = templateParser(outputs.argumentMatch, {
              command: _command.name,
              matches: (matches.length > 0 ? matches : argumentNames)
                .map((m) => `<li>${m}</li>`)
                .join("\n"),
            });
          }
        }
      }
    }
  });
};

export const compose = (state: IState) => (events: TEvent[]) =>
  events.reduce((_state, event) => reduce(event, _state), state);
