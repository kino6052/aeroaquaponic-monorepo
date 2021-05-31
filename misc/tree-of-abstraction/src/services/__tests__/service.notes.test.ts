import { Id } from "../../bridge";
import { sequence, Utils } from "../../utils/utils";
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

describe("Notes", () => {
  it("should add note", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.ToggleScope],
        ["keydown", Id.Keyboard, Shortcut.Add],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "itemSearchInput": "",
        "noteNodes": Object {
          "note-element-0": Object {
            "description": "Description...",
            "id": "note-element-0",
            "isCollapsed": true,
            "isEditable": false,
            "parents": Array [
              "item-element-root",
            ],
            "title": "Title",
          },
        },
        "noteSearchInput": "",
        "notes": Array [
          "note-element-0",
        ],
        "scope": "notes",
        "selectedNode": "item-element-root",
        "selectedNote": "note-element-0",
        "tree": Array [
          "item-element-root",
        ],
        "treeNodes": Object {
          "item-element-root": Object {
            "children": Array [],
            "id": "item-element-root",
            "indent": 0,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "notes": Array [
              "note-element-0",
            ],
            "parent": "",
            "title": "ROOT",
          },
        },
      }
    `);
  });
});
