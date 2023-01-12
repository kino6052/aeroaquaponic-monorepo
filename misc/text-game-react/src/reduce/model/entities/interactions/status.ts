import { EntityId } from "../../../../bridge";
import { makeBold, makeParagraph, makeSecondaryHeading } from "../../../utils";
import { getCLI } from "../../cli";
import { StatusMeta } from "../status";

export const statusInteraction: (cli: ReturnType<typeof getCLI>) => string = (
  cli
) => {
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
  } = cli.getState().entities[EntityId.Status].meta as unknown as StatusMeta;
  return `${makeSecondaryHeading("Status")}${makeParagraph(
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
};
