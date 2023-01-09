import { IState, TEntityType } from "../../bridge";
import { Utils } from "../utils";
import { getCLI } from "./cli";
import { deserialize } from "./entities";

export class Entity {
  private __id = Utils.generateId();
  private __entities: Entity[] = [];
  private __type: TEntityType = "misc";
  private __name: string = "";
  private __description: string = "";

  constructor(
    id: string,
    type: TEntityType,
    name: string,
    description: string,
    entities?: Entity[],
    interact?: (cli: ReturnType<typeof getCLI>) => string
  ) {
    this.__id = id;
    this.__type = type;
    this.__name = name;
    this.__description = description;
    this.__entities = entities || [];
    if (interact) this.interact = interact;
  }

  interact(cli: ReturnType<typeof getCLI>): string {
    return "...";
  }

  get state() {
    return {
      id: this.__id,
      entities: this.__entities,
      type: this.__type,
      name: this.__name,
      description: this.__description,
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

export const getWorld = (state: IState) => {
  // if (!worldInstance) {
  //   worldInstance = deserialize(state);
  // }
  // return worldInstance;
  return deserialize(state);
};
