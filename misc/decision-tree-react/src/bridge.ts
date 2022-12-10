import { BehaviorSubject, Subject } from "rxjs";

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

export type TCommand = "select" | "restore";

export type TEvent = [TCommand, string];

export const AppEventSubject = new Subject<TEvent>();

export const initialState: IState = {
  data: {
    [Id.Root]: {
      id: Id.Root,
      title: "Select Options",
      description: "",
      children: [Id.ReactAPISolution, Id.BrowserAPISolution],
    },
    [Id.ReactAPISolution]: {
      id: Id.ReactAPISolution,
      title: "Solutions Related to React API",
      description: "",
      children: [Id.ReactLifeCycleSolution],
    },
    [Id.BrowserAPISolution]: {
      id: Id.BrowserAPISolution,
      title: "Solutions Related to Browser API",
      description: "",
      children: [],
    },
    [Id.ReactLifeCycleSolution]: {
      id: Id.ReactLifeCycleSolution,
      title: "Solutions Related to React Lifecycle",
      description: "",
      children: [Id.ReactLifeCycleCheckMountedSolution],
    },
    [Id.ReactLifeCycleCheckMountedSolution]: {
      id: Id.ReactLifeCycleCheckMountedSolution,
      title: "Solutions to Cases Where Need to Check if Mounted",
      description: "",
      children: [Id.UseCheckMountedHook],
    },
    [Id.UseCheckMountedHook]: {
      id: Id.UseCheckMountedHook,
      title: "useCheckMounted Hook",
      description: "",
      children: [],
    },
  },
  history: [],
  next: [Id.Root],
};

export const StateSubject = new BehaviorSubject<IState>(initialState);
