import { IState } from "../../bridge";

class CommandLineInterface {
  private __output: string = "";
  private __input: string = "";
  private __history: string[] = [];

  constructor(state: IState) {
    this.__output = state.output;
    this.__input = state.input;
    this.__history = state.history;
  }

  clear() {
    this.__input = "";
    this.__output = "";
    this.__history = [];
  }

  input(input: string) {}

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
