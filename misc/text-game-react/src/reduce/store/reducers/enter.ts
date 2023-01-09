import { IState } from "../../../bridge";
import { getCLI } from "../../model/cli";
import * as outputs from "../../outputs/outputs";
import { templateParser } from "../../utils";
import { selectHasReadManifest, selectInput } from "../selectors";
import { generateCommandOutput } from "../store";

export const enterHandler = (draft: IState, state: IState) => {
  draft.input = "";
  draft.history.push(draft.output);
  if (selectInput(state) === "clear") {
    const cli = getCLI(state);
    cli.clear();
    cli.updateDraft(draft);
    return;
  }
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
};
