import { EntityId, SerializedEntity } from "../../../bridge";
import { getStatus } from "./status";

let entityMap: ReturnType<typeof getEntityMap>;

export const getEntityMap = (): { [id in EntityId]?: SerializedEntity } => {
  if (!entityMap) {
    entityMap = {
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
          EntityId.Phone,
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
      [EntityId.Status]: getStatus(),
      [EntityId.Help]: {
        id: EntityId.Help,
        type: "cli",
        name: "help",
        description: "if I forget the sense of direction, this comes in handy",
        entities: [],
        meta: {},
      },
      [EntityId.Phone]: {
        id: EntityId.Phone,
        type: "misc",
        name: "phone",
        description: "something I use when need to contact somebody",
        entities: [],
        meta: {},
      },
      [EntityId.Todo]: {
        id: EntityId.Todo,
        type: "quest",
        name: "todo",
        description: "my todo list",
        entities: [EntityId.TodoQuest001Task001LearnAboutSelfSufficiency],
        meta: {},
      },
      [EntityId.TodoQuest001Task001LearnAboutSelfSufficiency]: {
        id: EntityId.TodoQuest001Task001LearnAboutSelfSufficiency,
        type: "objective",
        name: "learn-about-self-sufficiency",
        description:
          "Go to the internet to visit the site and learn about self-sufficiency",
        entities: [],
        meta: {},
      },
      [EntityId.TodoQuest001Task002FindOutAboutLand]: {
        id: EntityId.TodoQuest001Task002FindOutAboutLand,
        type: "objective",
        name: "find-out-about-land",
        description: "go to the internet and find out about land",
        entities: [],
        meta: {},
      },
      [EntityId.TodoQuest001Task003CallRealtor]: {
        id: EntityId.TodoQuest001Task003CallRealtor,
        type: "objective",
        name: "call-realtor",
        description: "call realtor to schedule a land visit",
        entities: [],
        meta: {},
      },
      [EntityId.Internet]: {
        id: EntityId.Internet,
        type: "misc",
        name: "internet",
        description: "this is how I browse the internet",
        entities: [EntityId.SelfSufficiencyWebsite],
        meta: {},
      },
      [EntityId.SelfSufficiencyWebsite]: {
        id: EntityId.SelfSufficiencyWebsite,
        type: "misc",
        name: "self-sufficiency",
        description: "website",
        entities: [],
        meta: {},
      },
      [EntityId.LandWebsite001]: {
        id: EntityId.LandWebsite001,
        type: "misc",
        name: "land-website",
        description: "website with information about land and associated costs",
        entities: [],
        meta: {},
      },
    };
  }
  return entityMap;
};
