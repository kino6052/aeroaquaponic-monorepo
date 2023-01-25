import { EntityId, SerializedEntity } from "../../../utils/types";

export const getEntity = () =>
  ({
    id: EntityId.TodoQuest001Task001LearnAboutSelfSufficiency,
    type: "objective",
    name: "learn-about-self-sufficiency",
    description:
      "Go to the internet to visit the site and learn about self-sufficiency",
    entities: [],
    meta: {},
  } as unknown as SerializedEntity);
