import { SerializedEntity } from "../../../bridge";

export enum EntityId {
  World = "World",
  Status = "Status",
  Help = "Help",
  Todo = "Todo",
  Internet = "Internet",
  SelfSufficiency = "SelfSufficiency",
  Clear = "Clear",
}

export const EntityMap: { [id in EntityId]: SerializedEntity } = {
  [EntityId.World]: {
    id: EntityId.World,
    type: "world",
    name: "world",
    description: "the world object",
    entities: [
      EntityId.Help,
      EntityId.Status,
      EntityId.Todo,
      EntityId.Internet,
      EntityId.Clear,
    ],
  },
  [EntityId.Clear]: {
    id: EntityId.Clear,
    type: "cli",
    name: "clear",
    description: "clear history",
    entities: [],
  },
  [EntityId.Status]: {
    id: EntityId.Status,
    type: "cli",
    name: "status",
    description: "provides status for the game",
    entities: [],
  },
  [EntityId.Help]: {
    id: EntityId.Help,
    type: "cli",
    name: "help",
    description: "lets you know things",
    entities: [],
  },
  [EntityId.Todo]: {
    id: EntityId.Todo,
    type: "quest",
    name: "todo",
    description: "your todo list",
    entities: [],
  },
  [EntityId.Internet]: {
    id: EntityId.Internet,
    type: "misc",
    name: "internet",
    description: "let's you browse web",
    entities: [EntityId.SelfSufficiency],
  },
  [EntityId.SelfSufficiency]: {
    id: EntityId.SelfSufficiency,
    type: "misc",
    name: "self-sufficiency",
    description: "website",
    entities: [],
  },
};
