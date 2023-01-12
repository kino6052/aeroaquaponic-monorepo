import { EntityId, SerializedEntity } from "../../../bridge";
import { getEntityMap } from "./entities";

export interface StatusMeta {
  date: {
    day: number;
    month: number;
    year: number;
    dow: string;
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
  description: string;
}

export const getFormattedDate = (): string => {
  const meta = getEntityMap()[EntityId.Status]?.meta as StatusMeta | undefined;
  if (!meta) return "";
  const {
    date: { day, dow, month, year },
  } = meta;
  return `[${[String(year), String(month), String(day)].join("/")} ${dow}]`;
};

export const getStatus = () =>
  ({
    id: EntityId.Status,
    type: "cli",
    name: "status",
    description: "lets me know what is going on in the world",
    entities: [],
    meta: {
      date: {
        day: 1,
        month: 1,
        year: 2020,
        dow: "Monday",
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
      description:
        "I feel like I'm on track to making the self-sufficient life-style possible",
    } as StatusMeta,
  } as unknown as SerializedEntity);
