import { serialize } from "..";
import { EntityId } from "../../../../bridge";
import { makeList, makeParagraph, makeSecondaryHeading } from "../../../utils";
import { getCLI } from "../../cli";
import { getEntityMap } from "../entities";
import { SerializedHelper } from "../serialized";

export default {
  [EntityId.SelfSufficiencyWebsite]: (cli: ReturnType<typeof getCLI>) => {
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
        getEntityMap()[EntityId.TodoQuest001Task002FindOutAboutLand]!,
        EntityId.Todo
      );
      helper.add(getEntityMap()[EntityId.LandWebsite001]!, EntityId.Internet);
      cli.update({ entities: helper.entities });
      return `${makeSecondaryHeading("self-sufficiency.com")}${makeParagraph(
        "You've read the website and it seemed very reasonable"
      )}`;
    }
    return `${makeSecondaryHeading("self-sufficiency.com")}${makeParagraph(
      "This is a website about self-sufficiency"
    )}`;
  },
  [EntityId.LandWebsite001]: (cli: ReturnType<typeof getCLI>) => {
    if (!cli.world) return "...";
    const serialized = serialize(cli.world);
    const helper = new SerializedHelper(serialized);
    const hasTask002 = helper.hasChild(
      EntityId.Todo,
      EntityId.TodoQuest001Task002FindOutAboutLand
    );
    if (hasTask002) {
      helper.removeById(EntityId.TodoQuest001Task002FindOutAboutLand);
      helper.add(
        getEntityMap()[EntityId.TodoQuest001Task003CallRealtor]!,
        EntityId.Todo
      );
      helper.add(getEntityMap()[EntityId.LandWebsite001]!, EntityId.Internet);
      cli.update({ entities: helper.entities });
    }
    return `${makeSecondaryHeading("buy-land.com")}${makeParagraph(
      "Here are some land items:"
    )}${makeList("", ["Option One", "Option Two"])}`;
  },
};
