import { getInitialState } from "../../bridge";
import {
  getChangeAction,
  getEnterAction,
  getInitAction,
  getSuggestAction,
} from "../store/actions";
import { compose } from "../store/reducer";
import { selectHistory, selectInput, selectOutput } from "../store/selectors";

describe("CLI features", () => {
  const initialState = getInitialState();
  it("should say that command is unknown", () => {
    const resultingState = compose(initialState)([
      getInitAction(),
      getChangeAction("he"),
      getEnterAction(),
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
      getInitAction(),
      getChangeAction("he"),
      getSuggestAction(),
    ]);
    expect(selectInput(resultingState)).toEqual("help");
  });

  it("should show available commands", () => {
    const resultingState = compose(initialState)([
      getInitAction(),
      getChangeAction(""),
      getSuggestAction(),
    ]);
    expect(selectInput(resultingState)).toMatchInlineSnapshot(`""`);
  });

  it("should perform the autocompleted command", () => {
    const resultingState = compose(initialState)([
      getInitAction(),
      getChangeAction("goo"),
      getSuggestAction(),
      getEnterAction(),
    ]);
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
      "
      <h3>Here is what I can do right now:</h3>
      <ul><li><b>help</b>: if I forget the sense of direction, this comes in handy</li><li><b>status</b>: lets me know what is going on in the world</li><li><b>todo</b>: my todo list</li><li><b>internet</b>: this is how I browse the internet</li><li><b>phone</b>: something I use when need to contact somebody</li><li><b>skip</b>: sometimes I need to skip a day of writing entries</li></ul>
      "
    `);
  });

  it("should skip", () => {
    const resultingState = compose(initialState)([
      getInitAction(),
      getChangeAction("skip"),
      getEnterAction(),
    ]);
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(
      `"<h2>[20/1/2 Tuesday]</h2><h3>Skip</h3><p>Will get back to the diary tomorrow.</p>"`
    );
  });

  it("should skip", () => {
    const resultingState = compose(initialState)([
      getInitAction(),
      getChangeAction("skip"),
      getEnterAction(),
      getChangeAction("skip"),
      getEnterAction(),
      getChangeAction("skip"),
      getEnterAction(),
    ]);
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(
      `"<h2>[20/1/4 Thursday]</h2><h3>Skip</h3><p>Will get back to the diary tomorrow.</p>"`
    );
  });
});
