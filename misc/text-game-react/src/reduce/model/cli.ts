import { IState } from "../../bridge";

class CLI {
  private __output: string = "";
  private __input: string = "";
  private __history: string[] = [];

  constructor() {}

  clear() {
    this.__input = "";
    this.__output = "";
    this.__history = [];
  }

  input(input: string) {}

  getState = (): { input: string; output: string; history: string[] } => ({
    input: this.__input,
    output: this.__output,
    history: [],
  });

  updateDraft = (draft: IState) => {
    Object.entries(this.getState()).forEach(
      // @ts-ignore
      ([key, value]) => (draft[key] = value)
    );
  };
}

let cliInstance: CLI | undefined;

export const getCLI = () => {
  if (!cliInstance) {
    cliInstance = new CLI();
  }
  return cliInstance;
};
