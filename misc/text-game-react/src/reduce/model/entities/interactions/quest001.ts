import { serialize } from "..";
import { EntityId } from "../../../../bridge";
import {
  makeList,
  makeParagraph,
  makeSecondaryHeading,
  processItem,
  templateParser,
} from "../../../utils";
import { getCLI } from "../../cli";
import { getEntityMap } from "../entities";
import { getInteractionMap } from "../interactions";
import { SerializedHelper } from "../serialized";
import { getStatusMeta } from "../utils";

export const getHasCompletedTask001 = (cli: ReturnType<typeof getCLI>) => {
  if (!cli.world) return false;
  const serialized = serialize(cli.world);
  const helper = new SerializedHelper(serialized);
  const hasTask001 = helper.hasChild(
    EntityId.Todo,
    EntityId.TodoQuest001Task001LearnAboutSelfSufficiency
  );
  return !hasTask001;
};

export const getQuest001Interactions = () => ({
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
    const website = getEntityMap()[EntityId.TodoQuest001Task003CallRealtor]!;
    interface WebsiteMeta {
      properties: {
        id: string;
        address: {
          city: string;
          country: string;
        };
        size: number;
        price: number;
        description: string;
        phone: string;
        interact: (cli: ReturnType<typeof getCLI>) => string;
      }[];
    }
    website.meta = {
      properties: [
        {
          id: "property001",
          address: {
            city: "Stupidale",
            country: "Disturbistan",
          },
          size: 4,
          price: 18600,
          phone: "444-333-2211",
          description:
            "There is a pretty large plot of land in {{city}}. It has {{size}} acres and is relatively cheap. It's {{price}} dollars. Not that I have the money, but at least it seems doable... I added the realtor's phone number to my contacts",
          interact: (cli: ReturnType<typeof getCLI>) => {
            return makeParagraph(
              "I called, and asked whether the property still available. I asked for some advice. The realtor was pretty friendly. Now I need to go see the land."
            );
          },
        },
        {
          id: "property002",
          address: {
            city: "Cookie",
            country: "Disturbistan",
          },
          size: 2,
          price: 12900,
          phone: "111-222-3344",
          description:
            "Here is another piece of land I found on the website. It's located in {{city}}. It is smaller--{{size}} acres. This one is going to cost me {{price}} dollars. I added the realtor's phone number to my contacts",
          interact: (cli: ReturnType<typeof getCLI>) =>
            makeParagraph("I called, but nobody responded."),
        },
      ],
    };

    // NOTE: When there is a task to find out about land in the todo
    if (hasTask002) {
      helper.removeById(EntityId.TodoQuest001Task002FindOutAboutLand);
      helper.add(
        getEntityMap()[EntityId.TodoQuest001Task003CallRealtor]!,
        EntityId.Todo
      );
      (website.meta as unknown as WebsiteMeta).properties.forEach((v) => {
        const id = v.phone;
        helper.add(
          {
            id,
            description: `Phone number listed for the property located in ${v.address.city} that costs $${v.price}.`,
            entities: [],
            meta: {},
            name: v.phone,
            type: "misc",
          },
          EntityId.Phone
        );
        helper.add(
          {
            id: `visit-${v.id}`,
            description: `visit the property located in ${v.address.city} that costs $${v.price}.`,
            entities: [],
            meta: {},
            name: `visit-${v.address.city}-${v.price}`,
            type: "misc",
          },
          EntityId.Todo
        );
        getInteractionMap()[id] = v.interact;
      });
      helper.add(getEntityMap()[EntityId.LandWebsite001]!, EntityId.Internet);
      cli.update({ entities: helper.entities });
    }
    return `${makeSecondaryHeading("buy-land.com")}${makeParagraph(
      "Here are some land items I found interesting:"
    )}${makeList(
      "",
      (website.meta as unknown as WebsiteMeta).properties.map((v) =>
        templateParser(v.description, { ...v, ...v.address })
      )
    )}`;
  },
  [EntityId.Mom]: (cli: ReturnType<typeof getCLI>) => {
    const hasCompletedTask001 = getHasCompletedTask001(cli);
    const meta = getStatusMeta(cli);
    const isNewYear = [meta.date?.month, meta.date?.day].every((v) => v === 1);
    if (!hasCompletedTask001) {
      return makeParagraph(
        "I thought about giving my mom a call, but will do that a bit later."
      );
    }
    if (hasCompletedTask001) {
      return processItem(
        [
          "I told my mom about the website and the idea about self-sufficiency.",
          "It didn't seem to register with her for some reason.",
          isNewYear ? "I gave her my best wishes for New Year." : "",
        ].filter((v) => !!v),
        makeParagraph
      );
    }
  },
});
