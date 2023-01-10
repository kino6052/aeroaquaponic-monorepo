import { IState, SerializedEntity } from "../../../bridge";
import { Entity } from "../global";
import { EntityId } from "./entities";
import { getInteractionById } from "./interactions";

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
        const entity: SerializedEntity | undefined = map[id as EntityId];
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

export const deserialize = (entities: SerializedWorld): Entity =>
  deserializeEntity(entities[EntityId.World], entities);
