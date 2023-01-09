import { makeHeader, makeList, makeParagraph, processItem } from "../utils";

export const argumentMatch = `
${makeHeader('Some possible arguments for command "{{command}}"')}
${makeList("{{matches}}")}
`;

export const commandMatch = `
${makeHeader("Did you mean?")}
${makeList("{{matches}}")}
`;

export const unknownCommand = `
${makeHeader('Unknown command "{{command}}"')}
${makeParagraph("You entered an unknown command")}
`;

export const initialOutput = `
${makeHeader("Wake up, Neo...")}
${processItem(
  [
    "You wake up with an unpleasant anticipation of yet another day full of work and routine.",
    "Yesterday, you started seriously thinking about what alternatives are out there that could break you out of this strange cycle.",
  ],
  makeParagraph
)}
`;

export const help = `
${makeHeader("Help")}
${makeParagraph(
  "The commands available can be discovered by double tapping the Tab key."
)}
`;

export const hasReadManifest = `
${makeHeader("Reading...")}
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
${makeHeader("TODO")}
${makeList("", ["Inquire about land costs"])}     
`;
