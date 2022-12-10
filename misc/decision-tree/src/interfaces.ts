export type TCommand = "select" | "restore";

export type TEvent = [TCommand, string];

export enum Id {
  ReactAPISolution = "ReactAPISolution",
  BrowserAPISolution = "BrowserAPISolution",
  ReactLifeCycleSolution = "ReactLifeCycleSolution",
  ReactLifeCycleCheckMountedSolution = "ReactLifeCycleCheckMountedSolution",
  UseCheckMountedHook = "UseCheckMountedHook",
  Root = "Root",
}

export interface IState {
  data: {
    [id in Id]: { id: Id; title: string; description: string; children: Id[] };
  };
  currentId?: Id;
  next: Id[];
  history: Id[];
}
