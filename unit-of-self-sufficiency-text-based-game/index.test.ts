import produce from "immer";
import * as outputs from "./outputs";

type TCommand = "enter" | "change" | "suggest";

type TEvent = [TCommand, string];

type TAvailableCommand = {
  name: string;
  description: string;
  args: TAvailableCommand[];
};

const commands: Record<string, TAvailableCommand> = {
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

const getCommandData = (
  state: IState,
  commandName?: typeof commands[number]["name"]
): { args: string[]; name?: string; description?: string } => {
  const { commands } = state;
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

const generateCommandOutput = ({
  args,
  description,
  name,
}: ReturnType<typeof getCommandData>) => `
h1 ${name}
p ${description}
${args.map((v) => `-- ${v}`).join("\n")}
`;

interface IState {
  input: string;
  output: string;
  commands: Record<string, TAvailableCommand>;
  google: {
    isGoogling: boolean;
    options: {
      [key: string]: {
        visited: boolean;
      };
    };
  };
}

const initialState: IState = {
  google: {
    isGoogling: false,
    options: {
      "self-sufficiency": {
        visited: false,
      },
    },
  },
  input: "",
  commands,
  output: outputs.initialOutput,
};

const selectOutput = (state: IState) => state.output;
const selectInput = (state: IState) => state.input;
const selectIsGoogling = (state: IState) => state.google.isGoogling;
const selectHasReadManifest = (state: IState) =>
  state.google.options["self-sufficiency"].visited;
const selectCommand = (commandName: string, state: IState) =>
  state.commands[commandName];

const reduce = (event: TEvent, state: IState): IState => {
  return produce(state, (draft) => {
    if (event[0] === "enter") {
      draft.input = "";
      if (selectHasReadManifest(state) && selectInput(state) === "todo") {
        draft.output = outputs.todo;
        return;
      }
      if (state.input === "help") {
        draft.output = outputs.help;
        return;
      }
      if (selectInput(state) === "google self-sufficiency") {
        draft.google.isGoogling = true;
        draft.google.options["self-sufficiency"].visited = true;
        draft.commands["todo"] = {
          name: "todo",
          description: "Your todo list",
          args: [],
        };
        draft.output = outputs.google;
        return;
      }
      if (
        selectHasReadManifest(state) === true &&
        selectIsGoogling(state) === true &&
        selectInput(state) === "leave"
      ) {
        draft.google.isGoogling = false;
        draft.output = outputs.hasReadManifest;
        return;
      }
    }
    if (event[0] === "change") {
      draft.input = event[1];
      return;
    }
    if (event[0] === "suggest") {
      if (selectInput(state) === "google") {
        draft.output = generateCommandOutput(getCommandData(state, "google"));
        return;
      }

      if (selectInput(state) === "") {
        draft.output = generateCommandOutput(getCommandData(state));
        return;
      }
    }
  });
};

const compose = (state: IState) => (events: TEvent[]) =>
  events.reduce((_state, event) => reduce(event, _state), state);

describe("Game", () => {
  it("should salute player", () => {
    expect(selectOutput(initialState)).toMatchInlineSnapshot(`
"
h1 Wake up, Neo...
p You wake up with an unpleasant anticipation of yet another day full of work and routine.
p Yesterday, you started seriously thinking about what alternatives are out there that could break you out of this strange cycle.
"
`);
  });

  it("should show help player", () => {
    const resultingState = compose(initialState)([
      ["change", "help"],
      ["enter", ""],
    ]);
    expect(selectInput(resultingState)).toEqual("");
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
"
b Help
p The commands available can be discovered by double tapping the Tab key.
"
`);
  });

  it("should show help to player", () => {
    const resultingState = compose(initialState)([["suggest", ""]]);
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
"
h1 Available commands
p 
Note: You can autocomplete queries by hitting Tab. For example, enter "goo" and hit Tab key, you will get "google"
-- status
-- help
-- google
"
`);
  });

  it("should suggest what to google", () => {
    const resultingState = compose(initialState)([
      ["change", "google"],
      ["suggest", ""],
    ]);
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
"
h1 google
p Google search
-- Self-sufficiency
"
`);
  });

  it("should google self-sufficiency", () => {
    const resultingState = compose(initialState)([
      ["change", "google self-sufficiency"],
      ["enter", ""],
    ]);
    expect(selectInput(resultingState)).toEqual("");
    expect(selectIsGoogling(resultingState)).toBe(true);
    expect(selectHasReadManifest(resultingState)).toBe(true);
    expect(selectCommand("todo", resultingState)).toBeTruthy();
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
"
h1 Google results
ul
  li
    b Unit of self-sufficiency
"
`);
  });

  it("should leave site", () => {
    const resultingState = compose(initialState)([
      ["change", "google self-sufficiency"],
      ["enter", ""],
      ["change", "leave"],
      ["enter", ""],
    ]);
    expect(selectInput(resultingState)).toEqual("");
    expect(selectIsGoogling(resultingState)).toBe(false);
    expect(selectHasReadManifest(resultingState)).toBe(true);
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
"
p You read about unit of self-sufficiency and it seemed quite reasonable.
p It seems relatively simple too, so you want to start thinking in this direction.
p You created a todo list.
"
`);
  });

  it("should update your commands after you leave site", () => {
    const resultingState = compose(initialState)([
      ["change", "google self-sufficiency"],
      ["enter", ""],
      ["change", "leave"],
      ["enter", ""],
      ["suggest", ""],
    ]);
    expect(selectInput(resultingState)).toEqual("");
    expect(selectIsGoogling(resultingState)).toBe(false);
    expect(selectHasReadManifest(resultingState)).toBe(true);
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
"
h1 Available commands
p 
Note: You can autocomplete queries by hitting Tab. For example, enter "goo" and hit Tab key, you will get "google"
-- status
-- help
-- google
-- todo
"
`);
  });

  it("should let you examine todo after you leave site", () => {
    const resultingState = compose(initialState)([
      ["change", "google self-sufficiency"],
      ["enter", ""],
      ["change", "leave"],
      ["enter", ""],
      ["change", "todo"],
      ["enter", ""],
    ]);
    expect(selectInput(resultingState)).toEqual("");
    expect(selectIsGoogling(resultingState)).toBe(false);
    expect(selectHasReadManifest(resultingState)).toBe(true);
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
"
b Todo
ul
  li Inquire about land costs        
"
`);
  });
});
