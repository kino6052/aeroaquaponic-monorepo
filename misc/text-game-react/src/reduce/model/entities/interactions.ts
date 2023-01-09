import { makeHeader, makeParagraph } from "../../utils";
import { getCLI } from "../cli";
import { EntityId } from "./entities";

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
};

export const getInteractionById = (id: string) => {
  const interaction = InteractionMap[id];
  if (!interaction) return () => "...";
  return interaction;
};
