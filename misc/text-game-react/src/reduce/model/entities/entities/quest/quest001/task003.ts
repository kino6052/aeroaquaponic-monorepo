import { EntityId, SerializedEntity } from "../../../utils/types";

export const getEntity = () =>
  ({
    id: EntityId.TodoQuest001Task003CallRealtor,
    type: "objective",
    name: "call-realtor",
    description: "Optional: call realtor to schedule a land visit",
    entities: [],
    meta: {},
  } as unknown as SerializedEntity);
