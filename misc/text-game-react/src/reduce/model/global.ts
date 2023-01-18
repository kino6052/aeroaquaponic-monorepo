// @ts-ignore
import { clone } from "ramda";
import { EntityId, TEntityType } from "../../bridge";
import {
  makeParagraph,
  makeSecondaryHeading,
  updateIntervals,
  Utils,
} from "../utils";
import { getCLI } from "./cli";
import { deserialize, serialize, SerializedWorld } from "./entities";
import { SerializedHelper } from "./entities/serialized";
import { getStatusMeta } from "./entities/utils";

export class Entity {
  private __id = Utils.generateId();
  private __entities: Entity[] = [];
  private __type: TEntityType = "misc";
  private __name: string = "";
  private __description: string = "";
  private __meta: Record<string, unknown> = {};

  constructor(
    id: string,
    type: TEntityType,
    name: string,
    description: string,
    entities?: Entity[],
    interact?: (cli: ReturnType<typeof getCLI>) => string,
    meta?: Record<string, unknown>
  ) {
    this.__id = id;
    this.__type = type;
    this.__name = name;
    this.__description = description;
    this.__entities = entities || [];
    this.__meta = meta || {};
    if (interact) {
      this.interact = (cli: ReturnType<typeof getCLI>) => {
        const { increment } = this.__meta;
        const __increment = increment as
          | { i: number; value: number }
          | undefined;
        this.updateTime(cli, {
          i: typeof __increment?.i === "number" ? __increment?.i : 1,
          value: __increment?.value || 1,
        });
        return interact(cli);
      };
    }
  }

  updateTime(
    cli: ReturnType<typeof getCLI>,
    update: { i: number; value: number } = { i: 1, value: 10 }
  ) {
    const meta = getStatusMeta(cli);
    if (cli.world) {
      const serialized = serialize(cli.world);
      const helper = new SerializedHelper(serialized);
      const time = meta.date?.time;
      if (meta.date && time) {
        const keys = Object.keys(time);
        const entries = Object.entries(time)
          .reverse()
          .map((v, i) => ({
            value: v[1],
            interval: i === 2 ? 24 : 60,
          }));
        const resultTime = updateIntervals(update, entries)
          .map((v) => v.value)
          .reverse()
          .reduce(
            (acc, v, i) => ({
              ...acc,
              [keys[i]]: v,
            }),
            {}
          );
        const status = helper.getById(EntityId.Status);
        if (status && status.meta) {
          const __status = clone(status);
          __status.meta.date.time = resultTime;
          helper.update(EntityId.Status, { ...__status });
          cli.update({ entities: helper.entities });
        }
      }
    }
  }

  interact(cli: ReturnType<typeof getCLI>): string {
    this.updateTime(cli);
    return `${makeSecondaryHeading(this.__name)}${makeParagraph(
      this.__description
    )}`;
  }

  get state() {
    return {
      id: this.__id,
      entities: this.__entities,
      type: this.__type,
      name: this.__name,
      description: this.__description,
      meta: this.__meta,
    };
  }

  set entities(entities: Entity[]) {
    this.__entities = entities;
  }

  get entities() {
    return this.__entities;
  }
}

let worldInstance: Entity | undefined;

export const getWorld = (entities: SerializedWorld) => {
  // if (!worldInstance) {
  //   worldInstance = deserialize(state);
  // }
  // return worldInstance;
  return deserialize(entities);
};
