import { IState } from "../../bridge";
import { generateId } from "../utils";

class Entity {
  private id = generateId();
  private entities: Entity[] = [];

  constructor() {}

  interact() {}

  getEntities() {}
}

class Objective extends Entity {
  public isComplete: boolean = false;
  public title: string = "";
  public description: string = "";

  constructor(title: string, description: string) {
    super();
    this.title = title;
    this.description = description;
  }
}

class Quest extends Entity {
  private objectives: Objective[] = [];

  constructor() {
    super();
  }
}

class Location extends Entity {
  constructor() {
    super();
  }
}

class Status {}

class World {
  private quest: Quest | undefined;
  private location: Location | undefined;

  constructor(state: IState) {}

  interact() {}
}

// let cliInstance: CommandLineInterface | undefined;

// export const getCLI = (state: IState) => {
//   if (!cliInstance) {
//     cliInstance = new CommandLineInterface(state);
//   }
//   return cliInstance;
// };
