import { BehaviorSubject, Subject } from "rxjs";
import * as outputs from "./reduce/outputs/outputs";

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
  entities: { [key: string]: string };
}

export type TCommand = "change" | "enter" | "suggest" | "load";

export type TEvent = [TCommand, string];

export const AppEventSubject = new Subject<TEvent>();

export const initialState: IState = {
  input: "",
  history: [],
  output: outputs.initialOutput,
  entities: {},
};

export const StateSubject = new BehaviorSubject<IState>(initialState);
