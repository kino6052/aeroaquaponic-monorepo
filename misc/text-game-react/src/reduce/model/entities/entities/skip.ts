import { EntityId, SerializedEntity } from "../utils/types";

export const getEntity = () =>
  ({
    id: EntityId.Skip,
    type: "cli",
    name: "skip",
    description: "sometimes I need to skip a day of writing entries",
    entities: [],
    meta: {},
  } as unknown as SerializedEntity);
