import { IState } from "../../../bridge";
import { makeBold, makeHeader, makeParagraph } from "../../utils";
import { getCLI } from "../cli";
import { EntityId, StatusMeta } from "./entities";

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
  [EntityId.Status]: (state, cli) => {
    const {
      date: { day, month, year },
      weather: {
        season,
        temperature: { degrees, type: temperatureType },
      },
      location: { city, continent, country },
      economics: { inflation, sentiment },
      politics: { spectrum },
      description,
    } = state.entities[EntityId.Status].meta as unknown as StatusMeta;
    return `${makeHeader("Status")}${makeParagraph(
      `${makeBold("Date")}: ${year}/${month}/${day}`
    )}${makeParagraph(`${makeBold("Season")}: ${season}`)}${makeParagraph(
      `${makeBold("Temperature")}: ${degrees} ${temperatureType}`
    )}${makeParagraph(
      `${makeBold("Location")}: ${city}, ${country}, ${continent}`
    )}${makeParagraph(
      `${makeBold(
        "Economics"
      )}: Inflation Rate: ${inflation}; Sentiment: ${sentiment}`
    )}
  ${makeParagraph(
    `${makeBold("Politics")}: Spectrum: ${spectrum}`
  )}${makeParagraph(`${makeBold("Description")}: ${description}`)}`;
  },
};

export const getInteractionById = (id: string) => {
  const interaction = InteractionMap[id];
  if (!interaction) return () => "...";
  return interaction;
};
