import { SerializedWorld } from ".";
import { SerializedEntity } from "../../../bridge";

export class SerializedHelper {
  private __entities: SerializedWorld = {};
  constructor(entities: SerializedWorld) {
    this.__entities = entities;
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
      parent.entities = [...parent.entities, entity.id];
    }
  }

  remove(entity: SerializedEntity) {
    if (!this.__entities[entity.id]) return;
    const parentIds = this.getParents(entity.id);
    parentIds.forEach((parentId) => {
      const parent = this.__entities[parentId];
      parent.entities = parent.entities.filter((id) => id !== entity.id);
    });
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
