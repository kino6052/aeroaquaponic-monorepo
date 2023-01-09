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
      getChangeAction("internet learn-about-self-sufficiency"),
      getEnterAction(),
      getChangeAction("todo"),
      getEnterAction(),
    ]);
    expect(selectInput(resultingState)).toEqual("");
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(
      `"<h2>Todo</h2><p>You are getting closer to your goal.</p><p>Here is what's left: </p><ul><li>Learn about self-sufficiency</li></ul>"`
    );
  });
});
