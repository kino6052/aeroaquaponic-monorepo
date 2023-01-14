import { initialState } from "../../bridge";
import { compose } from "../store/reducer";
import { selectHistory, selectInput, selectOutput } from "../store/selectors";

describe("CLI features", () => {
  it("should say that command is unknown", () => {
    const resultingState = compose(initialState)([
      ["change", "he"],
      ["enter", ""],
    ]);
    expect(selectInput(resultingState)).toMatchInlineSnapshot(`"help"`);
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
      "
      <h3>Here is what I can do right now:</h3>
      <ul><li><b>help</b>: if I forget the sense of direction, this comes in handy</li></ul>
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
      <h3>Here is what I can do right now:</h3>
      <ul><li><b>help</b>: if I forget the sense of direction, this comes in handy</li><li><b>status</b>: lets me know what is going on in the world</li><li><b>todo</b>: my todo list</li><li><b>internet</b>: this is how I browse the internet</li><li><b>phone</b>: something I use when need to contact somebody</li></ul>
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
    expect(selectHistory(resultingState)).toMatchInlineSnapshot(`Array []`);
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
