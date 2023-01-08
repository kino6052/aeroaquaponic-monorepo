import { IState } from "../../bridge";
import {
  filterWithFallback,
  listOr,
  lowerCaseIncludes,
  makeBold,
  makeItalic,
  makeList,
  makeListItem,
  templateParser,
} from "../utils";
import { Entity, World } from "./global";
import * as outputs from "../outputs";

class InputParser {
  private __commands: string[] = [];
  private __entity: Entity | undefined;

  constructor(entity: Entity) {
    this.__entity = entity;
  }

  parse(input: string) {
    this.__commands = input.split(" ");
    return this.__commands;
  }

  getSuggestions(commands: string[]) {
    if (!this.__entity) return "";
    const finalEntity = commands.reduce<[Entity[], number]>(
      (tuple, command, i) => {
        if (tuple[0].length > 1) return tuple;
        const entities = listOr(tuple[0][0]?.entities, tuple[0]);
        const filteredMatches = entities.filter(({ state: { name } }) =>
          lowerCaseIncludes(name, command)
        );
        const hasMatches = !!filteredMatches && filteredMatches.length > 0;
        if (hasMatches) return [filteredMatches, tuple[1] + 1];
        return [entities, tuple[1]];
      },
      [[this.__entity], 0]
    );

    const commandPrefix = [commands.slice(0, finalEntity[1] - 1).join(" ")]
      .filter((v) => v)
      .map(makeItalic);

    const matches = finalEntity[0]
      ?.map(({ state }) =>
        makeListItem(
          `${commandPrefix}${makeBold(state.name)}: ${state.description}`
        )
      )
      .join("");
    const result = templateParser(outputs.commandMatch, {
      matches,
    });
    return result;
  }
}

class CommandLineInterface {
  private __output: string = "";
  private __input: string = "";
  private __history: string[] = [];
  private __world: World | undefined;

  constructor(state: IState) {
    this.__output = state.output;
    this.__input = state.input;
    this.__history = state.history;
    this.__world = new World(state);
  }

  clear() {
    this.__input = "";
    this.__output = "";
    this.__history = [];
  }

  set input(input: string) {
    this.__input = input;
  }

  suggest() {
    if (!this.__world) return;
    const inputParser = new InputParser(this.__world);
    const commands = inputParser.parse(this.__input);
    const result = inputParser.getSuggestions(commands);
    this.__output = result;
  }

  getState = (): { input: string; output: string; history: string[] } => ({
    input: this.__input,
    output: this.__output,
    history: this.__history,
  });

  updateDraft = (draft: IState) => {
    Object.entries(this.getState()).forEach(
      // @ts-ignore
      ([key, value]) => (draft[key] = value)
    );
  };
}

let cliInstance: CommandLineInterface | undefined;

export const getCLI = (state: IState) => {
  if (!cliInstance) {
    cliInstance = new CommandLineInterface(state);
  }
  return cliInstance;
};
