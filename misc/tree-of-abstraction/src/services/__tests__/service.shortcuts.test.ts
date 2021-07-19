import { Id, initialState, sequence, getSequence } from "../../bridge";
import { Utils } from "../../utils/utils";
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

describe("Undo/Redo", () => {
  it("should undo", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Undo],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {},
          "collectionSearchInput": "",
          "collections": Array [],
          "selectedCollection": "test",
        },
        "isLoading": false,
        "route": "Tree",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {},
          "noteSearchInput": "",
          "notes": Array [],
          "scope": "tree",
          "selectedNode": "item-element-root",
          "selectedNote": "",
          "title": "Tree",
          "tree": Array [
            "item-element-root",
            "item-element-0",
            "item-element-1",
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
            "item-element-root": Object {
              "children": Array [
                "item-element-0",
                "item-element-1",
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
        },
      }
    `);
  });

  it("should undo", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Undo],
        ["keydown", Id.Keyboard, Shortcut.Undo],
        ["keydown", Id.Keyboard, Shortcut.Undo],
        ["keydown", Id.Keyboard, Shortcut.Undo],
        ["keydown", Id.Keyboard, Shortcut.Undo],
        ["keydown", Id.Keyboard, Shortcut.Undo],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {},
          "collectionSearchInput": "",
          "collections": Array [],
          "selectedCollection": "test",
        },
        "isLoading": false,
        "route": "Tree",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {},
          "noteSearchInput": "",
          "notes": Array [],
          "scope": "tree",
          "selectedNode": "item-element-root",
          "selectedNote": "",
          "title": "Tree",
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
        },
      }
    `);
  });

  it("should undo and redo", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Undo],
        ["keydown", Id.Keyboard, Shortcut.Undo],
        ["keydown", Id.Keyboard, Shortcut.Undo],
        ["keydown", Id.Keyboard, Shortcut.Undo],
        ["keydown", Id.Keyboard, Shortcut.Undo],
        ["keydown", Id.Keyboard, Shortcut.Undo],
        ["keydown", Id.Keyboard, Shortcut.Redo],
        ["keydown", Id.Keyboard, Shortcut.Redo],
        ["keydown", Id.Keyboard, Shortcut.Redo],
        ["keydown", Id.Keyboard, Shortcut.Redo],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {},
          "collectionSearchInput": "",
          "collections": Array [],
          "selectedCollection": "test",
        },
        "isLoading": false,
        "route": "Tree",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {},
          "noteSearchInput": "",
          "notes": Array [],
          "scope": "tree",
          "selectedNode": "item-element-root",
          "selectedNote": "",
          "title": "Tree",
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
        },
      }
    `);
  });

  it("should undo", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Undo],
        ["keydown", Id.Keyboard, Shortcut.Undo],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {},
          "collectionSearchInput": "",
          "collections": Array [],
          "selectedCollection": "test",
        },
        "isLoading": false,
        "route": "Tree",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {},
          "noteSearchInput": "",
          "notes": Array [],
          "scope": "tree",
          "selectedNode": "item-element-root",
          "selectedNote": "",
          "title": "Tree",
          "tree": Array [
            "item-element-root",
            "item-element-0",
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
            "item-element-root": Object {
              "children": Array [
                "item-element-0",
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
        },
      }
    `);
  });

  it("should undo and redo", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Undo],
        ["keydown", Id.Keyboard, Shortcut.Undo],
        ["keydown", Id.Keyboard, Shortcut.Redo],
        ["keydown", Id.Keyboard, Shortcut.Redo],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {},
          "collectionSearchInput": "",
          "collections": Array [],
          "selectedCollection": "test",
        },
        "isLoading": false,
        "route": "Tree",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {},
          "noteSearchInput": "",
          "notes": Array [],
          "scope": "tree",
          "selectedNode": "item-element-root",
          "selectedNote": "",
          "title": "Tree",
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
        },
      }
    `);
  });

  it("should add and collapse", () => {
    expect(
      getSequence({
        ...initialState,
        tree: { ...initialState.tree, selectedNode: "" },
      })([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Up],
        ["keydown", Id.Keyboard, Shortcut.Up],
        ["keydown", Id.Keyboard, Shortcut.Up],
        ["keydown", Id.Keyboard, Shortcut.Collapse],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {},
          "collectionSearchInput": "",
          "collections": Array [],
          "selectedCollection": "test",
        },
        "isLoading": false,
        "route": "Tree",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {},
          "noteSearchInput": "",
          "notes": Array [],
          "scope": "tree",
          "selectedNode": "item-element-root",
          "selectedNote": "",
          "title": "Tree",
          "tree": Array [
            "item-element-root",
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
              "isCollapsed": true,
              "isEditable": false,
              "isHighlighted": false,
              "notes": Array [],
              "parent": "",
              "title": "ROOT",
            },
          },
        },
      }
    `);
  });

  it("should change parent", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Up],
        ["keydown", Id.Keyboard, Shortcut.Up],
        ["keydown", Id.Keyboard, Shortcut.Up],
        ["click", `${Id.Item}-3`, "10"],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {},
          "collectionSearchInput": "",
          "collections": Array [],
          "selectedCollection": "test",
        },
        "isLoading": false,
        "route": "Tree",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {},
          "noteSearchInput": "",
          "notes": Array [],
          "scope": "tree",
          "selectedNode": "item-element-3",
          "selectedNote": "",
          "title": "Tree",
          "tree": Array [
            "item-element-root",
            "item-element-0",
            "item-element-2",
            "item-element-3",
            "item-element-1",
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
              "indent": 2,
              "isCollapsed": false,
              "isEditable": false,
              "isHighlighted": false,
              "notes": Array [],
              "parent": "item-element-3",
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
            "item-element-3": Object {
              "children": Array [
                "item-element-1",
              ],
              "id": "item-element-3",
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
                "item-element-2",
                "item-element-3",
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
        },
      }
    `);
  });

  it("should not change parent if descendant of self", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["click", `${Id.Item}-0`, "10"],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {},
          "collectionSearchInput": "",
          "collections": Array [],
          "selectedCollection": "test",
        },
        "isLoading": false,
        "route": "Tree",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {},
          "noteSearchInput": "",
          "notes": Array [],
          "scope": "tree",
          "selectedNode": "item-element-root",
          "selectedNote": "",
          "title": "Tree",
          "tree": Array [
            "item-element-root",
            "item-element-0",
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
            "item-element-root": Object {
              "children": Array [
                "item-element-0",
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
        },
      }
    `);
  });

  it("should change parent", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["click", `${Id.Item}-2`, "10"],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {},
          "collectionSearchInput": "",
          "collections": Array [],
          "selectedCollection": "test",
        },
        "isLoading": false,
        "route": "Tree",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {},
          "noteSearchInput": "",
          "notes": Array [],
          "scope": "tree",
          "selectedNode": "item-element-2",
          "selectedNote": "",
          "title": "Tree",
          "tree": Array [
            "item-element-root",
            "item-element-0",
            "item-element-1",
            "item-element-2",
            "item-element-3",
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
              "children": Array [
                "item-element-3",
              ],
              "id": "item-element-2",
              "indent": 1,
              "isCollapsed": false,
              "isEditable": false,
              "isHighlighted": false,
              "notes": Array [],
              "parent": "item-element-root",
              "title": "title",
            },
            "item-element-3": Object {
              "children": Array [],
              "id": "item-element-3",
              "indent": 2,
              "isCollapsed": false,
              "isEditable": false,
              "isHighlighted": false,
              "notes": Array [],
              "parent": "item-element-2",
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
        },
      }
    `);
  });

  it("should change parent", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Up],
        ["click", `${Id.Item}-0`, "10"],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {},
          "collectionSearchInput": "",
          "collections": Array [],
          "selectedCollection": "test",
        },
        "isLoading": false,
        "route": "Tree",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {},
          "noteSearchInput": "",
          "notes": Array [],
          "scope": "tree",
          "selectedNode": "item-element-0",
          "selectedNote": "",
          "title": "Tree",
          "tree": Array [
            "item-element-root",
            "item-element-0",
            "item-element-1",
            "item-element-3",
            "item-element-4",
            "item-element-2",
          ],
          "treeNodes": Object {
            "item-element-0": Object {
              "children": Array [
                "item-element-1",
                "item-element-2",
              ],
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
              "children": Array [
                "item-element-3",
              ],
              "id": "item-element-1",
              "indent": 2,
              "isCollapsed": false,
              "isEditable": false,
              "isHighlighted": false,
              "notes": Array [],
              "parent": "item-element-0",
              "title": "title",
            },
            "item-element-2": Object {
              "children": Array [],
              "id": "item-element-2",
              "indent": 2,
              "isCollapsed": false,
              "isEditable": false,
              "isHighlighted": false,
              "notes": Array [],
              "parent": "item-element-0",
              "title": "title",
            },
            "item-element-3": Object {
              "children": Array [
                "item-element-4",
              ],
              "id": "item-element-3",
              "indent": 3,
              "isCollapsed": false,
              "isEditable": false,
              "isHighlighted": false,
              "notes": Array [],
              "parent": "item-element-1",
              "title": "title",
            },
            "item-element-4": Object {
              "children": Array [],
              "id": "item-element-4",
              "indent": 4,
              "isCollapsed": false,
              "isEditable": false,
              "isHighlighted": false,
              "notes": Array [],
              "parent": "item-element-3",
              "title": "title",
            },
            "item-element-root": Object {
              "children": Array [
                "item-element-0",
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
        },
      }
    `);
  });
});

describe("Move Up and Down", () => {
  it("should move up and down", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.MoveUp],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {},
          "collectionSearchInput": "",
          "collections": Array [],
          "selectedCollection": "test",
        },
        "isLoading": false,
        "route": "Tree",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {},
          "noteSearchInput": "",
          "notes": Array [],
          "scope": "tree",
          "selectedNode": "item-element-2",
          "selectedNote": "",
          "title": "Tree",
          "tree": Array [
            "item-element-root",
            "item-element-0",
            "item-element-2",
            "item-element-1",
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
                "item-element-2",
                "item-element-1",
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
        },
      }
    `);
  });

  it("should move up to the limit", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.MoveUp],
        ["keydown", Id.Keyboard, Shortcut.MoveUp],
        ["keydown", Id.Keyboard, Shortcut.MoveUp],
        ["keydown", Id.Keyboard, Shortcut.MoveUp],
        ["keydown", Id.Keyboard, Shortcut.MoveUp],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {},
          "collectionSearchInput": "",
          "collections": Array [],
          "selectedCollection": "test",
        },
        "isLoading": false,
        "route": "Tree",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {},
          "noteSearchInput": "",
          "notes": Array [],
          "scope": "tree",
          "selectedNode": "item-element-2",
          "selectedNote": "",
          "title": "Tree",
          "tree": Array [
            "item-element-root",
            "item-element-2",
            "item-element-0",
            "item-element-1",
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
                "item-element-2",
                "item-element-0",
                "item-element-1",
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
        },
      }
    `);
  });

  it("should move up and down", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.MoveUp],
        ["keydown", Id.Keyboard, Shortcut.MoveDown],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {},
          "collectionSearchInput": "",
          "collections": Array [],
          "selectedCollection": "test",
        },
        "isLoading": false,
        "route": "Tree",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {},
          "noteSearchInput": "",
          "notes": Array [],
          "scope": "tree",
          "selectedNode": "item-element-2",
          "selectedNote": "",
          "title": "Tree",
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
        },
      }
    `);
  });

  it("should move down to the limit", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.MoveDown],
        ["keydown", Id.Keyboard, Shortcut.MoveDown],
        ["keydown", Id.Keyboard, Shortcut.MoveDown],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {},
          "collectionSearchInput": "",
          "collections": Array [],
          "selectedCollection": "test",
        },
        "isLoading": false,
        "route": "Tree",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {},
          "noteSearchInput": "",
          "notes": Array [],
          "scope": "tree",
          "selectedNode": "item-element-0",
          "selectedNote": "",
          "title": "Tree",
          "tree": Array [
            "item-element-root",
            "item-element-1",
            "item-element-2",
            "item-element-0",
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
                "item-element-1",
                "item-element-2",
                "item-element-0",
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
        },
      }
    `);
  });

  it("should not move down when no selected", () => {
    const state = sequence([
      ["keydown", Id.Keyboard, Shortcut.Add],
      ["keydown", Id.Keyboard, Shortcut.Add],
      ["keydown", Id.Keyboard, Shortcut.Add],
    ]);
    expect(
      getSequence({ ...state, tree: { ...state.tree, selectedNode: "" } })([
        ["keydown", Id.Keyboard, Shortcut.MoveDown],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {},
          "collectionSearchInput": "",
          "collections": Array [],
          "selectedCollection": "test",
        },
        "isLoading": false,
        "route": "Tree",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {},
          "noteSearchInput": "",
          "notes": Array [],
          "scope": "tree",
          "selectedNode": "",
          "selectedNote": "",
          "title": "Tree",
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
        },
      }
    `);
  });

  it("should not move up when no selected", () => {
    const state = sequence([
      ["keydown", Id.Keyboard, Shortcut.Add],
      ["keydown", Id.Keyboard, Shortcut.Add],
      ["keydown", Id.Keyboard, Shortcut.Add],
    ]);
    expect(
      getSequence({ ...state, tree: { ...state.tree, selectedNode: "" } })([
        ["keydown", Id.Keyboard, Shortcut.MoveUp],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {},
          "collectionSearchInput": "",
          "collections": Array [],
          "selectedCollection": "test",
        },
        "isLoading": false,
        "route": "Tree",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {},
          "noteSearchInput": "",
          "notes": Array [],
          "scope": "tree",
          "selectedNode": "",
          "selectedNote": "",
          "title": "Tree",
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
        },
      }
    `);
  });

  it("should not move down when root selected", () => {
    const state = sequence([["keydown", Id.Keyboard, Shortcut.MoveDown]]);
    expect(state).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {},
          "collectionSearchInput": "",
          "collections": Array [],
          "selectedCollection": "test",
        },
        "isLoading": false,
        "route": "Tree",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {},
          "noteSearchInput": "",
          "notes": Array [],
          "scope": "tree",
          "selectedNode": "item-element-root",
          "selectedNote": "",
          "title": "Tree",
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
        },
      }
    `);
  });

  it("should not move up when root selected", () => {
    const state = sequence([["keydown", Id.Keyboard, Shortcut.MoveUp]]);
    expect(state).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {},
          "collectionSearchInput": "",
          "collections": Array [],
          "selectedCollection": "test",
        },
        "isLoading": false,
        "route": "Tree",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {},
          "noteSearchInput": "",
          "notes": Array [],
          "scope": "tree",
          "selectedNode": "item-element-root",
          "selectedNote": "",
          "title": "Tree",
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
        },
      }
    `);
  });
});

describe("Remote", () => {
  it("should remove", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Remove],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {},
          "collectionSearchInput": "",
          "collections": Array [],
          "selectedCollection": "test",
        },
        "isLoading": false,
        "route": "Tree",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {},
          "noteSearchInput": "",
          "notes": Array [],
          "scope": "tree",
          "selectedNode": "item-element-root",
          "selectedNote": "",
          "title": "Tree",
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
        },
      }
    `);
  });

  it("should remove", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Remove],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {},
          "collectionSearchInput": "",
          "collections": Array [],
          "selectedCollection": "test",
        },
        "isLoading": false,
        "route": "Tree",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {},
          "noteSearchInput": "",
          "notes": Array [],
          "scope": "tree",
          "selectedNode": "item-element-0",
          "selectedNote": "",
          "title": "Tree",
          "tree": Array [
            "item-element-root",
            "item-element-0",
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
              "parent": "",
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
        },
      }
    `);
  });
});

describe("Remote", () => {
  it("should remove", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Remove],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {},
          "collectionSearchInput": "",
          "collections": Array [],
          "selectedCollection": "test",
        },
        "isLoading": false,
        "route": "Tree",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {},
          "noteSearchInput": "",
          "notes": Array [],
          "scope": "tree",
          "selectedNode": "item-element-root",
          "selectedNote": "",
          "title": "Tree",
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
        },
      }
    `);
  });

  it("should remove", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Remove],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {},
          "collectionSearchInput": "",
          "collections": Array [],
          "selectedCollection": "test",
        },
        "isLoading": false,
        "route": "Tree",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {},
          "noteSearchInput": "",
          "notes": Array [],
          "scope": "tree",
          "selectedNode": "item-element-root",
          "selectedNote": "",
          "title": "Tree",
          "tree": Array [
            "item-element-root",
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
              "parent": "",
              "title": "title",
            },
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
        },
      }
    `);
  });
});

describe("Edit", () => {
  it("should edit", () => {
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
        "collection": Object {
          "collectionNodes": Object {},
          "collectionSearchInput": "",
          "collections": Array [],
          "selectedCollection": "test",
        },
        "isLoading": false,
        "route": "Tree",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {},
          "noteSearchInput": "",
          "notes": Array [],
          "scope": "tree",
          "selectedNode": "item-element-0",
          "selectedNote": "",
          "title": "Tree",
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
        },
      }
    `);
  });

  it("should edit", () => {
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
        "collection": Object {
          "collectionNodes": Object {},
          "collectionSearchInput": "",
          "collections": Array [],
          "selectedCollection": "test",
        },
        "isLoading": false,
        "route": "Tree",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {},
          "noteSearchInput": "",
          "notes": Array [],
          "scope": "tree",
          "selectedNode": "item-element-0",
          "selectedNote": "",
          "title": "Tree",
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
        },
      }
    `);
  });

  it("should edit", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Edit],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Edit],
        ["change", `${Id.Item}-0`, "test"],
        ["change", Id.SearchItemsInput, "test"],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {},
          "collectionSearchInput": "",
          "collections": Array [],
          "selectedCollection": "test",
        },
        "isLoading": false,
        "route": "Tree",
        "tree": Object {
          "itemSearchInput": "test",
          "noteNodes": Object {},
          "noteSearchInput": "",
          "notes": Array [],
          "scope": "tree",
          "selectedNode": "item-element-1",
          "selectedNote": "",
          "title": "Tree",
          "tree": Array [
            "item-element-root",
            "item-element-0",
            "item-element-1",
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
              "title": "test",
            },
            "item-element-1": Object {
              "children": Array [],
              "id": "item-element-1",
              "indent": 1,
              "isCollapsed": false,
              "isEditable": true,
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
        },
      }
    `);
  });
});
