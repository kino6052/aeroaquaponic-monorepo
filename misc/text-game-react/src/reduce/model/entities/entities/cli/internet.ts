import { EntityId, SerializedEntity } from "../../utils/types";

export const getEntity = () =>
  ({
    id: EntityId.Internet,
    type: "misc",
    name: "internet",
    description: "this is how I browse the internet",
    entities: [EntityId.SelfSufficiencyWebsite],
    meta: {},
  } as unknown as SerializedEntity);
