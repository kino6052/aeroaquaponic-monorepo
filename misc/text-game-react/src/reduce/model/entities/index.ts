import { Entity } from "../global";
import { getInteractionById } from "./interactions";
import { EntityId } from "./types";
// @ts-ignore
import { isEmpty } from "ramda";

export type TEntityType =
  | "world"
  | "quest"
  | "objective"
  | "cli"
  | "misc"
  | "person";

export interface SerializedEntity {
  id: string;
  entities: string[];
  type: TEntityType;
  name: string;
  description: string;
  meta: Record<string, unknown>;
}

export const deserializeEntity = (
  { description, entities, id, name, type, meta }: SerializedEntity,
  map: SerializedWorld
): Entity =>
  new Entity(
    id,
    type,
    name,
    description,
    entities
      .map((id) => {
        const entity: SerializedEntity | undefined = map[id];
        if (!entity) return;
        return deserializeEntity(entity, map);
      })
      .filter((v) => !!v) as unknown as Entity[],
    getInteractionById(id),
    meta
  );

export type SerializedWorld = { [id: string]: SerializedEntity };

export const serialize = (entity: Entity): SerializedWorld => {
  const result = [entity].reduce(
    (acc, { state: { description, entities, id, name, type, meta } }) => {
      return {
        ...acc,
        [id]: {
          description,
          entities: entities.map((entity) => entity.state.id),
          id,
          name,
          type,
          meta,
        },
        ...entities.reduce(
          (acc, entity) => ({ ...acc, ...serialize(entity) }),
          {} as SerializedWorld
        ),
      };
    },
    {} as SerializedWorld
  );
  return result;
};

export const deserialize = (entities: SerializedWorld): Entity => {
  if (Object.keys(entities).length === 0) return new Entity("", "misc", "", "");
  return deserializeEntity(entities[EntityId.World], entities);
};
