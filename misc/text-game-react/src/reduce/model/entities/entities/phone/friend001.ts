import { EntityId, SerializedEntity } from "../../utils/types";

export const getEntity = () =>
  ({
    id: EntityId.Friend001,
    type: "person",
    name: "Tom",
    description: "my best friend",
    entities: [],
    meta: {},
  } as unknown as SerializedEntity);
