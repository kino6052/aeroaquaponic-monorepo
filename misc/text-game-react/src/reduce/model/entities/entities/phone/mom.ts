import { EntityId, SerializedEntity } from "../../utils/types";

export const getEntity = () =>
  ({
    id: EntityId.Mom,
    type: "person",
    name: "Mom",
    description: "my mother",
    entities: [],
    meta: {},
  } as unknown as SerializedEntity);
