import { serialize } from ".";
import { initialState } from "../../../bridge";
import { getWorld } from "../global";

describe("Serialize", () => {
  it("should serialize", () => {
    const result = serialize(getWorld(initialState.entities));
    expect(initialState.entities).toEqual(result);
  });
});
