import { BehaviorSubject, Subject } from "rxjs";
import { getEntityMap } from "./reduce/model/entities/entities";
import { outputs } from "./reduce/outputs";

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

export enum EntityId {
  World = "World",
  Status = "Status",
  Help = "Help",
  Todo = "Todo",
  Internet = "Internet",
  SelfSufficiencyWebsite = "SelfSufficiencyWebsite",
  Clear = "Clear",
  TodoQuest001Task001LearnAboutSelfSufficiency = "TodoQuest001Task001LearnAboutSelfSufficiency",
  TodoQuest001Task002FindOutAboutLand = "TodoQuest001Task002FindOutAboutLand",
  LandWebsite001 = "LandWebsite001",
  TodoQuest001Task003CallRealtor = "TodoQuest001Task003CallRealtor",
  Phone = "Phone",
}

export interface SerializedEntity {
  id: string;
  entities: string[];
  type: TEntityType;
  name: string;
  description: string;
  meta: Record<string, unknown>;
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
  ].reduce((acc, id) => ({ ...acc, [id]: getEntityMap()[id] }), {}),
};

export const StateSubject = new BehaviorSubject<IState>(initialState);
