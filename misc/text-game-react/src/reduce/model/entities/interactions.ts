import { makeHeader, makeParagraph } from "../../utils";
import { EntityId } from "./entities";

export const InteractionMap: Record<string, () => string> = {
  [EntityId.Help]: () =>
    `${makeHeader("Help")}${makeParagraph(
      "This is a game about self-sufficiency"
    )}`,
};

export const getInteractionById = (id: string) => {
  const interaction = InteractionMap[id];
  if (!interaction) return () => "...";
  return interaction;
};
