import { Id, initialState } from "../../bridge";
import { getRestoreAction, getSelectAction } from "../store/actions";
import { compose } from "../store/reducer";
import { selectCurrent, selectHistory, selectNext } from "../store/selectors";

describe("Decision Tree", () => {
  it("should restore state from query string", () => {
    const resultingState = compose(initialState)([
      getRestoreAction("?one&two&three"),
    ]);
    expect(selectHistory(resultingState)).toMatchInlineSnapshot(`
[
  "one",
  "two",
]
`);
    expect(selectCurrent(resultingState)).toMatchInlineSnapshot(`"three"`);
    expect(selectNext(resultingState)).toMatchInlineSnapshot(`[]`);
  });

  it("should restore state from query string", () => {
    const resultingState = compose(initialState)([
      getRestoreAction("one&two&three"),
    ]);
    expect(selectHistory(resultingState)).toMatchInlineSnapshot(`
[
  "one",
  "two",
]
`);
    expect(selectCurrent(resultingState)).toMatchInlineSnapshot(`"three"`);
    expect(selectNext(resultingState)).toMatchInlineSnapshot(`[]`);
  });

  it("should restore state from query string", () => {
    const resultingState = compose(initialState)([getRestoreAction("")]);
    expect(selectHistory(resultingState)).toMatchInlineSnapshot(`[]`);
    expect(selectCurrent(resultingState)).toMatchInlineSnapshot(`undefined`);
    expect(selectNext(resultingState)).toMatchInlineSnapshot(`
[
  "Root",
]
`);
  });

  it("should restore state from query string", () => {
    const resultingState = compose(initialState)([getRestoreAction("?root")]);
    expect(selectHistory(resultingState)).toMatchInlineSnapshot(`[]`);
    expect(selectCurrent(resultingState)).toMatchInlineSnapshot(`"root"`);
    expect(selectNext(resultingState)).toMatchInlineSnapshot(`[]`);
  });
});

describe("Decision Tree", () => {
  it("should give root option on start", () => {
    const resultingState = compose(initialState)([]);
    expect(selectNext(resultingState)).toMatchInlineSnapshot(`
[
  "Root",
]
`);
    expect(selectCurrent(resultingState)).toMatchInlineSnapshot(`undefined`);
    expect(selectHistory(resultingState)).toMatchInlineSnapshot(`[]`);
  });

  it("should give next option when click on Root and add root to history", () => {
    const resultingState = compose(initialState)([getSelectAction(Id.Root)]);
    expect(selectNext(resultingState)).toMatchInlineSnapshot(`
[
  "ReactAPISolution",
  "BrowserAPISolution",
]
`);
    expect(selectHistory(resultingState)).toMatchInlineSnapshot(`[]`);
  });

  it("should not let to select option not in current", () => {
    const resultingState = compose(initialState)([
      getSelectAction(Id.Root),
      getSelectAction(Id.UseCheckMountedHook),
    ]);
    expect(selectNext(resultingState)).toMatchInlineSnapshot(`
[
  "ReactAPISolution",
  "BrowserAPISolution",
]
`);
    expect(selectCurrent(resultingState)).toMatchInlineSnapshot(`"Root"`);
    expect(selectHistory(resultingState)).toMatchInlineSnapshot(`[]`);
  });

  it("should give next option when click and add to history", () => {
    const resultingState = compose(initialState)([
      getSelectAction(Id.Root),
      getSelectAction(Id.ReactAPISolution),
    ]);

    expect(selectHistory(resultingState)).toMatchInlineSnapshot(`
[
  "Root",
]
`);
    expect(selectCurrent(resultingState)).toMatchInlineSnapshot(
      `"ReactAPISolution"`
    );
    expect(selectNext(resultingState)).toMatchInlineSnapshot(`
[
  "ReactLifeCycleSolution",
]
`);
  });

  it("should give next option when click and add to history", () => {
    const resultingState = compose(initialState)([
      getSelectAction(Id.Root),
      getSelectAction(Id.ReactAPISolution),
      getSelectAction(Id.ReactLifeCycleSolution),
    ]);

    expect(selectHistory(resultingState)).toMatchInlineSnapshot(`
[
  "Root",
  "ReactAPISolution",
]
`);
    expect(selectCurrent(resultingState)).toMatchInlineSnapshot(
      `"ReactLifeCycleSolution"`
    );
    expect(selectNext(resultingState)).toMatchInlineSnapshot(`
    [
      "ReactLifeCycleCheckMountedSolution",
    ]
    `);
  });

  it("should be able to go back in history", () => {
    const resultingState = compose(initialState)([
      getSelectAction(Id.Root),
      getSelectAction(Id.ReactAPISolution),
      getSelectAction(Id.ReactLifeCycleSolution),
      getSelectAction(Id.ReactAPISolution),
    ]);
    expect(selectHistory(resultingState)).toMatchInlineSnapshot(`
[
  "Root",
]
`);
    expect(selectCurrent(resultingState)).toMatchInlineSnapshot(
      `"ReactAPISolution"`
    );
    expect(selectNext(resultingState)).toMatchInlineSnapshot(`
[
  "ReactLifeCycleSolution",
]
`);
  });
});
