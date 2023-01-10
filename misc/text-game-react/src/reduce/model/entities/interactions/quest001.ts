import { deserialize, deserializeEntity, serialize } from "..";
import { IState } from "../../../../bridge";
import { makeHeader, makeParagraph } from "../../../utils";
import { getCLI } from "../../cli";
import { EntityId, EntityMap } from "../entities";
import { SerializedHelper } from "../serialized";

export default {
  [EntityId.SelfSufficiencyWebsite]: (
    state: IState,
    cli: ReturnType<typeof getCLI>
  ) => {
    if (!cli.world) return "...";
    const serialized = serialize(cli.world);
    const helper = new SerializedHelper(serialized);
    const hasTask001 = helper.hasChild(
      EntityId.Todo,
      EntityId.TodoQuest001Task001LearnAboutSelfSufficiency
    );
    if (hasTask001) {
      helper.removeById(EntityId.TodoQuest001Task001LearnAboutSelfSufficiency);
      helper.add(
        EntityMap[EntityId.TodoQuest001Task002FindOutAboutLand]!,
        EntityId.Todo
      );
      helper.add(EntityMap[EntityId.LandWebsite001]!, EntityId.Internet);
      cli.update({ ...state, entities: helper.entities });
      return `${makeHeader("self-sufficiency.com")}${makeParagraph(
        "You've read the website and it seemed very reasonable"
      )}`;
    }
    return `${makeHeader("self-sufficiency.com")}${makeParagraph(
      "This is a website about self-sufficiency"
    )}`;
  },
};
