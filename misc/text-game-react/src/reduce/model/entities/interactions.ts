import { EntityId } from "../../../bridge";
import {
  makeSecondaryHeading,
  makeList,
  makeParagraph,
  processItem,
} from "../../utils";
import { getCLI } from "../cli";
import quest001 from "./interactions/quest001";
import { statusInteraction } from "./interactions/status";

export const InteractionMap: Record<
  string,
  (cli: ReturnType<typeof getCLI>) => string
> = {
  [EntityId.Help]: () =>
    `${makeSecondaryHeading("Help")}${makeParagraph(
      "This is a game about self-sufficiency"
    )}`,
  [EntityId.Clear]: (cli) => {
    cli.clear();
    return `${makeSecondaryHeading("Input Cleared")} ${makeParagraph(
      "Input was cleared..."
    )}`;
  },
  [EntityId.Status]: statusInteraction,
  [EntityId.Todo]: (cli) => {
    const state = cli.getState();
    const items = state.entities[EntityId.Todo].entities.map(
      (v) => state.entities[v].description
    );
    const list = `${makeParagraph("Here is what's left: ")}${makeList(
      "",
      items
    )}`;
    const message =
      items.length > 0 ? list : makeParagraph("The list is empty currently");
    return `${makeSecondaryHeading("Todo")}${makeParagraph(
      "I had a look at my todo and here were the items:"
    )}${message}`;
  },
  [EntityId.SelfSufficiencyWebsite]: quest001.SelfSufficiencyWebsite,
  [EntityId.LandWebsite001]: quest001.LandWebsite001,
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
};

export const getInteractionById = (id: string) => {
  const interaction = InteractionMap[id];
  return interaction;
};
