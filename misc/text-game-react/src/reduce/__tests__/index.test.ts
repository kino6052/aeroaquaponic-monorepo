import { initialState } from "../../bridge";
import {
  getChangeAction,
  getEnterAction,
  getSuggestAction,
} from "../store/actions";
import { compose } from "../store/reducer";
import { selectInput, selectOutput } from "../store/selectors";

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
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(
      `"<h2>Help</h2><p>This is a game about self-sufficiency</p>"`
    );
  });

  it("should show help to player", () => {
    const resultingState = compose(initialState)([getSuggestAction()]);
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
      "
      <h2>Did you mean?</h2>
      <ul><li><b>help</b>: lets you know things</li><li><b>status</b>: provides status for the game</li><li><b>todo</b>: your todo list</li><li><b>internet</b>: let's you browse web</li><li><b>clear</b>: clear history</li></ul>
      "
    `);
  });

  it("should suggest what to google", () => {
    const resultingState = compose(initialState)([
      getChangeAction("internet"),
      getSuggestAction(),
    ]);
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
      "
      <h2>Did you mean?</h2>
      <ul><li><i>internet</i> <b>self-sufficiency</b>: website</li></ul>
      "
    `);
  });

  it("should google self-sufficiency", () => {
    const resultingState = compose(initialState)([
      getChangeAction("internet self-sufficiency"),
      getEnterAction(),
    ]);
    expect(selectInput(resultingState)).toEqual("");
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(
      `"<h2>self-sufficiency.com</h2><p>You've read the website and it seemed very reasonable</p>"`
    );
  });

  it("should update your commands after you leave site", () => {
    const resultingState = compose(initialState)([
      getChangeAction("internet self-sufficiency"),
      getEnterAction(),
      getSuggestAction(),
    ]);
    expect(selectInput(resultingState)).toEqual("");
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
      "
      <h2>Did you mean?</h2>
      <ul><li><b>help</b>: lets you know things</li><li><b>status</b>: provides status for the game</li><li><b>todo</b>: your todo list</li><li><b>internet</b>: let's you browse web</li><li><b>clear</b>: clear history</li></ul>
      "
    `);
  });

  it("should let you examine todo after you leave site", () => {
    const resultingState = compose(initialState)([
      getChangeAction("internet self-sufficiency"),
      getEnterAction(),
      getChangeAction("todo"),
      getEnterAction(),
    ]);
    expect(selectInput(resultingState)).toEqual("");
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(
      `"<h2>Todo</h2><p>You are getting closer to your goal.</p><p>Here is what's left: </p><ul><li>Go to the internet and find out about land</li></ul>"`
    );
  });

  it("should have extra options after it let you examine todo", () => {
    const resultingState = compose(initialState)([
      getChangeAction("internet self-sufficiency"),
      getEnterAction(),
      getChangeAction("todo"),
      getEnterAction(),
      getChangeAction("google"),
      getEnterAction(),
    ]);
    expect(selectInput(resultingState)).toEqual("");
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
      "
      <h2>Unknown command \\"google\\"</h2>
      <p>You entered an unknown command</p>
      "
    `);
  });

  it("should be able to google buy land dot com", () => {
    const resultingState = compose(initialState)([
      getChangeAction("internet self-sufficiency"),
      getEnterAction(),
      getChangeAction("todo"),
      getEnterAction(),
      getChangeAction("internet bu"),
      getSuggestAction(),
    ]);
    expect(selectInput(resultingState)).toMatchInlineSnapshot(`"internet"`);
  });

  it("should be able to google buy land dot com", () => {
    const resultingState = compose(initialState)([
      getChangeAction("internet self-sufficiency"),
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
      <h2>Did you mean?</h2>
      <ul><li><b>help</b>: lets you know things</li><li><b>status</b>: provides status for the game</li><li><b>todo</b>: your todo list</li><li><b>internet</b>: let's you browse web</li><li><b>clear</b>: clear history</li></ul>
      "
    `);
  });

  it("should show status", () => {
    const resultingState = compose(initialState)([
      getChangeAction("status"),
      getEnterAction(),
    ]);
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
      "<h2>Status</h2><p><b>Date</b>: 2020/1/1</p><p><b>Season</b>: winter</p><p><b>Temperature</b>: -10 celsius</p><p><b>Location</b>: Disturbipolis, Disturbistan, Disturbium</p><p><b>Economics</b>: Inflation Rate: 7; Sentiment: cold</p>
        <p><b>Politics</b>: Spectrum: liberal</p><p><b>Description</b>: You are looking for ways to change the course of your life for better</p>"
    `);
  });
});
