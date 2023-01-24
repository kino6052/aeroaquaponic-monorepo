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
      [EntityId.Help]: entities.getHelp(),
      [EntityId.Phone]: entities.getPhone(),
      [EntityId.Friend001]: entities.getFriend001(),
      [EntityId.Mom]: entities.getMom(),
      [EntityId.Todo]: entities.getTodo(),
      [EntityId.TodoQuest001Task001LearnAboutSelfSufficiency]:
        entities.getQuest001Task001(),
      [EntityId.TodoQuest001Task002FindOutAboutLand]:
        entities.getQuest001Task002(),
      [EntityId.TodoQuest001Task003CallRealtor]: entities.getQuest001Task003(),
      [EntityId.Internet]: entities.getInternet(),
      [EntityId.SelfSufficiencyWebsite]: entities.getSelfSufficiencyWebsite(),
      [EntityId.LandWebsite001]: entities.getLandWebsite(),
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
