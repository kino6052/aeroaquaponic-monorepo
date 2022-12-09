export type TCommand = "select";

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

export enum Id {
  ReactAPISolution = "ReactAPISolution",
  BrowserAPISolution = "BrowserAPISolution",
  ReactLifeCycleSolution = "ReactLifeCycleSolution",
  ReactLifeCycleCheckMountedSolution = "ReactLifeCycleCheckMountedSolution",
  UseCheckMountedHook = "UseCheckMountedHook",
  Root = "Root",
}

export interface IState {
  data: { [id in Id]: { id: Id; text: string; children: Id[] } };
  current: Id[];
  history: Id[];
}
