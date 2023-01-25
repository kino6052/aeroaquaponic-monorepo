import { EntityId, SerializedEntity } from "../../../utils/types";

export const getEntity = () =>
  ({
    id: EntityId.TodoQuest001Task002FindOutAboutLand,
    type: "objective",
    name: "find-out-about-land",
    description: "go to the internet and find out about land",
    entities: [],
    meta: {},
  } as unknown as SerializedEntity);
