import {
  lowerCaseEquals,
  lowerCaseIncludes,
  makeBold,
  makeItalic,
  makeListItem,
  templateParser,
} from "../utils";
import { Entity } from "./global";
import { outputs } from "../outputs";

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

  generateSuggestionOutput(entity: Entity[]): [string, string] {
    const command: Entity | undefined = entity.slice(-1)?.[0] || this.__entity;
    const names = entity.map((v) => v.state.name);
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
      ? command.entities.map((v) => getMatchOutput(names, v)).join("")
      : getMatchOutput(names.slice(0, -1), command);

    const result = templateParser(outputs.commandMatch, {
      matches,
    });

    return [result, names.join(" ")];
  }

  getEntities(commands: string[], isExact: boolean = false): Entity[] {
    if (!this.__entity) return [];

    const filteredCommands = commands.filter((v) => v);

    let entity: Entity = this.__entity;
    const entities = [];
    let index = 0;

    for (let i = 0; i < filteredCommands.length; i++) {
      const command = filteredCommands[i];
      const matches = entity.entities.filter(({ state: { name } }) =>
        isExact
          ? lowerCaseEquals(name, command)
          : lowerCaseIncludes(name, command)
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
}
