import { IState, TAvailableCommand } from "../../bridge";
import { makeHeader, makeList, makeParagraph } from "../utils";
import { selectCommands } from "./selectors";

export const commands: Record<string, TAvailableCommand> = {
  status: {
    name: "status",
    description: "Find out what's going on at the moment",
    args: [],
  },
  help: {
    name: "help",
    description: "Find out what available commands are there",
    args: [],
  },
  google: {
    name: "google",
    description: "Google search",
    args: [
      {
        name: "Self-sufficiency",
        description: "Learn about self-sufficiency",
        args: [],
      },
    ],
  },
};

export const getCommandData = (
  state: IState,
  commandName?: typeof commands[number]["name"]
): { args: string[]; name?: string; description?: string } => {
  const commands = selectCommands(state);
  const command = commands[commandName || ""];
  if (!command)
    return {
      args: Object.keys(commands),
      name: "Available commands",
      description: `
Note: You can autocomplete queries by hitting Tab. For example, enter "goo" and hit Tab key, you will get "google"`,
    };
  const { args, description, name } = command;
  return {
    args: args.map(({ name }) => name),
    description: description ?? "",
    name: name ?? "",
  };
};

const _generateCommandOutput = ({
  args,
  description,
  name,
}: ReturnType<typeof getCommandData>) => `
${makeHeader(name ?? "")}
${makeParagraph(description ?? "")}
${makeList("", args)}
`;

export const generateCommandOutput = (
  state: IState,
  commandName?: typeof commands[number]["name"]
) => _generateCommandOutput(getCommandData(state, commandName));
