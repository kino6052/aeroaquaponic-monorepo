import produce from "immer";
import { IState, TEvent } from "../../bridge";
import * as outputs from "../outputs";
import { templateParser } from "../utils";
import {
  selectCommands,
  selectHasReadManifest,
  selectInput,
} from "./selectors";
import { generateCommandOutput } from "./store";

export const reduce = (event: TEvent, state: IState): IState => {
  return produce(state, (draft) => {
    if (event[0] === "enter") {
      draft.input = "";
      if (selectInput(state) === "google") {
        draft.output = generateCommandOutput(state, "google");
        return;
      }
      if (selectInput(state) === "") {
        draft.output = generateCommandOutput(state);
        return;
      }
      if (selectHasReadManifest(state) && selectInput(state) === "todo") {
        draft.output = outputs.todo;
        return;
      }
      if (state.input === "help") {
        draft.output = outputs.help;
        return;
      }
      // TODO: Make the field "browser" instead of "google" and options should be "websites"
      // TODO: There should be news website too
      if (selectInput(state) === "google self-sufficiency") {
        // draft.google.isGoogling = true;
        draft.google.options["self-sufficiency"].visited = true;
        draft.commands["todo"] = {
          name: "todo",
          description: "Your todo list",
          args: [],
        };
        draft.commands["google"].args.push({
          name: "Buy Land Dot Com",
          description: "You still haven't bought land??? What's yawr prawblem?",
          args: [],
        });
        draft.output = outputs.hasReadManifest;
        return;
      }
      if (
        selectHasReadManifest(state) === true &&
        // selectIsGoogling(state) === true &&
        selectInput(state) === "leave"
      ) {
        // draft.google.isGoogling = false;
        draft.output = outputs.hasReadManifest;
        return;
      }
      draft.output = templateParser(outputs.unknownCommand, {
        command: selectInput(state),
      });
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
            matches: (matches.length > 0 ? matches : commandNames).join("\n"),
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
              matches: (matches.length > 0 ? matches : argumentNames).join(
                "\n"
              ),
            });
          }
        }
      }
    }
  });
};

export const compose = (state: IState) => (events: TEvent[]) =>
  events.reduce((_state, event) => reduce(event, _state), state);
