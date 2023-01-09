import { SerializedEntity } from "../../../bridge";

export enum EntityId {
  World = "World",
  Status = "Status",
  Help = "Help",
  Todo = "Todo",
  Internet = "Internet",
  SelfSufficiency = "SelfSufficiency",
  Clear = "Clear",
  LearnAboutSelfSufficiency = "LearnAboutSelfSufficiency",
}

export interface StatusMeta {
  date: {
    day: number;
    month: number;
    year: number;
  };
  weather: {
    season: "winter" | "spring" | "summer" | "fall";
    temperature: {
      degrees: number;
      type: "celsius" | "fahrenheit";
    };
  };
  location: {
    continent: string;
    country: string;
    city: string;
  };
  politics: {
    spectrum: "liberal" | "conservative";
  };
  economics: {
    inflation: number;
    sentiment: "hot" | "cold";
  };
  description: string;
}

export const EntityMap: { [id in EntityId]: SerializedEntity } = {
  [EntityId.World]: {
    id: EntityId.World,
    type: "world",
    name: "world",
    description: "the world object",
    meta: {},
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
    meta: {},
  },
  [EntityId.Status]: {
    id: EntityId.Status,
    type: "cli",
    name: "status",
    description: "provides status for the game",
    entities: [],
    meta: {
      date: {
        day: 1,
        month: 1,
        year: 2020,
      },
      weather: {
        season: "winter",
        temperature: {
          degrees: -10,
          type: "celsius",
        },
      },
      location: {
        continent: "Disturbium",
        country: "Disturbistan",
        city: "Disturbipolis",
      },
      politics: {
        spectrum: "liberal",
      },
      economics: {
        inflation: 7,
        sentiment: "cold",
      },
      description:
        "You are looking for ways to change the course of your life for better",
    },
  },
  [EntityId.Help]: {
    id: EntityId.Help,
    type: "cli",
    name: "help",
    description: "lets you know things",
    entities: [],
    meta: {},
  },
  [EntityId.Todo]: {
    id: EntityId.Todo,
    type: "quest",
    name: "todo",
    description: "your todo list",
    entities: [EntityId.LearnAboutSelfSufficiency],
    meta: {},
  },
  [EntityId.LearnAboutSelfSufficiency]: {
    id: EntityId.LearnAboutSelfSufficiency,
    type: "objective",
    name: "learn-about-self-sufficiency",
    description: "Learn about self-sufficiency",
    entities: [],
    meta: {},
  },
  [EntityId.Internet]: {
    id: EntityId.Internet,
    type: "misc",
    name: "internet",
    description: "let's you browse web",
    entities: [EntityId.SelfSufficiency],
    meta: {},
  },
  [EntityId.SelfSufficiency]: {
    id: EntityId.SelfSufficiency,
    type: "misc",
    name: "self-sufficiency",
    description: "website",
    entities: [],
    meta: {},
  },
};
