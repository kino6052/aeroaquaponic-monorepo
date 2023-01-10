import { makeHeader, makeList, makeParagraph } from "../../utils";
import { getCLI } from "../cli";
import { EntityId, EntityMap } from "./entities";
import quest001 from "./interactions/quest001";
import { statusInteraction } from "./interactions/status";

export const InteractionMap: Record<
  string,
  (cli: ReturnType<typeof getCLI>) => string
> = {
  [EntityId.Help]: () =>
    `${makeHeader("Help")}${makeParagraph(
      "This is a game about self-sufficiency"
    )}`,
  [EntityId.Clear]: (cli) => {
    cli.clear();
    return `${makeHeader("Input Cleared")} ${makeParagraph(
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
    return `${makeHeader("Todo")}${makeParagraph(
      "You are getting closer to your goal."
    )}${message}`;
  },
  [EntityId.SelfSufficiencyWebsite]: quest001.SelfSufficiencyWebsite,
  [EntityId.TodoQuest001Task001LearnAboutSelfSufficiency]: () =>
    `${makeHeader("Objective: Learn About Self-sufficiency")}${makeParagraph(
      "You need to learn about self-sufficiency"
    )}`,
};

export const getInteractionById = (id: string) => {
  const interaction = InteractionMap[id];
  if (!interaction)
    return () => EntityMap[id as EntityId]?.description || "...";
  return interaction;
};
