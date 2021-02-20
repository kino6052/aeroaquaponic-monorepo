import { act, Id, IInput, initialState } from "./new";

const sequence = (inputs: IInput[]): typeof initialState =>
  inputs.reduce((acc, input) => act(acc)(input), initialState);

describe("Formatting", () => {
  it("should format phone", () => {
    expect(act(initialState)(["change", Id.Input01, ""])).toMatchSnapshot();
    expect(act(initialState)(["change", Id.Input01, "1"])).toMatchSnapshot();
    expect(act(initialState)(["change", Id.Input01, "12"])).toMatchSnapshot();
    expect(act(initialState)(["change", Id.Input01, "123"])).toMatchSnapshot();
    expect(act(initialState)(["change", Id.Input01, "1234"])).toMatchSnapshot();
    expect(
      act(initialState)(["change", Id.Input01, "12345"])
    ).toMatchSnapshot();
    expect(
      act(initialState)(["change", Id.Input01, "123456"])
    ).toMatchSnapshot();
    expect(
      act(initialState)(["change", Id.Input01, "1234567"])
    ).toMatchSnapshot();
    expect(
      act(initialState)(["change", Id.Input01, "12345678"])
    ).toMatchSnapshot();
    expect(
      act(initialState)(["change", Id.Input01, "123456789"])
    ).toMatchSnapshot();
    expect(
      act(initialState)(["change", Id.Input01, "1234567890"])
    ).toMatchSnapshot();
  });
});

describe("Validation", () => {
  it("should validate inputs on submit", () => {
    expect(
      sequence([
        ["change", Id.Input01, "1234567890"],
        ["click", Id.Submit, ""],
      ])
    ).toMatchSnapshot();
    expect(
      sequence([
        ["change", Id.Input01, "12345"],
        ["click", Id.Submit, ""],
      ])
    ).toMatchSnapshot();
    expect(
      sequence([
        ["change", Id.Input01, "12345"],
        ["change", Id.Input02, "12345"],
        ["click", Id.Submit, ""],
      ])
    ).toMatchSnapshot();
    expect(
      sequence([
        ["change", Id.Input01, "12345"],
        ["change", Id.Input02, "12345"],
        ["click", Id.Submit, ""],
      ])
    ).toMatchSnapshot();
    expect(
      sequence([
        ["change", Id.Input01, "12345"],
        ["change", Id.Input02, "12345"],
        ["click", Id.Submit, ""],
      ])
    ).toMatchSnapshot();
    expect(
      sequence([
        ["change", Id.Input01, "1234567890"],
        ["change", Id.Input02, "12345"],
        ["change", Id.Input03, "12345"],
        ["click", Id.Submit, ""],
      ])
    ).toMatchSnapshot();
    expect(
      sequence([
        ["change", Id.Input01, "1234567890"],
        ["change", Id.Input02, "12345"],
        ["change", Id.Input03, "1"],
        ["click", Id.Submit, ""],
      ])
    ).toMatchSnapshot();
    expect(
      sequence([
        ["change", Id.Input01, ""],
        ["click", Id.Submit, ""],
      ])
    ).toMatchSnapshot();
  });
});
