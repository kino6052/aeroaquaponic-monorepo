import { makeParagraph, makeSecondaryHeading } from "../../../../utils";
import { getCLI } from "../../../cli";
import { EntityId, SerializedEntity } from "../../utils/types";
import { getStatusMeta } from "../../utils/utils";

export const statusInteraction: (cli: ReturnType<typeof getCLI>) => string = (
  cli
) => {
  const {
    date: {
      time: { hours, minutes },
    },
    weather: {
      season,
      temperature: { degrees, type: temperatureType },
    },
    location: { city, continent, country },
    economics: { inflation, sentiment },
    politics: { spectrum },
    finances: {
      accounts,
      expenses,
      occupation: { salary, title },
    },
    personal: { energy, mood },
    description,
  } = cli.getState().entities[EntityId.Status].meta as unknown as StatusMeta;
  return `${makeSecondaryHeading("Status")}${makeParagraph(
    description
  )}${makeParagraph(`Today is ${getFormattedDate(cli)}.`)}${makeParagraph(
    `The time is ${hours}:${minutes}.`
  )}${makeParagraph(`It's ${season}.`)} ${makeParagraph(
    `The temperature is ${degrees} degrees ${temperatureType}.`
  )}${makeParagraph(
    `I currently live in ${city}, ${country}, ${continent}.`
  )}${makeParagraph(
    `I currently work as ${title} and make $${salary} per month while spending on average $${expenses.reduce(
      (sum, v) => sum + v.amount,
      0
    )} per month.`
  )}${makeParagraph(
    `I currently have a total of $${accounts.reduce(
      (sum, v) => sum + v.amount,
      0
    )} on my accounts.`
  )}${makeParagraph(
    `Regarding the economy, the inflation rate is currently ${inflation} percent and the market is pretty ${sentiment}.`
  )}
  ${makeParagraph(
    `The politics seem to be inclined toward a ${spectrum} end of spectrum.`
  )}${makeParagraph(
    `I feel pretty ${mood} and have relatively ${
      energy > 60 ? "high" : "low"
    } energy today.`
  )}`;
};

export interface StatusMeta {
  date: {
    day: number;
    month: number;
    year: number;
    dow: string;
    time: {
      hours: number;
      minutes: number;
      seconds: number;
    };
  };
  finances: {
    occupation: {
      title: string;
      salary: number; // monthly
    };
    accounts: {
      type: "checking" | "savings";
      name: string;
      amount: number;
    }[];
    // monthly
    expenses: {
      type: string;
      amount: number;
    }[];
  };
  weather: {
    season: "winter" | "spring" | "summer" | "fall";
    temperature: {
      degrees: number;
      type: "celsius" | "fahrenheit";
    };
  };
  location: {
    continent: string;
    country: string;
    city: string;
  };
  politics: {
    spectrum: "liberal" | "conservative";
  };
  economics: {
    inflation: number;
    sentiment: "hot" | "cold";
  };
  personal: {
    mood: "angry" | "sad" | "hopeful" | "happy" | "anxious";
    energy: number;
  };
  description: string;
}

export const getFormattedDate = (cli: ReturnType<typeof getCLI>): string => {
  const meta = getStatusMeta(cli);
  if (!meta) return "";
  const {
    // @ts-ignore
    date: { day, dow, month, year },
  } = meta;
  return `[${[String(year), String(month + 1), String(day + 1)].join(
    "/"
  )} ${dow}]`;
};

export const getEntity = () =>
  ({
    id: EntityId.Status,
    type: "cli",
    name: "status",
    description: "lets me know what is going on in the world",
    entities: [],
    meta: {
      date: {
        day: 0,
        month: 0,
        year: 2020,
        dow: "Monday",
        time: {
          hours: 9,
          minutes: 23,
          seconds: 55,
        },
      },
      finances: {
        accounts: [
          {
            type: "checking",
            amount: 1234,
            name: "JP Cookie",
          },
        ],
        occupation: {
          salary: 2000,
          title: "clerk",
        },
        expenses: [
          {
            type: "housing",
            amount: 1000,
          },
          {
            type: "groceries",
            amount: 300,
          },
          {
            type: "car",
            amount: 300,
          },
        ],
      },
      weather: {
        season: "winter",
        temperature: {
          degrees: -10,
          type: "celsius",
        },
      },
      location: {
        continent: "Disturbium",
        country: "Disturbistan",
        city: "Disturbipolis",
      },
      politics: {
        spectrum: "liberal",
      },
      economics: {
        inflation: 7,
        sentiment: "cold",
      },
      personal: {
        energy: 79,
        mood: "hopeful",
      },
      description:
        "I feel like I'm on track to making the self-sufficient life-style possible",
    } as StatusMeta,
  } as unknown as SerializedEntity);
