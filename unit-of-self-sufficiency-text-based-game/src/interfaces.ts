export type TCommand = "enter" | "change" | "suggest";

export type TEvent = [TCommand, string];

export type TAvailableCommand = {
  name: string;
  description: string;
  args: TAvailableCommand[];
};

export interface IState {
  input: string;
  output: string;
  commands: Record<string, TAvailableCommand>;
  google: {
    isGoogling: boolean;
    options: {
      [key: string]: {
        visited: boolean;
      };
    };
  };
}
