import { IState } from "../../../bridge";
import { makeBold, makeHeader, makeList, makeParagraph } from "../../utils";
import { getCLI } from "../cli";
import { EntityId, StatusMeta } from "./entities";
import { statusInteraction } from "./interactions/status";
import quest001 from "./interactions/quest001";

export const InteractionMap: Record<
  string,
  (state: IState, cli: ReturnType<typeof getCLI>) => string
> = {
  [EntityId.Help]: () =>
    `${makeHeader("Help")}${makeParagraph(
      "This is a game about self-sufficiency"
    )}`,
  [EntityId.Clear]: (_, cli) => {
    cli.clear();
    return `${makeHeader("Input Cleared")} ${makeParagraph(
      "Input was cleared..."
    )}`;
  },
  [EntityId.Status]: statusInteraction,
  [EntityId.Todo]: (state, cli) => {
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
  if (!interaction) return () => "...";
  return interaction;
};
