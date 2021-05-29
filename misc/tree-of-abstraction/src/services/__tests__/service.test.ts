import { cloneDeep } from "lodash";
import { Id, initialState, RootId } from "../../bridge";
import { sequence, Utils } from "../../utils/utils";
import { act } from "../main.service";
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

describe("App", () => {
  it("should act", () => {
    expect(act(initialState)(["click", "", ""])).toMatchInlineSnapshot(`
      Object {
        "itemSearchInput": "",
        "noteNodes": Object {},
        "noteSearchInput": "",
        "notes": Array [],
        "scope": "tree",
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
        "scope": "tree",
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
        "scope": "tree",
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
        "scope": "tree",
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

  it("should search", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["change", Id.SearchItemsInput, "te"],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "itemSearchInput": "te",
        "noteNodes": Object {},
        "noteSearchInput": "",
        "notes": Array [],
        "scope": "tree",
        "selectedNode": "item-element-root",
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

  it("should search", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["change", Id.SearchItemsInput, "tit"],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "itemSearchInput": "tit",
        "noteNodes": Object {},
        "noteSearchInput": "",
        "notes": Array [],
        "scope": "tree",
        "selectedNode": "item-element-root",
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
            "isHighlighted": true,
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
            "isHighlighted": true,
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
            "isHighlighted": true,
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

  it("should toggle scope", () => {
    expect(sequence([["keydown", Id.Keyboard, Shortcut.ToggleScope]]))
      .toMatchInlineSnapshot(`
      Object {
        "itemSearchInput": "",
        "noteNodes": Object {},
        "noteSearchInput": "",
        "notes": Array [],
        "scope": "notes",
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
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.ToggleScope],
        ["keydown", Id.Keyboard, Shortcut.ToggleScope],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "itemSearchInput": "",
        "noteNodes": Object {},
        "noteSearchInput": "",
        "notes": Array [],
        "scope": "tree",
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
    
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.ToggleScope],
        ["keydown", Id.Keyboard, Shortcut.ToggleScope],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "itemSearchInput": "",
        "noteNodes": Object {},
        "noteSearchInput": "",
        "notes": Array [],
        "scope": "tree",
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
            "notes": Array [],
            "parent": "",
            "title": "ROOT",
          },
        },
      }
    `);
  });
});
