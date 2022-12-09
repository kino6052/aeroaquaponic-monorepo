import { Id } from "../interfaces";
import { getSelectAction } from "../store/actions";
import { compose } from "../store/reducer";
import {
  selectChildren,
  selectCurrent,
  selectHistory,
} from "../store/selectors";
import { initialState } from "../store/store";

describe.only("Game", () => {
  it("should give root option on start", () => {
    const resultingState = compose(initialState)([]);
    expect(selectCurrent(resultingState)).toEqual([Id.Root]);
    expect(selectHistory(resultingState)).toEqual([]);
  });

  it("should give next option when click on Root and add root to history", () => {
    const resultingState = compose(initialState)([getSelectAction(Id.Root)]);
    expect(selectCurrent(resultingState)).toEqual(
      selectChildren(resultingState, Id.Root)
    );
    expect(selectHistory(resultingState)).toEqual([Id.Root]);
  });

  it("should not let to select option not in current", () => {
    const resultingState = compose(initialState)([
      getSelectAction(Id.Root),
      getSelectAction(Id.UseCheckMountedHook),
    ]);
    expect(selectCurrent(resultingState)).toEqual(
      selectChildren(resultingState, Id.Root)
    );
    expect(selectHistory(resultingState)).toEqual([Id.Root]);
  });

  it("should give next option when click and add to history", () => {
    const resultingState = compose(initialState)([
      getSelectAction(Id.Root),
      getSelectAction(Id.ReactAPISolution),
    ]);
    expect(selectCurrent(resultingState)).toMatchInlineSnapshot(`
[
  "ReactLifeCycleSolution",
]
`);
    expect(selectHistory(resultingState)).toMatchInlineSnapshot(`
[
  "Root",
  "ReactAPISolution",
]
`);
  });

  it("should give next option when click and add to history", () => {
    const resultingState = compose(initialState)([
      getSelectAction(Id.Root),
      getSelectAction(Id.ReactAPISolution),
      getSelectAction(Id.ReactLifeCycleSolution),
    ]);
    expect(selectCurrent(resultingState)).toMatchInlineSnapshot(`
[
  "ReactLifeCycleCheckMountedSolution",
]
`);
    expect(selectHistory(resultingState)).toMatchInlineSnapshot(`
[
  "Root",
  "ReactAPISolution",
  "ReactLifeCycleSolution",
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
    expect(selectCurrent(resultingState)).toMatchInlineSnapshot(`
[
  "ReactLifeCycleSolution",
]
`);
    expect(selectHistory(resultingState)).toMatchInlineSnapshot(`
[
  "Root",
  "ReactAPISolution",
]
`);
  });
});
