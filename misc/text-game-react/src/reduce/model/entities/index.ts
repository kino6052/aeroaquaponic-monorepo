import { IState, SerializedEntity } from "../../../bridge";
import { Entity } from "../global";
import { EntityId, EntityMap } from "./entities";
import { getInteractionById } from "./interactions";

const deserializeEntity = ({
  description,
  entities,
  id,
  name,
  type,
  meta,
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
    getInteractionById(id),
    meta
  );

type T = { [id: string]: SerializedEntity };

export const serialize = (entity: Entity): T => {
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
