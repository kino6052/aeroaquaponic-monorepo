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
    entities?: Entity[]
  ) {
    this.__type = type;
    this.__name = name;
    this.__description = description;
    this.__entities = entities || [];
  }

  interact() {}

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

// class Objective extends Entity {
//   public isComplete: boolean = false;
//   public title: string = "";
//   public description: string = "";

//   constructor(title: string, description: string) {
//     super();
//     this.title = title;
//     this.description = description;
//   }
// }

// class Quest extends Entity {
//   private objectives: Objective[] = [];

//   constructor() {
//     super();
//   }
// }

// class Location extends Entity {
//   constructor() {
//     super();
//   }
// }

// class Status {}

export class World extends Entity {
  constructor(state: IState) {
    super("world", "World", "The world object");

    this.entities = [
      new Entity("cli", "status", "provides status for the game"),
      new Entity("cli", "help", "lets you know things"),
      new Entity("misc", "internet", "lets you browse web", [
        new Entity("misc", "self-sufficiency", "website"),
        new Entity("misc", "test", "website"),
      ]),
    ];
  }

  interact() {}
}

// let cliInstance: CommandLineInterface | undefined;

// export const getCLI = (state: IState) => {
//   if (!cliInstance) {
//     cliInstance = new CommandLineInterface(state);
//   }
//   return cliInstance;
// };
