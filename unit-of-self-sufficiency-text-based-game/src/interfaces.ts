export type TCommand = "enter" | "change" | "suggest";

export type TEvent = [TCommand, string];

export type TAvailableCommand = {
  name: string;
  description: string;
  args: TAvailableCommand[];
};

export interface IBrowser {
  current?: string;
  visited: string[];
  resources: {
    [key: string]: {
      url: string;
      description: string;
    };
  };
}

export interface IState {
  input: string;
  output: string;
  commands: Record<string, TAvailableCommand>;
  // browser: IBrowser;
  google: {
    isGoogling: boolean;
    options: {
      [key: string]: {
        visited: boolean;
      };
    };
  };
}
