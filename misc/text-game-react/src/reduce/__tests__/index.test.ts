import { initialState } from "../../bridge";
import {
  getChangeAction,
  getEnterAction,
  getSuggestAction,
} from "../store/actions";
import { compose } from "../store/reducer";
import {
  selectCommand,
  selectHasReadManifest,
  selectInput,
  selectOutput,
} from "../store/selectors";

describe("Game", () => {
  it("should salute player", () => {
    expect(selectOutput(initialState)).toMatchInlineSnapshot(`
      "
      <h2>Wake up, Neo...</h2>
      <p>You wake up with an unpleasant anticipation of yet another day full of work and routine.</p><p>Yesterday, you started seriously thinking about what alternatives are out there that could break you out of this strange cycle.</p>
      "
    `);
  });

  it("should show help player", () => {
    const resultingState = compose(initialState)([
      getChangeAction("help"),
      getEnterAction(),
    ]);
    expect(selectInput(resultingState)).toEqual("");
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
      "
      <h2>Help</h2>
      <p>The commands available can be discovered by double tapping the Tab key.</p>
      "
    `);
  });

  it("should show help to player", () => {
    const resultingState = compose(initialState)([getSuggestAction()]);
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
      "
      <h2>Did you mean?</h2>
      <ul><li>google</li>
      <li>help</li>
      <li>status</li></ul>
      "
    `);
  });

  it("should suggest what to google", () => {
    const resultingState = compose(initialState)([
      getChangeAction("google"),
      getSuggestAction(),
    ]);
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
      "
      <h2>Some possible arguments for command \\"google\\"</h2>
      <ul><li>self-sufficiency</li></ul>
      "
    `);
  });

  it("should google self-sufficiency", () => {
    const resultingState = compose(initialState)([
      getChangeAction("google self-sufficiency"),
      getEnterAction(),
    ]);
    expect(selectInput(resultingState)).toEqual("");
    // expect(selectIsGoogling(resultingState)).toBe(true);
    expect(selectHasReadManifest(resultingState)).toBe(true);
    expect(selectCommand("todo", resultingState)).toBeTruthy();
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
      "
      <h2>Reading...</h2>
      <p>You read about unit of self-sufficiency and it seemed quite reasonable.</p><p>It seems relatively simple too, so you want to start thinking in this direction.</p><p>You created a todo list.</p>
      "
    `);
  });

  // TODO: Remove Leave
  it("should leave site", () => {
    const resultingState = compose(initialState)([
      getChangeAction("google self-sufficiency"),
      getEnterAction(),
    ]);
    expect(selectInput(resultingState)).toEqual("");
    // expect(selectIsGoogling(resultingState)).toBe(false);
    expect(selectHasReadManifest(resultingState)).toBe(true);
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
      "
      <h2>Reading...</h2>
      <p>You read about unit of self-sufficiency and it seemed quite reasonable.</p><p>It seems relatively simple too, so you want to start thinking in this direction.</p><p>You created a todo list.</p>
      "
    `);
  });

  it("should update your commands after you leave site", () => {
    const resultingState = compose(initialState)([
      getChangeAction("google self-sufficiency"),
      getEnterAction(),
      getSuggestAction(),
    ]);
    expect(selectInput(resultingState)).toEqual("");
    // expect(selectIsGoogling(resultingState)).toBe(false);
    expect(selectHasReadManifest(resultingState)).toBe(true);
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
      "
      <h2>Did you mean?</h2>
      <ul><li>google</li>
      <li>help</li>
      <li>status</li>
      <li>todo</li></ul>
      "
    `);
  });

  it("should let you examine todo after you leave site", () => {
    const resultingState = compose(initialState)([
      getChangeAction("google self-sufficiency"),
      getEnterAction(),
      getChangeAction("todo"),
      getEnterAction(),
    ]);
    expect(selectInput(resultingState)).toEqual("");
    // expect(selectIsGoogling(resultingState)).toBe(false);
    expect(selectHasReadManifest(resultingState)).toBe(true);
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
      "
      <h2>TODO</h2>
      <ul><li>Inquire about land costs</li></ul>     
      "
    `);
  });

  it("should have extra options after it let you examine todo", () => {
    const resultingState = compose(initialState)([
      getChangeAction("google self-sufficiency"),
      getEnterAction(),
      getChangeAction("todo"),
      getEnterAction(),
      getChangeAction("google"),
      getEnterAction(),
    ]);
    expect(selectInput(resultingState)).toEqual("");
    // expect(selectIsGoogling(resultingState)).toBe(false);
    expect(selectHasReadManifest(resultingState)).toBe(true);
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
      "
      <h2>google</h2>
      <p>Google search</p>
      <ul><li>Self-sufficiency</li><li>Buy Land Dot Com</li></ul>
      "
    `);
  });

  it("should be able to google buy land dot com", () => {
    const resultingState = compose(initialState)([
      getChangeAction("google self-sufficiency"),
      getEnterAction(),
      getChangeAction("todo"),
      getEnterAction(),
      getChangeAction("google bu"),
      getSuggestAction(),
    ]);
    expect(selectInput(resultingState)).toMatchInlineSnapshot(
      `"google buy land dot com"`
    );
  });

  it("should be able to google buy land dot com", () => {
    const resultingState = compose(initialState)([
      getChangeAction("google self-sufficiency"),
      getEnterAction(),
      getChangeAction("todo"),
      getEnterAction(),
      getChangeAction("google bu"),
      getSuggestAction(),
      getEnterAction(),
    ]);
    expect(selectInput(resultingState)).toEqual("");
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
      "
      <h2>Unknown command \\"google buy land dot com\\"</h2>
      <p>You entered an unknown command</p>
      "
    `);
  });
});
