import produce from "immer";

type TCommand = "enter" | "change" | "suggest";

type TEvent = [TCommand, string];

interface IState {
  input: string;
  output: string;
}

const initialState: IState = {
  input: "",
  output: `
h1 Wake up, Neo...
p You wake up with an unpleasant anticipation of yet another day full of work and routine.
p Yesterday, you started seriously thinking about what alternatives are out there that could break you out of this strange cycle.
`,
};

const selectOutput = (state: IState) => state.output;

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
  if (event[0] === "suggest") {
    return produce(state, (draft) => {
      draft.output = `
b Available commands
i google
  p -- Allows to find something on the internet
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
i google
  p -- Allows to find something on the internet
"
`);
  });
});
