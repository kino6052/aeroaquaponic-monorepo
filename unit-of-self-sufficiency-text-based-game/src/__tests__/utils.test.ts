import { templateParser } from "../utils";

describe("Utils", () => {
  it("should replace strings", () => {
    expect(
      templateParser("from {{one}} to {{two}}", { one: "1", two: "2" })
    ).toEqual("from 1 to 2");
  });
});
