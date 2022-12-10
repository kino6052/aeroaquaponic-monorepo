import { BehaviorSubject, Subject } from "rxjs";

export enum Id {
  ReactAPISolution = "ReactAPISolution",
  BrowserAPISolution = "BrowserAPISolution",
  ReactLifeCycleSolution = "ReactLifeCycleSolution",
  ReactLifeCycleCheckMountedSolution = "ReactLifeCycleCheckMountedSolution",
  UseCheckMountedHook = "UseCheckMountedHook",
  Root = "Root",
  SolutionsToCasesWhereNeedToUseTimeIntervals = "SolutionsToCasesWhereNeedToUseTimeIntervals",
  SolutionsToCasesWhereNeedToGetOSType = "SolutionsToCasesWhereNeedToGetOSType",
  SolutionsToCasesWhereNeedToOverrideDOMLogic = "SolutionsToCasesWhereNeedToOverrideDOMLogic",
  SolutionsToCasesWhereNeedToSpecifyEvents = "SolutionsToCasesWhereNeedToSpecifyEvents",
  SolutionsToCasesWhereNeedDragAndDrop = "SolutionsToCasesWhereNeedDragAndDrop",
  UseEventListenerHook = "UseEventListenerHook",
  UseNodeDragHook = "UseNodeDragHook",
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
      description: "Select what problem you are trying to solve",
      children: [Id.ReactAPISolution, Id.BrowserAPISolution],
    },
    [Id.ReactAPISolution]: {
      id: Id.ReactAPISolution,
      title: "I have a problem related to React API",
      description:
        "Problems related to lifecycle, adding functionality, passing props and so on.",
      children: [Id.ReactLifeCycleSolution],
    },
    [Id.BrowserAPISolution]: {
      id: Id.BrowserAPISolution,
      title: "I have a problem related to browser API",
      description:
        "Problems related to DOM Logic, determining OS, using timers or events.",
      children: [
        Id.SolutionsToCasesWhereNeedToUseTimeIntervals,
        Id.SolutionsToCasesWhereNeedToGetOSType,
        Id.SolutionsToCasesWhereNeedToOverrideDOMLogic,
        Id.SolutionsToCasesWhereNeedToSpecifyEvents,
      ],
    },
    [Id.SolutionsToCasesWhereNeedToGetOSType]: {
      id: Id.SolutionsToCasesWhereNeedToGetOSType,
      title: "I need to know what OS is the app running in",
      description: "Questions like 'is it Android or iOS?'",
      children: [],
    },
    [Id.SolutionsToCasesWhereNeedToOverrideDOMLogic]: {
      id: Id.SolutionsToCasesWhereNeedToOverrideDOMLogic,
      title: "I need to override certain DOM-related logic",
      description: "Things like block events or override APIs like console",
      children: [],
    },
    [Id.SolutionsToCasesWhereNeedToUseTimeIntervals]: {
      id: Id.SolutionsToCasesWhereNeedToUseTimeIntervals,
      title: "I need to use time related functionality",
      description: "APIs like setTimeout, setInterval, etc.",
      children: [],
    },
    [Id.SolutionsToCasesWhereNeedToSpecifyEvents]: {
      id: Id.SolutionsToCasesWhereNeedToSpecifyEvents,
      title: "I need to interact with DOM events",
      description: "Things like Drag and Drop, etc.",
      children: [
        Id.SolutionsToCasesWhereNeedDragAndDrop,
        Id.UseEventListenerHook,
      ],
    },
    [Id.SolutionsToCasesWhereNeedDragAndDrop]: {
      id: Id.SolutionsToCasesWhereNeedDragAndDrop,
      title: "I need to add drag and drop functionality",
      description: "You need to add drag and drop functionality",
      children: [Id.UseNodeDragHook],
    },
    [Id.UseEventListenerHook]: {
      id: Id.UseEventListenerHook,
      title: "useEventListner Hook",
      description:
        "useEventListener allows to subscribe to events on a DOM target",
      children: [],
    },
    [Id.UseNodeDragHook]: {
      id: Id.UseNodeDragHook,
      title: "useNodeDrag Hook",
      description:
        "useNodeDrag hook allows to subscribe to events when drag starts and when it stops",
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
