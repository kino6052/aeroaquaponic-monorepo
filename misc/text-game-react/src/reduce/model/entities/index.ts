import {
  makeBold,
  makeList,
  makeParagraph,
  makeSecondaryHeading,
  processItem,
} from "../../utils";
import { getCLI } from "../cli";
import * as entities from "./entities/index";
import { statusInteraction } from "./entities/status";
import { getQuest001Interactions } from "./interactions/quest001";
import { EntityId, SerializedEntity } from "./utils/types";

let entityMap: ReturnType<typeof getEntityMap>;

export const getEntityMap = (): { [id in EntityId]?: SerializedEntity } => {
  if (!entityMap) {
    entityMap = {
      // NOTE: Iterate over entities to generate the map automatically;
      [EntityId.World]: entities.getWorld(),
      [EntityId.Clear]: entities.getClear(),
      [EntityId.Status]: entities.getStatus(),
      [EntityId.Skip]: entities.getSkip(),
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
        entities: [EntityId.Mom, EntityId.Friend001],
        meta: {},
      },
      [EntityId.Friend001]: {
        id: EntityId.Friend001,
        type: "person",
        name: "Tom",
        description: "my best friend",
        entities: [],
        meta: {},
      },
      [EntityId.Mom]: {
        id: EntityId.Mom,
        type: "person",
        name: "Mom",
        description: "my mother",
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
        description: "Optional: call realtor to schedule a land visit",
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

const interactionMap: Record<
  string,
  (cli: ReturnType<typeof getCLI>) => string
> = {
  [EntityId.Help]: () =>
    `${makeSecondaryHeading("Help")}${processItem(
      [
        `I've decided to keep this diary as a way to document my progress and reflect on my experiences. I'm excited to see where this journey takes me and I hope that it will be a valuable resource for anyone else looking to break free from the rat race and live a more fulfilling life.`,
        `I've also discovered some useful commands that I can use to interact with my diary. By pressing the ${makeBold(
          `Tab`
        )} key, I can get a list of all the available commands. This makes it easy for me to navigate through my diary entries and find the information I need. Additionally, I've also found that I can autocomplete commands by starting to type something and then hitting the ${makeBold(
          `Tab`
        )} key. This saves me a lot of time and makes it even easier for me to interact with my diary.`,
        `I'm looking forward to updating my diary with my progress and thoughts as I learn more about self-sufficiency. I believe this diary will be a great tool to help me stay motivated and focused on my goals.`,
      ],
      makeParagraph
    )}`,
  // [EntityId.Clear]: (cli) => {
  //   cli.clear();
  //   return `${makeSecondaryHeading("Input Cleared")} ${makeParagraph(
  //     "Input was cleared..."
  //   )}`;
  // },
  [EntityId.Status]: statusInteraction,
  [EntityId.Phone]: (cli) => {
    const state = cli.getState();
    const items = state.entities[EntityId.Phone].entities.map(
      (v) => `${state.entities[v].name}: ${state.entities[v].description}`
    );
    const description = makeList("", items);

    return `${makeSecondaryHeading("Phone")}${description}`;
  },
  [EntityId.Todo]: (cli) => {
    const state = cli.getState();
    const items = state.entities[EntityId.Todo].entities.map(
      (v) => state.entities[v].description
    );
    const list = `${makeParagraph("Here is what's left: ")}${makeList(
      "",
      items
    )}`;
    const message = list;
    return `${makeSecondaryHeading("Todo")}${makeParagraph(
      "I had a look at my todo and here were the items:"
    )}${message}`;
  },
  [EntityId.SelfSufficiencyWebsite]:
    getQuest001Interactions().SelfSufficiencyWebsite,
  [EntityId.LandWebsite001]: getQuest001Interactions().LandWebsite001,
  [EntityId.TodoQuest001Task001LearnAboutSelfSufficiency]: () =>
    `${makeSecondaryHeading(
      "Objective: Learn About Self-sufficiency"
    )}${processItem(
      [
        "I need to visit the website I came across yesterday.",
        "To do that, I need to go to the internet.",
      ],
      makeParagraph
    )}`,
  [EntityId.Mom]: (cli) => {
    const response = getQuest001Interactions()[EntityId.Mom](cli);
    return `${makeSecondaryHeading("Call Mom")}${response}`;
  },
  [EntityId.Friend001]: (cli) => {
    return "Might need to call Tom at some point.";
  },
  [EntityId.Skip]: (cli) => {
    cli.updateTime({
      i: 3,
      value: 1,
    });
    return `${makeSecondaryHeading("Skip")}${makeParagraph(
      "Will get back to the diary tomorrow."
    )}`;
  },
};

export const getInteractionMap = () => {
  return interactionMap;
};

export const getInteractionById = (id: string) => {
  const interaction = getInteractionMap()[id];
  return interaction;
};
