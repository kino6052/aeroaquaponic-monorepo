import { IState, TEntityType } from "../../bridge";
import { makeHeader, makeParagraph, Utils } from "../utils";
import { getCLI } from "./cli";
import { deserialize, SerializedWorld } from "./entities";

export class Entity {
  private __id = Utils.generateId();
  private __entities: Entity[] = [];
  private __type: TEntityType = "misc";
  private __name: string = "";
  private __description: string = "";
  private __meta: Record<string, unknown> = {};

  constructor(
    id: string,
    type: TEntityType,
    name: string,
    description: string,
    entities?: Entity[],
    interact?: (cli: ReturnType<typeof getCLI>) => string,
    meta?: Record<string, unknown>
  ) {
    this.__id = id;
    this.__type = type;
    this.__name = name;
    this.__description = description;
    this.__entities = entities || [];
    this.__meta = meta || {};
    if (interact) this.interact = interact;
  }

  interact(cli: ReturnType<typeof getCLI>): string {
    return `${makeHeader(`Command: ${this.__name}`)}${makeParagraph(
      this.__description
    )}`;
  }

  get state() {
    return {
      id: this.__id,
      entities: this.__entities,
      type: this.__type,
      name: this.__name,
      description: this.__description,
      meta: this.__meta,
    };
  }

  set entities(entities: Entity[]) {
    this.__entities = entities;
  }

  get entities() {
    return this.__entities;
  }
}

let worldInstance: Entity | undefined;

export const getWorld = (entities: SerializedWorld) => {
  // if (!worldInstance) {
  //   worldInstance = deserialize(state);
  // }
  // return worldInstance;
  return deserialize(entities);
};
