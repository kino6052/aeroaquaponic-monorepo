import { EntityId, SerializedEntity } from "../../utils/types";

export const getEntity = () =>
  ({
    id: EntityId.Phone,
    type: "misc",
    name: "phone",
    description: "something I use when need to contact somebody",
    entities: [EntityId.Mom, EntityId.Friend001],
    meta: {},
  } as unknown as SerializedEntity);
