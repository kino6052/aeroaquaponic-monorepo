import { Id } from "../../bridge";
import { Utils } from "../../utils/utils";
import { sequence } from "../main.service";
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

describe("Other", () => {
  it("should perform shortcuts", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Edit],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "itemSearchInput": "",
        "noteNodes": Object {},
        "noteSearchInput": "",
        "notes": Array [],
        "selectedNode": "item-element-0",
        "selectedNote": "",
        "tree": Array [
          "item-element-root",
          "item-element-0",
          "item-element-1",
          "item-element-2",
        ],
        "treeNodes": Object {
          "item-element-0": Object {
            "children": Array [],
            "id": "item-element-0",
            "indent": 1,
            "isCollapsed": false,
            "isEditable": true,
            "isHighlighted": false,
            "notes": Array [],
            "parent": "item-element-root",
            "title": "title",
          },
          "item-element-1": Object {
            "children": Array [],
            "id": "item-element-1",
            "indent": 1,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "notes": Array [],
            "parent": "item-element-root",
            "title": "title",
          },
          "item-element-2": Object {
            "children": Array [],
            "id": "item-element-2",
            "indent": 1,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "notes": Array [],
            "parent": "item-element-root",
            "title": "title",
          },
          "item-element-root": Object {
            "children": Array [
              "item-element-0",
              "item-element-1",
              "item-element-2",
            ],
            "id": "item-element-root",
            "indent": 0,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "notes": Array [],
            "parent": "",
            "title": "ROOT",
          },
        },
      }
    `);
  });

  it("should perform shortcuts", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Edit],
        ["keydown", Id.Keyboard, Shortcut.Enter],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "itemSearchInput": "",
        "noteNodes": Object {},
        "noteSearchInput": "",
        "notes": Array [],
        "selectedNode": "item-element-0",
        "selectedNote": "",
        "tree": Array [
          "item-element-root",
          "item-element-0",
          "item-element-1",
          "item-element-2",
        ],
        "treeNodes": Object {
          "item-element-0": Object {
            "children": Array [],
            "id": "item-element-0",
            "indent": 1,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "notes": Array [],
            "parent": "item-element-root",
            "title": "title",
          },
          "item-element-1": Object {
            "children": Array [],
            "id": "item-element-1",
            "indent": 1,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "notes": Array [],
            "parent": "item-element-root",
            "title": "title",
          },
          "item-element-2": Object {
            "children": Array [],
            "id": "item-element-2",
            "indent": 1,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "notes": Array [],
            "parent": "item-element-root",
            "title": "title",
          },
          "item-element-root": Object {
            "children": Array [
              "item-element-0",
              "item-element-1",
              "item-element-2",
            ],
            "id": "item-element-root",
            "indent": 0,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "notes": Array [],
            "parent": "",
            "title": "ROOT",
          },
        },
      }
    `);
  });
});
