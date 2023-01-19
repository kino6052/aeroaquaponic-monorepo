import { BehaviorSubject, Subject } from "rxjs";
import { getCLI } from "./reduce/model/cli";
import { getEntityMap } from "./reduce/model/entities/entities";
import { outputs } from "./reduce/outputs";
import { SerializedEntity } from "./reduce/model/entities";
import { EntityId } from "./reduce/model/entities/types";

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

export type TCommand = "change" | "enter" | "suggest" | "load";

export type TEvent = [TCommand, string];

export const AppEventSubject = new Subject<TEvent>();

const initialState: IState = {
  input: "",
  history: [],
  output: outputs.getInitialOutput(),
  entities: [
    EntityId.World,
    EntityId.Status,
    EntityId.Phone,
    EntityId.Help,
    EntityId.Todo,
    EntityId.Internet,
    EntityId.SelfSufficiencyWebsite,
    EntityId.TodoQuest001Task001LearnAboutSelfSufficiency,
    EntityId.Friend001,
    EntityId.Mom,
    EntityId.Skip,
  ].reduce((acc, id) => ({ ...acc, [id]: getEntityMap()[id] }), {}),
};

export const getInitialState = () => initialState;

export const StateSubject = new BehaviorSubject<IState>(initialState);
