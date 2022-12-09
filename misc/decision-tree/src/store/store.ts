import { Id, IState } from "../interfaces";

export const initialState: IState = {
  data: {
    [Id.Root]: {
      id: Id.Root,
      text: "Select Options",
      children: [Id.ReactAPISolution, Id.BrowserAPISolution],
    },
    [Id.ReactAPISolution]: {
      id: Id.ReactAPISolution,
      text: "Solutions Related to React API",
      children: [Id.ReactLifeCycleSolution],
    },
    [Id.BrowserAPISolution]: {
      id: Id.BrowserAPISolution,
      text: "Solutions Related to Browser API",
      children: [],
    },
    [Id.ReactLifeCycleSolution]: {
      id: Id.ReactLifeCycleSolution,
      text: "Solutions Related to React Lifecycle",
      children: [Id.ReactLifeCycleCheckMountedSolution],
    },
    [Id.ReactLifeCycleCheckMountedSolution]: {
      id: Id.ReactLifeCycleCheckMountedSolution,
      text: "Solutions to Cases Where Need to Check if Mounted",
      children: [Id.UseCheckMountedHook],
    },
    [Id.UseCheckMountedHook]: {
      id: Id.UseCheckMountedHook,
      text: "useCheckMounted Hook",
      children: [],
    },
  },
  history: [],
  current: [Id.Root],
};
