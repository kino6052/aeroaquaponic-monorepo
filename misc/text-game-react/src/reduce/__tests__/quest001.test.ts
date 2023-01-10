import { initialState } from "../../bridge";
import {
  getChangeAction,
  getEnterAction,
  getSuggestAction,
} from "../store/actions";
import { compose } from "../store/reducer";
import { selectInput, selectOutput } from "../store/selectors";

describe("Quest 001", () => {
  it("should have a todo item", () => {
    const resultingState = compose(initialState)([
      getChangeAction("todo"),
      getEnterAction(),
    ]);
    expect(selectInput(resultingState)).toEqual("");
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(
      `"<h2>Todo</h2><p>You are getting closer to your goal.</p><p>Here is what's left: </p><ul><li>Learn about self-sufficiency</li></ul>"`
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
      `"<h2>Todo</h2><p>You are getting closer to your goal.</p><p>Here is what's left: </p><ul><li>Go to the internet and find out about land</li></ul>"`
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
      `"<h2>self-sufficiency.com</h2><p>This is a website about self-sufficiency</p>"`
    );
  });
});
