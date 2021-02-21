import { initialState } from "../../bridge";
import { act } from "../service";

describe("App", () => {
  it("should act", () => {
    expect(act(initialState)(["click", "", ""])).toMatchSnapshot();
  });
});
