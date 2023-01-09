import { BehaviorSubject, Subject } from "rxjs";
import { EntityMap } from "./reduce/model/entities";
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

export type TEntityType = "world" | "quest" | "objective" | "cli" | "misc";

export interface SerializedEntity {
  id: string;
  entities: string[];
  type: TEntityType;
  name: string;
  description: string;
}

export interface IState {
  input: string;
  output: string;
  history: string[];
  entities: { [key: string]: SerializedEntity };
}

export type TCommand = "change" | "enter" | "suggest" | "load";

export type TEvent = [TCommand, string];

export const AppEventSubject = new Subject<TEvent>();

export const initialState: IState = {
  input: "",
  history: [],
  output: outputs.initialOutput,
  entities: EntityMap,
};

export const StateSubject = new BehaviorSubject<IState>(initialState);
