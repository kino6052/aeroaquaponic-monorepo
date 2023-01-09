import { IState } from "../../bridge";
import { outputs } from "../outputs";
import { templateParser } from "../utils";
import { Entity, getWorld } from "./global";
import { InputParser } from "./parser";

class CommandLineInterface {
  private __output: string = "";
  private __input: string = "";
  private __history: string[] = [];
  private __world: Entity | undefined;
  private __suggestMode: boolean = false;

  constructor(state: IState) {
    this.__output = state.output;
    this.__input = state.input;
    this.__history = state.history;
    this.__world = getWorld(state);
  }

  update(state: IState) {
    this.__history = state.history;
    this.__input = state.input;
    this.__output = state.output;
    this.__world = getWorld(state);
  }

  clear() {
    this.__input = "";
    this.__output = "";
    this.__history = [];
  }

  set input(input: string) {
    this.__input = input;
  }

  updateHistory() {
    this.__history = [...this.__history, this.__output];
  }

  suggest() {
    if (!this.__world) return;
    const inputParser = new InputParser(this.__world);
    const commands = inputParser.parse(this.__input);
    const entities = inputParser.getEntities(commands);
    const result = inputParser.generateSuggestionOutput(entities);
    if (!this.__suggestMode) this.updateHistory();
    this.__output = result[0];
    this.__input = result[1];
    this.__suggestMode = true;
  }

  interact(cli: CommandLineInterface) {
    if (!this.__world) return;
    const inputParser = new InputParser(this.__world);
    const command = this.__input.trim();
    if (!command) {
      this.suggest();
      return;
    }
    this.__suggestMode = false;
    const commands = inputParser.parse(command);
    const entities = inputParser.getEntities(commands, true);
    const isExact = entities.length === commands.length;
    this.updateHistory();
    if (!isExact) {
      this.__output = templateParser(outputs.unknownCommand, {
        command,
      });
      this.__input = "";
      return;
    }
    const exact = entities.slice(-1)[0];
    const result = exact.interact(cli);
    this.__output = result;
    this.__input = "";
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
  cliInstance.update(state);
  return cliInstance;
};
