import { EntityId, SerializedEntity } from "../utils/types";

export const getEntity = () =>
  ({
    id: EntityId.World,
    type: "world",
    name: "world",
    description: "the world object",
    meta: {},
    entities: [
      EntityId.Help,
      EntityId.Status,
      EntityId.Todo,
      EntityId.Internet,
      EntityId.Phone,
      EntityId.Skip,
    ],
  } as unknown as SerializedEntity);
