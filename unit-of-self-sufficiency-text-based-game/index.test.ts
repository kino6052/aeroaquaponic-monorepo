import produce from "immer";
import * as outputs from "./outputs";

type TCommand = "enter" | "change" | "suggest";

type TEvent = [TCommand, string];

interface IState {
  input: string;
  output: string;
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
  output: `
h1 Wake up, Neo...
p You wake up with an unpleasant anticipation of yet another day full of work and routine.
p Yesterday, you started seriously thinking about what alternatives are out there that could break you out of this strange cycle.
`,
};

const selectOutput = (state: IState) => state.output;
const selectInput = (state: IState) => state.input;
const selectIsGoogling = (state: IState) => state.google.isGoogling;
const selectHasReadManifest = (state: IState) =>
  state.google.options["self-sufficiency"].visited;

const reduce = (event: TEvent, state: IState): IState => {
  return produce(state, (draft) => {
    if (event[0] === "enter") {
      draft.input = "";
      if (state.input === "help") {
        draft.output = outputs.help;
        return;
      }
      if (selectInput(state) === "google self-sufficiency") {
        draft.google.isGoogling = true;
        draft.google.options["self-sufficiency"].visited = true;
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
    if (event[0] === "suggest" && selectInput(state) === "google") {
      draft.output = outputs.googleCommands;
      return;
    }
    if (event[0] === "suggest" && selectInput(state) === "") {
      if (selectHasReadManifest(state) === true) {
        draft.output = outputs.todo;
        return;
      }
      draft.output = outputs.availableCommands;
      return;
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
b Available commands
p Note: You can autocomplete queries by hitting Tab. For example, enter "goo" and hit Tab key, you will get "google"
p Then if you hit Tab twice you will get some options of what makes sense to google.
div
  i google
  p Allows to find something on the internet
  p Try writing 
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
b Possible google commands
ul
  li Self-sufficiency
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

  it("should let you examine todo after you leave site", () => {
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
b Todo
ul
  li Inquire about land costs        
"
`);
  });
});
