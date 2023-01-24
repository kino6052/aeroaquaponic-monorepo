import { EntityId, SerializedEntity } from "../utils/types";

export const getEntity = () =>
  ({
    id: EntityId.Todo,
    type: "quest",
    name: "todo",
    description: "my todo list",
    entities: [EntityId.TodoQuest001Task001LearnAboutSelfSufficiency],
    meta: {},
  } as unknown as SerializedEntity);
