import { serialize } from ".";
import { getInitialState } from "../../../bridge";
import { getInitAction } from "../../store/actions";
import { compose } from "../../store/reducer";
import { getWorld } from "../global";

describe("Serialize", () => {
  it("should serialize", () => {
    const resultingState = compose(getInitialState())([getInitAction()]);
    const result = serialize(getWorld(resultingState.entities));
    expect(resultingState.entities).toEqual(result);
  });
});
