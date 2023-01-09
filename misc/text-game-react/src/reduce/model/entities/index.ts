// new Entity("world", "world", "the world object", [
//     new Entity("cli", "status", "provides status for the game"),
//     new Entity("cli", "help", "lets you know things"),
//     new Entity("quest", "todo", "your todo list", [
//       new Entity(
//         "objective",
//         "learn",
//         "go on the internet and learn about self-sufficiency",
//         [],
//         () => {
//           getWorld(state).entities[0].interact = () => "Done";
//           return "Completed quest. Check status.";
//         }
//       ),
//       new Entity("objective", "test", "website", [], () => "Website!"),
//     ]),
//     new Entity("misc", "internet", "lets you browse web", [
//       new Entity("misc", "self-sufficiency", "website"),
//       new Entity("misc", "test", "website", [], () => "Website!"),
//     ]),
//   ])

import { IState, SerializedEntity } from "../../../bridge";
import { makeHeader, makeParagraph } from "../../utils";
import { Entity } from "../global";

enum EntityId {
  World = "World",
  Status = "Status",
  Help = "Help",
  Todo = "Todo",
  Internet = "Internet",
  SelfSufficiency = "SelfSufficiency",
}

export const EntityMap: { [id in EntityId]: SerializedEntity } = {
  [EntityId.World]: {
    id: EntityId.World,
    type: "world",
    name: "world",
    description: "the world object",
    entities: [
      EntityId.Help,
      EntityId.Status,
      EntityId.Todo,
      EntityId.Internet,
    ],
  },
  [EntityId.Status]: {
    id: EntityId.Status,
    type: "cli",
    name: "status",
    description: "provides status for the game",
    entities: [],
  },
  [EntityId.Help]: {
    id: EntityId.Help,
    type: "cli",
    name: "help",
    description: "lets you know things",
    entities: [],
  },
  [EntityId.Todo]: {
    id: EntityId.Todo,
    type: "quest",
    name: "todo",
    description: "your todo list",
    entities: [],
  },
  [EntityId.Internet]: {
    id: EntityId.Internet,
    type: "misc",
    name: "internet",
    description: "let's you browse web",
    entities: [EntityId.SelfSufficiency],
  },
  [EntityId.SelfSufficiency]: {
    id: EntityId.SelfSufficiency,
    type: "misc",
    name: "self-sufficiency",
    description: "website",
    entities: [],
  },
};

const InteractionMap: Record<string, () => string> = {
  [EntityId.Help]: () =>
    `${makeHeader("Help")}${makeParagraph(
      "This is a game about self-sufficiency"
    )}`,
};

const getInteractionById = (id: string) => {
  const interaction = InteractionMap[id];
  if (!interaction) return () => "...";
  return interaction;
};

const deserializeEntity = ({
  description,
  entities,
  id,
  name,
  type,
}: SerializedEntity): Entity =>
  new Entity(
    id,
    type,
    name,
    description,
    entities
      .map((id) => {
        const entity: SerializedEntity | undefined = EntityMap[id as EntityId];
        if (!entity) return;
        return deserializeEntity(entity);
      })
      .filter((v) => !!v) as unknown as Entity[],
    getInteractionById(id)
  );

type T = { [id: string]: SerializedEntity };

export const serialize = (entity: Entity): T => {
  const result = [entity].reduce(
    (acc, { state: { description, entities, id, name, type } }) => {
      return {
        ...acc,
        [id]: {
          description,
          entities: entities.map((entity) => entity.state.id),
          id,
          name,
          type,
        },
        ...entities.reduce(
          (acc, entity) => ({ ...acc, ...serialize(entity) }),
          {} as T
        ),
      };
    },
    {} as T
  );
  return result;
};

export const deserialize = (state: IState): Entity =>
  deserializeEntity(state.entities[EntityId.World]);
