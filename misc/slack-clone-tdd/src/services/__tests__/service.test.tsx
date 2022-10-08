import { act } from "../service";

describe("App", () => {
  it("should act", () => {
    expect(act({})(["click", "", ""])).toMatchSnapshot();
  });
});
