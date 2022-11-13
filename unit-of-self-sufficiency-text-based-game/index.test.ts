import produce from "immer";

type TCommand = "enter" | "change" | "suggest";

type TEvent = [TCommand, string];

interface IState {
  input: string;
  output: string;
  isGoogling: boolean;
  hasReadAboutSelfSufficiency: boolean;
}

const initialState: IState = {
  isGoogling: false,
  hasReadAboutSelfSufficiency: false,
  input: "",
  output: `
h1 Wake up, Neo...
p You wake up with an unpleasant anticipation of yet another day full of work and routine.
p Yesterday, you started seriously thinking about what alternatives are out there that could break you out of this strange cycle.
`,
};

const selectOutput = (state: IState) => state.output;
const selectInput = (state: IState) => state.input;
const selectIsGoogling = (state: IState) => state.isGoogling;
const selectHasReadManifest = (state: IState) =>
  state.hasReadAboutSelfSufficiency;

const reduce = (event: TEvent, state: IState): IState => {
  if (event[0] === "enter" && state.input === "help") {
    return produce(state, (draft) => {
      draft.output = `
b Help
p The commands available can be discovered by double tapping the Tab key.
`;
    });
  }
  if (event[0] === "change") {
    return produce(state, (draft) => {
      draft.input = event[1];
    });
  }
  if (event[0] === "suggest" && selectInput(state) === "google") {
    return produce(state, (draft) => {
      draft.output = `
b Possible google commands
ul
    li Self-sufficiency
`;
    });
  }
  if (event[0] === "suggest") {
    return produce(state, (draft) => {
      draft.output = `
b Available commands
p Note: You can autocomplete queries by hitting Tab. For example, enter "goo" and hit Tab key, you will get "google"
p Then if you hit Tab twice you will get some options of what makes sense to google.
div
  i google
  p Allows to find something on the internet
  p Try writing 
`;
    });
  }
  if (
    event[0] === "enter" &&
    selectInput(state) === "google self-sufficiency"
  ) {
    return produce(state, (draft) => {
      draft.isGoogling = true;
      draft.hasReadAboutSelfSufficiency = true;
      draft.output = `
h1 Google results
ul
  li
    b Unit of self-sufficiency
`;
    });
  }
  if (event[0] === "enter" && selectInput(state) === "leave") {
    return produce(state, (draft) => {
      draft.isGoogling = false;
      draft.output = `
p You read about unit of self-sufficiency and it seemed quite reasonable.
p It seems relatively simple too, so you want to start thinking in this direction.
p You created a todo list.
`;
    });
  }
  return state;
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
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
"
b Help
p The commands available can be discovered by double tapping the Tab key.
"
`);
  });

  it("should show help player", () => {
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
});
