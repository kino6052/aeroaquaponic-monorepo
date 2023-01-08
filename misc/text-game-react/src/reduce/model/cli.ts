import { IState } from "../../bridge";
import * as outputs from "../outputs";
import {
  listOr,
  lowerCaseIncludes,
  makeBold,
  makeItalic,
  makeListItem,
  templateParser,
} from "../utils";
import { Entity, World } from "./global";

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

  generateOutput(
    commands: string[],
    entity: Entity,
    index: number
  ): [string, string] {
    console.warn(commands, index);
    const entities = entity.entities;
    const hasEntities = entities.length > 0;

    const commandPrefix = [commands.join(" ")].filter((v) => v);

    const getItalicCommandPrefix = (prefix: string[]) =>
      prefix.map((v) => makeItalic(v) + " ");

    const matches = listOr(entities, [entity])
      ?.map(({ state }) =>
        makeListItem(
          `${getItalicCommandPrefix(
            commands.filter((name) => name !== state.name)
          )}${makeBold(state.name)}: ${state.description}`
        )
      )
      .join("");
    const result = templateParser(outputs.commandMatch, {
      matches,
    });

    return [result, commandPrefix.join(" ")];
  }

  getSuggestions(_commands: string[]): [string, string] {
    if (!this.__entity) return ["", ""];

    const commands = _commands.filter((v) => v);

    let entity: Entity = this.__entity;
    let entityNames = [];
    let index = 0;

    for (let i = 0; i < commands.length; i++) {
      const command = commands[i];
      const matches = entity.entities.filter(({ state: { name } }) =>
        lowerCaseIncludes(name, command)
      );
      const exact = matches[0];
      if (!exact || matches.length > 1) {
        return this.generateOutput(entityNames, entity, i);
      }
      index = i;
      entityNames.push(exact.state.name);
      entity = exact;
    }

    return this.generateOutput(entityNames, entity, commands.length - 1);
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
