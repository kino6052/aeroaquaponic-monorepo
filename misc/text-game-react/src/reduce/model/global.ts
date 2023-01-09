import { IState } from "../../bridge";
import { Utils } from "../utils";

export type TEntityType = "world" | "quest" | "objective" | "cli" | "misc";

export class Entity {
  private __id = Utils.generateId();
  private __entities: Entity[] = [];
  private __type: TEntityType = "misc";
  private __name: string = "";
  private __description: string = "";

  constructor(
    type: TEntityType,
    name: string,
    description: string,
    entities?: Entity[],
    interact?: () => string
  ) {
    this.__type = type;
    this.__name = name;
    this.__description = description;
    this.__entities = entities || [];
    if (interact) this.interact = interact;
  }

  interact(): string {
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
  if (!worldInstance) {
    worldInstance = new Entity("world", "world", "the world object", [
      new Entity("cli", "status", "provides status for the game"),
      new Entity("cli", "help", "lets you know things"),
      new Entity("quest", "todo", "your todo list", [
        new Entity(
          "objective",
          "learn",
          "go on the internet and learn about self-sufficiency",
          [],
          () => {
            getWorld(state).entities[0].interact = () => "Done";
            return "Completed quest. Check status.";
          }
        ),
        new Entity("objective", "test", "website", [], () => "Website!"),
      ]),
      new Entity("misc", "internet", "lets you browse web", [
        new Entity("misc", "self-sufficiency", "website"),
        new Entity("misc", "test", "website", [], () => "Website!"),
      ]),
    ]);
  }
  return worldInstance;
};
