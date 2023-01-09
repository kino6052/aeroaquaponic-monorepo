import { deserialize, deserializeEntity, serialize } from "..";
import { IState } from "../../../../bridge";
import { makeHeader, makeParagraph } from "../../../utils";
import { getCLI } from "../../cli";
import { EntityId } from "../entities";

export default {
  [EntityId.LearnAboutSelfSufficiency]: (
    state: IState,
    cli: ReturnType<typeof getCLI>
  ) => {
    if (!cli.world) return "...";
    const serialized = serialize(cli.world);
    const entities = serialized[EntityId.Todo].entities;
    const newEntities = entities.filter(
      (id) => id !== EntityId.LearnAboutSelfSufficiency
    );
    serialized[EntityId.Todo].entities = newEntities;
    cli.update({ ...state, entities: serialized });
    return `${makeHeader(
      "Objective: Learn About Self-sufficiency"
    )}${makeParagraph(
      "You've read the website and it seemed very reasonable"
    )}`;
  },
};
