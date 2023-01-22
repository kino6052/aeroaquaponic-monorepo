import { getCLI } from "../../cli";
import { serialize, SerializedHelper } from "./serialized";
import { StatusMeta } from "../entities/status";
import { EntityId } from "./types";

export const getStatusMeta = (
  cli: ReturnType<typeof getCLI>
): Partial<StatusMeta> => {
  if (!cli.world) return {};
  const serialized = serialize(cli.world);
  const helper = new SerializedHelper(serialized);
  const status = helper.getById(EntityId.Status);
  return status.meta as Partial<StatusMeta>;
};
