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
import { initialState } from "../store/store";

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
      getChangeAction("help"),
      getEnterAction(),
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
    const resultingState = compose(initialState)([getSuggestAction()]);
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
"
h1 Did you mean?
google
help
status
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
h1 Some possible arguments for command "google"
self-sufficiency
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
p You read about unit of self-sufficiency and it seemed quite reasonable.
p It seems relatively simple too, so you want to start thinking in this direction.
p You created a todo list.
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
p You read about unit of self-sufficiency and it seemed quite reasonable.
p It seems relatively simple too, so you want to start thinking in this direction.
p You created a todo list.
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
h1 Did you mean?
google
help
status
todo
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
b Todo
ul
  li Inquire about land costs        
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
h1 google
p Google search
-- Self-sufficiency
-- Buy Land Dot Com
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
h1 Unknown command "google buy land dot com"
p You entered an unknown command
"
`);
  });
});
