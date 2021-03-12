import { cloneDeep } from "lodash";
import { Id, initialState, RootId } from "../../bridge";
import { Utils } from "../../utils/utils";
import { act, sequence } from "../main.service";

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

describe("App", () => {
  it("should act", () => {
    expect(act(initialState)(["click", "", ""])).toMatchInlineSnapshot(`
      Object {
        "itemSearchInput": "",
        "noteNodes": Object {},
        "noteSearchInput": "",
        "notes": Array [],
        "selectedNode": "item-element-root",
        "selectedNote": "",
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
            "notes": Array [],
            "parent": "",
            "title": "ROOT",
          },
        },
      }
    `);
  });

  it("should act", () => {
    expect(act({ ...initialState, selectedNode: "" })(["click", "", ""]))
      .toMatchInlineSnapshot(`
      Object {
        "itemSearchInput": "",
        "noteNodes": Object {},
        "noteSearchInput": "",
        "notes": Array [],
        "selectedNode": "",
        "selectedNote": "",
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
            "notes": Array [],
            "parent": "",
            "title": "ROOT",
          },
        },
      }
    `);
  });

  it("should build tree", () => {
    const s = cloneDeep(initialState);
    s.treeNodes[RootId].children = ["test"];
    expect(act(s)(["click", "", ""])).toMatchInlineSnapshot(`
      Object {
        "itemSearchInput": "",
        "noteNodes": Object {},
        "noteSearchInput": "",
        "notes": Array [],
        "selectedNode": "item-element-root",
        "selectedNote": "",
        "tree": Array [
          "item-element-root",
          "test",
        ],
        "treeNodes": Object {
          "item-element-root": Object {
            "children": Array [
              "test",
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

  it("should click", () => {
    const s = cloneDeep(initialState);
    s.treeNodes[RootId].children = ["test"];
    expect(act(s)(["click", RootId, ""])).toMatchInlineSnapshot(`
      Object {
        "itemSearchInput": "",
        "noteNodes": Object {},
        "noteSearchInput": "",
        "notes": Array [],
        "selectedNode": "item-element-root",
        "selectedNote": "",
        "tree": Array [
          "item-element-root",
          "test",
        ],
        "treeNodes": Object {
          "item-element-root": Object {
            "children": Array [
              "test",
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
