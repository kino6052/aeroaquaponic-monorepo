import { IState, TEvent } from "../interfaces";
import produce from "immer";
import {
  selectCommands,
  selectHasReadManifest,
  selectInput,
  selectIsGoogling,
} from "./selectors";
import * as outputs from "../outputs";
import { generateCommandOutput, getCommandData } from "./store";
import { templateParser } from "../utils";

export const reduce = (event: TEvent, state: IState): IState => {
  return produce(state, (draft) => {
    if (event[0] === "enter") {
      draft.input = "";
      if (selectHasReadManifest(state) && selectInput(state) === "todo") {
        draft.output = outputs.todo;
        return;
      }
      if (state.input === "help") {
        draft.output = outputs.help;
        return;
      }
      // TODO: Make the field "browser" instead of "google" and options should be "websites"
      if (selectInput(state) === "google self-sufficiency") {
        draft.google.isGoogling = true;
        draft.google.options["self-sufficiency"].visited = true;
        draft.commands["todo"] = {
          name: "todo",
          description: "Your todo list",
          args: [],
        };
        draft.output = outputs.google;
        return;
      }
      if (
        selectHasReadManifest(state) === true &&
        selectIsGoogling(state) === true &&
        selectInput(state) === "leave"
      ) {
        draft.google.isGoogling = false;
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
      if (selectInput(state) === "google") {
        draft.output = generateCommandOutput(getCommandData(state, "google"));
        return;
      }

      if (selectInput(state) === "") {
        draft.output = generateCommandOutput(getCommandData(state));
        return;
      }

      const commands = selectCommands(state);
      const input = selectInput(state);
      if (!commands[input]) {
        const matches = Object.keys(commands).filter((key) =>
          key.includes(input)
        );
        if (matches.length === 1) {
          draft.input = matches[0];
        } else {
          draft.output = templateParser(outputs.commandMatch, {
            matches: matches.join("\n"),
          });
        }
      }
    }
  });
};

export const compose = (state: IState) => (events: TEvent[]) =>
  events.reduce((_state, event) => reduce(event, _state), state);
