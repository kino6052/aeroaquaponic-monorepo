import { serialize } from ".";
import { EntityId } from "../../../bridge";
import { getCLI } from "../cli";
import { SerializedHelper } from "./serialized";
import { StatusMeta } from "./status";

export const getStatusMeta = (
  cli: ReturnType<typeof getCLI>
): Partial<StatusMeta> => {
  if (!cli.world) return {};
  const serialized = serialize(cli.world);
  const helper = new SerializedHelper(serialized);
  const status = helper.getById(EntityId.Status);
  return status.meta as Partial<StatusMeta>;
};
