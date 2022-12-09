import { Id } from "../interfaces";
import { getSelectAction } from "../store/actions";
import { compose } from "../store/reducer";
import { selectCurrent, selectHistory, selectNext } from "../store/selectors";
import { initialState } from "../store/store";

describe.only("Game", () => {
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
    expect(selectNext(resultingState)).toMatchInlineSnapshot(
      `"ReactAPISolution"`
    );
  });
});
