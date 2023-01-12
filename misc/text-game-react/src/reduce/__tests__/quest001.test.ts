import { initialState } from "../../bridge";
import {
  getChangeAction,
  getEnterAction,
  getSuggestAction,
} from "../store/actions";
import { compose } from "../store/reducer";
import { selectHistory, selectInput, selectOutput } from "../store/selectors";

describe("Quest 001", () => {
  it("should have a todo item", () => {
    const resultingState = compose(initialState)([
      getChangeAction("todo"),
      getEnterAction(),
    ]);
    expect(selectInput(resultingState)).toEqual("");
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(
      `"<h3>Todo</h3><p>I had a look at my todo and here were the items:</p><p>Here is what's left: </p><ul><li>Go to the internet to visit the site and learn about self-sufficiency</li></ul>"`
    );
  });

  it("should have a correct autocomplete sequence", () => {
    const resultingState = compose(initialState)([
      getChangeAction("internet self"),
      getSuggestAction(),
      getEnterAction(),
    ]);
    expect(selectInput(resultingState)).toEqual("");
    expect(selectHistory(resultingState).length).toMatchInlineSnapshot(`1`);
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(
      `"<h3>self-sufficiency.com</h3><p>You've read the website and it seemed very reasonable</p>"`
    );
  });

  it("should have a todo item", () => {
    const resultingState = compose(initialState)([
      getChangeAction("internet self-sufficiency"),
      getEnterAction(),
      getChangeAction("todo"),
      getEnterAction(),
    ]);
    expect(selectInput(resultingState)).toEqual("");
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(
      `"<h3>Todo</h3><p>I had a look at my todo and here were the items:</p><p>Here is what's left: </p><ul><li>go to the internet and find out about land</li></ul>"`
    );
  });

  it("should only display message once", () => {
    const resultingState = compose(initialState)([
      getChangeAction("internet self-sufficiency"),
      getEnterAction(),
      getChangeAction("internet self-sufficiency"),
      getEnterAction(),
    ]);
    expect(selectInput(resultingState)).toEqual("");
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(
      `"<h3>self-sufficiency.com</h3><p>This is a website about self-sufficiency</p>"`
    );
  });
});
