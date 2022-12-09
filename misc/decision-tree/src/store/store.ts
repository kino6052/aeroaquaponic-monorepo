import { Id, IState } from "../interfaces";

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
  currentId: Id.Root,
  next: [],
};
