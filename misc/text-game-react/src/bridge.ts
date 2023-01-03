import { BehaviorSubject, Subject } from "rxjs";
import { commands } from "./reduce/store/store";
import * as outputs from "./reduce/outputs";

export enum Id {
  Input = "Input",
}

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
  history: string[];
  commands: Record<string, TAvailableCommand>;
  google: {
    options: {
      [key: string]: {
        visited: boolean;
      };
    };
  };
}

export type TCommand = "change" | "enter" | "suggest" | "load";

export type TEvent = [TCommand, string];

export const AppEventSubject = new Subject<TEvent>();

export const initialState: IState = {
  input: "",
  history: [],
  commands,
  google: {
    options: {
      "self-sufficiency": {
        visited: false,
      },
    },
  },
  output: outputs.initialOutput,
};

export const StateSubject = new BehaviorSubject<IState>(initialState);
