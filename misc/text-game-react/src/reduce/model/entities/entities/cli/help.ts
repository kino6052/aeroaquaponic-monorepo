import { EntityId, SerializedEntity } from "../../utils/types";

export const getEntity = () =>
  ({
    id: EntityId.Help,
    type: "cli",
    name: "help",
    description: "if I forget the sense of direction, this comes in handy",
    entities: [],
    meta: {},
  } as unknown as SerializedEntity);
