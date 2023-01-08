import { IState } from "../../bridge";
import * as outputs from "../outputs";
import {
  lowerCaseIncludes,
  makeBold,
  makeItalic,
  makeListItem,
  templateParser,
} from "../utils";
import { Entity, World } from "./global";

export class InputParser {
  private __commands: string[] = [];
  private __entity: Entity | undefined;

  constructor(entity: Entity) {
    this.__entity = entity;
  }

  parse(input: string) {
    this.__commands = input.split(" ");
    return this.__commands;
  }

  generateOutput(entity: Entity[]): [string, string] {
    const command: Entity | undefined = entity.slice(-1)?.[0] || this.__entity;

    const __names = entity.map((v) => v.state.name);

    const hasChildren = !!(command?.entities.length > 0);

    const getMatchOutput = (names: string[], entity: Entity) => {
      return makeListItem(
        `${names
          .map(makeItalic)
          .map((v) => v + " ")
          .join("")}${makeBold(entity.state.name)}: ${entity.state.description}`
      );
    };

    const matches = hasChildren
      ? command.entities.map((v) => getMatchOutput(__names, v)).join("")
      : getMatchOutput(__names.slice(0, -1), command);

    const result = templateParser(outputs.commandMatch, {
      matches,
    });

    return [result, __names.join(" ")];
  }

  __getSuggestions(_commands: string[]): Entity[] {
    if (!this.__entity) return [];

    const commands = _commands.filter((v) => v);

    let entity: Entity = this.__entity;
    const entities = [];
    let index = 0;

    for (let i = 0; i < commands.length; i++) {
      const command = commands[i];
      const matches = entity.entities.filter(({ state: { name } }) =>
        lowerCaseIncludes(name, command)
      );
      const exact = matches[0];
      if (!exact || matches.length > 1) {
        return entities;
      }
      index = i;
      entities.push(exact);
      entity = exact;
    }

    return entities;
  }

  // TODO: Generate entity list (or list of ids)
  // So that you can grab one of the entity you need and interact with it
  getSuggestions(_commands: string[]): [string, string] {
    const result = this.__getSuggestions(_commands);
    return this.generateOutput(result);
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
    this.__output = result[0];
    this.__input = result[1];
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
