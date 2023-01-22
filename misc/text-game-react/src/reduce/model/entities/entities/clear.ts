import { EntityId, SerializedEntity } from "../utils/types";

export const getEntity = () =>
  ({
    id: EntityId.Clear,
    type: "cli",
    name: "clear",
    description: "clear history",
    entities: [],
    meta: {},
  } as unknown as SerializedEntity);
