import { Id, initialState } from "../../bridge";
import { Utils } from "../../utils/utils";
import { getSequence, sequence } from "../main.service";
import { Shortcut } from "../shortcuts.service";

let counter = 0;

beforeAll(() => {
  jest.spyOn(Utils, "generateId").mockImplementation(() => {
    const prev = counter;
    counter += 1;
    return `${prev}`;
  });
});

beforeEach(() => {
  counter = 0;
});

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  jest.restoreAllMocks();
});

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe.skip("Notes", () => {
  it("should add note", () => {
    expect(
      sequence([["keydown", Id.Keyboard, Shortcut.AddNote]])
    ).toMatchInlineSnapshot("test");
  });

  it("should add note", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.AddNote],
      ])
    ).toMatchInlineSnapshot("test");
  });

  it("should add note", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.AddNote],
      ])
    ).toMatchInlineSnapshot("test");
  });

  it("should add note and edit", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.AddNote],
        ["keydown", Id.Keyboard, Shortcut.Edit],
      ])
    ).toMatchInlineSnapshot("test");
  });
});
