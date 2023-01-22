import { BehaviorSubject, Subject } from "rxjs";
import { SerializedEntity } from "./reduce/model/entities/utils/types";

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
  entities: { [key: string]: SerializedEntity };
}

export type TCommand = "change" | "enter" | "suggest" | "init" | "load";

export type TEvent = [TCommand, string];

export const AppEventSubject = new Subject<TEvent>();

const initialState: IState = {
  input: "",
  history: [],
  output: "",
  entities: {},
};

export const getInitialState = () => initialState;

export const StateSubject = new BehaviorSubject<IState>(initialState);
