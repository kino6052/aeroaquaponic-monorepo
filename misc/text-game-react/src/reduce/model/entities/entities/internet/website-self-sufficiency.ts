import { EntityId, SerializedEntity } from "../../utils/types";

export const getEntity = () =>
  ({
    id: EntityId.SelfSufficiencyWebsite,
    type: "misc",
    name: "self-sufficiency",
    description: "website",
    entities: [],
    meta: {},
  } as unknown as SerializedEntity);
