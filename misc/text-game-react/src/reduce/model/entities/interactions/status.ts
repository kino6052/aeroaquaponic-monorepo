import { EntityId } from "../../../../bridge";
import { makeBold, makeParagraph, makeSecondaryHeading } from "../../../utils";
import { getCLI } from "../../cli";
import { StatusMeta } from "../status";

export const statusInteraction: (cli: ReturnType<typeof getCLI>) => string = (
  cli
) => {
  const {
    date: { day, month, year, dow },
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
    `Today is ${dow} ${year}/${month}/${day}.`
  )}${makeParagraph(`It's ${season}.`)} ${makeParagraph(
    `The temperature is ${degrees} degrees ${temperatureType}.`
  )}${makeParagraph(
    `I currently live in ${city}, ${country}, ${continent}.`
  )}${makeParagraph(
    `Regarding the economy, the inflation rate is currently ${inflation} percent and the market is pretty ${sentiment}.`
  )}
  ${makeParagraph(
    `The politics seem to be inclined toward a ${spectrum} end of spectrum.`
  )}${makeParagraph(`Generally, this is how I feel. ${description}.`)}`;
};
