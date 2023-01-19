import { SerializedEntity, SerializedWorld } from ".";
import { getEntityMap } from "./entities";
import { EntityId } from "./types";

export class SerializedHelper {
  private __entities: SerializedWorld = {};
  constructor(entities: SerializedWorld) {
    this.__entities = entities;
  }

  getById(id: string) {
    return this.__entities[id];
  }

  getChildren(id: string) {
    return this.__entities[id]?.entities || [];
  }

  hasChild(parentId: string, childId: string) {
    return this.getChildren(parentId).includes(childId);
  }

  add(entity: SerializedEntity, parentId: string) {
    this.__entities[entity.id] = entity;
    if (parentId) {
      const parent = this.__entities[parentId];
      const entityMap = getEntityMap();
      if (!entityMap) return;
      const hasEntity = entityMap[entity.id as EntityId];
      if (!hasEntity) {
        entityMap[entity.id as EntityId] = entity;
      }
      if (parent.entities.includes(entity.id)) return;
      parent.entities = [...parent.entities, entity.id];
    }
  }

  update(id: string, entity: SerializedEntity) {
    if (!this.__entities[id]) return;
    this.__entities[id] = {
      ...entity,
      id,
    };
  }

  remove(entity: SerializedEntity) {
    if (!this.__entities[entity.id]) return;
    this.removeById(entity.id);
  }

  removeById(id: string) {
    if (!this.__entities[id]) return;
    const parentIds = this.getParents(id);
    parentIds.forEach((parentId) => {
      const parent = this.__entities[parentId];
      parent.entities = parent.entities.filter((_id) => _id !== id);
    });
  }

  getParents(id: string) {
    return Object.entries(this.__entities)
      .map(([parentId, entity]) => entity.entities.includes(id) && parentId)
      .filter((v) => !!v) as string[];
  }

  get entities() {
    return this.__entities;
  }
}
