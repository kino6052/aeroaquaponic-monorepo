import { compose } from "../store/reducer";
import { selectHistory, selectInput, selectOutput } from "../store/selectors";
import { initialState } from "../../bridge";

describe("CLI features", () => {
  it("should say that command is unknown", () => {
    const resultingState = compose(initialState)([
      ["change", "he"],
      ["enter", ""],
    ]);
    expect(selectInput(resultingState)).toEqual("");
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
      "
      <h2>Unknown command \\"he\\"</h2>
      <p>You entered an unknown command</p>
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

  it("should show available commands", () => {
    const resultingState = compose(initialState)([
      ["change", ""],
      ["suggest", ""],
    ]);
    expect(selectInput(resultingState)).toMatchInlineSnapshot(`""`);
  });

  it("should perform the autocompleted command", () => {
    const resultingState = compose(initialState)([
      ["change", "goo"],
      ["suggest", ""],
      ["enter", ""],
    ]);
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
      "
      <h2>google</h2>
      <p>Google search</p>
      <ul><li>Self-sufficiency</li></ul>
      "
    `);
  });

  it.skip("should suggest params", () => {
    const resultingState = compose(initialState)([
      ["change", "goo"],
      ["suggest", ""],
      ["suggest", ""],
    ]);
    expect(selectInput(resultingState)).toEqual("google");
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
      "
      <h2>Some possible arguments for command \\"google\\"</h2>
      <ul><li>self-sufficiency</li></ul>
      "
    `);
  });

  it.skip("should autocomplete params", () => {
    const resultingState = compose(initialState)([
      ["change", "google se"],
      ["suggest", ""],
    ]);
    expect(selectInput(resultingState)).toMatchInlineSnapshot(
      `"google self-sufficiency"`
    );
  });

  it("should clear history", () => {
    const resultingState = compose(initialState)([
      ["change", "google"],
      ["enter", ""],
    ]);
    expect(selectHistory(resultingState)).toMatchInlineSnapshot(`
      Array [
        "
      <h2>Wake up, Neo...</h2>
      <p>You wake up with an unpleasant anticipation of yet another day full of work and routine.</p><p>Yesterday, you started seriously thinking about what alternatives are out there that could break you out of this strange cycle.</p>
      ",
      ]
    `);
  });

  it("should clear history", () => {
    const resultingState = compose(initialState)([
      ["change", "google"],
      ["enter", ""],
      ["change", "clear"],
      ["enter", ""],
    ]);
    expect(selectHistory(resultingState)).toMatchInlineSnapshot(`Array []`);
  });
});
