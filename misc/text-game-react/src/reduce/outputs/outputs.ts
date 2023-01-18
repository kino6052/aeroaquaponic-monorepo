import { getFormattedDate } from "../model/entities/status";
import {
  makeBold,
  makeList,
  makeParagraph,
  makePrimaryHeading,
  makeSecondaryHeading,
  processItem,
} from "../utils";

export const argumentMatch = `
${makeSecondaryHeading('Some possible arguments for command "{{command}}"')}
${makeList("{{matches}}")}
`;

export const commandMatch = `
${makeSecondaryHeading("Here is what I can do right now:")}
${makeList("{{matches}}")}
`;

export const unknownCommand = `
${makeSecondaryHeading('Unknown command "{{command}}"')}
${makeParagraph("You entered an unknown command")}
`;

export const getInitialOutput = () => `
${makePrimaryHeading(getFormattedDate())}
${processItem(
  [
    `Happy New Year!`,
    `I woke up this morning with an uneasy feeling of anticipation, knowing that yet another day full of meaningless work and routine was about to begin. As I opened my eyes, I couldn't help but feel trapped in a rat race that I desperately wanted to escape from. I lay in bed for a moment, staring blankly at the ceiling and thinking about all the alternatives that could break me out of this strange cycle.`,
    `Yesterday, as I was aimlessly browsing the web, I stumbled across a promising resource that could potentially help me make the escape I've been dreaming of. The website was about self-sufficiency and it caught my attention instantly. I spent hours reading through it, and I couldn't help but feel a spark of hope.`,
    `I got out of bed with a sigh, my feet hitting the cold floor. I dragged myself to the bathroom, splashed some water on my face, and got dressed for work. As I made my way to the kitchen, I couldn't help but think about how meaningless this day was going to be. I cursed myself for not having the courage to make a change and break out of this cycle. The smell of coffee and toast filled my nostrils as I sat down at the table, but it did little to lift my spirits. I felt empty and unfulfilled, just like every other day before.`,
    `But then I remembered the resource I had come across yesterday. I took out a pen and paper, and jotted down instructions to myself. This will be my New Year resolutions. "${makeBold(
      `Go on the internet and look for this website about self-sufficiency`
    )}. Take the time to read through it thoroughly and research more about it. This could be the answer to breaking out of this cycle and finding true fulfillment."`,
    `I knew that this was a step in the right direction and it gave me a glimmer of hope for the future. I couldn't wait to get home and start my research. And maybe, just maybe, I'll finally be able to escape this rat race and become the king of my own destiny. Or at least, a self-sufficient`,
  ],
  makeParagraph
)}
`;

export const help = `
${makeSecondaryHeading("Help")}
${makeParagraph(
  "The commands available can be discovered by double tapping the Tab key."
)}
`;

export const hasReadManifest = `
${makeSecondaryHeading("Reading...")}
${processItem(
  [
    "You read about unit of self-sufficiency and it seemed quite reasonable.",
    "It seems relatively simple too, so you want to start thinking in this direction.",
    "You created a todo list.",
  ],
  makeParagraph
)}
`;

export const todo = `
${makeSecondaryHeading("TODO")}
${makeList("", ["Inquire about land costs"])}     
`;
