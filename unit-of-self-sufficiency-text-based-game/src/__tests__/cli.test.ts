import { compose } from "../store/reducer";
import { selectInput, selectOutput } from "../store/selectors";
import { initialState } from "../store/store";

describe("CLI features", () => {
  it("should say that command is unknown", () => {
    const resultingState = compose(initialState)([
      ["change", "he"],
      ["enter", ""],
    ]);
    expect(selectInput(resultingState)).toEqual("");
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
  "
  h1 Unknown command he
  p You entered an unknown command
  "
  `);
  });

  it("should autocomplete command if there is only one match", () => {
    const resultingState = compose(initialState)([
      ["change", "he"],
      ["suggest", ""],
    ]);
    expect(selectInput(resultingState)).toEqual("help");
  });

  it("should show available commands that match the input", () => {
    const resultingState = compose({
      ...initialState,
      commands: {
        test: {
          name: "test",
          args: [],
          description: "",
        },
        temp: {
          name: "temp",
          args: [],
          description: "",
        },
      },
    })([
      ["change", "te"],
      ["suggest", ""],
    ]);
    expect(selectInput(resultingState)).toEqual("te");
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
  "
  h1 Did you mean?
  temp
  test
  "
  `);
  });
});
