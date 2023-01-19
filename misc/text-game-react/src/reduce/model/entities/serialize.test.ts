import { serialize } from ".";
import { getInitialState } from "../../../bridge";
import { getWorld } from "../global";

describe("Serialize", () => {
  it("should serialize", () => {
    const result = serialize(getWorld(getInitialState().entities));
    expect(getInitialState().entities).toEqual(result);
  });
});
