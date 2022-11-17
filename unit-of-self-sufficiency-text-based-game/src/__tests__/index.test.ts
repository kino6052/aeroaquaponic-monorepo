import { compose } from "../store/reducer";
import {
  selectCommand,
  selectHasReadManifest,
  selectInput,
  selectIsGoogling,
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
-- google
-- help
-- status
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
-- google
-- help
-- status
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
