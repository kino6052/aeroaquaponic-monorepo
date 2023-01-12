import { serialize } from "..";
import { EntityId } from "../../../../bridge";
import {
  makeList,
  makeParagraph,
  makeSecondaryHeading,
  processItem,
} from "../../../utils";
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
      return `${makeSecondaryHeading("self-sufficiency.com")}${processItem(
        [
          "I visited the website about self-sufficiency that I had come across a few days ago. It was an eye-opening experience, and I learned a lot about what it takes to truly become self-sufficient. The website explained that in order to start the journey, I need to form a unit of self-sufficiency, which comprises of three main components: property, technology, and skills.",
          "The first component, property, is crucial. I need to find a piece of land where I can live without paying rent and where I can grow my food. This will form the foundation of my self-sufficiency journey, and it's something I'll need to start researching and looking into.",
          "The second component, technology, is also crucial. Over time, I'll need to improve my property and make sure that I don't spend too much time doing unnecessary repetitive labor. This means investing in tools and equipment that will make my life easier and more efficient. It's important to find the balance between working hard and living a well-balanced life.",
          "The third component, skills, is also key. I need to start developing skills that will allow me to adapt quickly to any change in the world, and not let me lose the self-sufficient status. This means learning new things, experimenting with different techniques, and being open to new ideas.",
          "Overall, it was an enlightening experience, and it gave me a lot to think about. I now have a better understanding of what it takes to become truly self-sufficient, and I'm excited to start researching and taking action on the different components. I'm looking forward to updating my diary with my progress and thoughts as I learn more about self-sufficiency.",
        ],
        makeParagraph
      )}`;
    }
    return `${makeSecondaryHeading("self-sufficiency.com")}${processItem(
      [
        "I really dug the ideas outlined in the website about self-sufficiency.",
        "The concept of forming a unit of self-sufficiency really resonated with me.",
        "Now I just need to follow my todo list",
      ],
      makeParagraph
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
