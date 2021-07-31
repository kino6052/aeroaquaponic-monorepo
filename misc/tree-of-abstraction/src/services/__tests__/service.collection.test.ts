import {
  ERoute,
  IAppState,
  Id,
  initialCollectionState,
  initialState,
  sequence,
} from "../../bridge";
import { genericSequence, Utils } from "../../utils/utils";
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

const collectionState = initialCollectionState;

describe("Collection", () => {
  it("should correct perform empty sequence", () => {
    expect(genericSequence(act, collectionState)([])).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {},
          "collectionSearchInput": "",
          "collections": Array [],
          "selectedCollection": undefined,
        },
        "isLoading": false,
        "route": "Collection",
        "tree": Object {
          "isMemory": false,
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

  it("should add collection", () => {
    expect(
      genericSequence(
        act,
        collectionState
      )([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.ToggleScope], // Note: To increase coverage
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {
            "collection-element-0": Object {
              "id": "collection-element-0",
              "isEditable": false,
              "isHighlighted": false,
              "title": "Collection",
            },
            "collection-element-1": Object {
              "id": "collection-element-1",
              "isEditable": false,
              "isHighlighted": false,
              "title": "Collection",
            },
          },
          "collectionSearchInput": "",
          "collections": Array [
            "collection-element-0",
            "collection-element-1",
          ],
          "selectedCollection": undefined,
        },
        "isLoading": false,
        "route": "Collection",
        "tree": Object {
          "isMemory": false,
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

  it("should move down", () => {
    expect(
      genericSequence(
        act,
        collectionState
      )([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {
            "collection-element-0": Object {
              "id": "collection-element-0",
              "isEditable": false,
              "isHighlighted": true,
              "title": "Collection",
            },
            "collection-element-1": Object {
              "id": "collection-element-1",
              "isEditable": false,
              "isHighlighted": false,
              "title": "Collection",
            },
          },
          "collectionSearchInput": "",
          "collections": Array [
            "collection-element-0",
            "collection-element-1",
          ],
          "selectedCollection": undefined,
        },
        "isLoading": false,
        "route": "Collection",
        "tree": Object {
          "isMemory": false,
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

  it("should move up", () => {
    expect(
      genericSequence(
        act,
        collectionState
      )([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Up],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {
            "collection-element-0": Object {
              "id": "collection-element-0",
              "isEditable": false,
              "isHighlighted": true,
              "title": "Collection",
            },
            "collection-element-1": Object {
              "id": "collection-element-1",
              "isEditable": false,
              "isHighlighted": false,
              "title": "Collection",
            },
          },
          "collectionSearchInput": "",
          "collections": Array [
            "collection-element-0",
            "collection-element-1",
          ],
          "selectedCollection": undefined,
        },
        "isLoading": false,
        "route": "Collection",
        "tree": Object {
          "isMemory": false,
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

  it("should select", () => {
    expect(
      genericSequence(
        act,
        collectionState
      )([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Enter],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {
            "collection-element-0": Object {
              "id": "collection-element-0",
              "isEditable": false,
              "isHighlighted": true,
              "title": "Collection",
            },
            "collection-element-1": Object {
              "id": "collection-element-1",
              "isEditable": false,
              "isHighlighted": false,
              "title": "Collection",
            },
          },
          "collectionSearchInput": "",
          "collections": Array [
            "collection-element-0",
            "collection-element-1",
          ],
          "selectedCollection": "collection-element-0",
        },
        "isLoading": true,
        "route": "Tree",
        "tree": Object {
          "isMemory": false,
          "itemSearchInput": "",
          "noteNodes": Object {},
          "noteSearchInput": "",
          "notes": Array [],
          "scope": "tree",
          "selectedNode": "item-element-root",
          "selectedNote": "",
          "title": "Collection",
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

  it("should edit", () => {
    expect(
      genericSequence(
        act,
        collectionState
      )([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Edit],
        ["change", `${Id.Collection}-0`, "123"],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {
            "collection-element-0": Object {
              "id": "collection-element-0",
              "isEditable": true,
              "isHighlighted": true,
              "title": "123",
            },
            "collection-element-1": Object {
              "id": "collection-element-1",
              "isEditable": false,
              "isHighlighted": false,
              "title": "Collection",
            },
          },
          "collectionSearchInput": "",
          "collections": Array [
            "collection-element-0",
            "collection-element-1",
          ],
          "selectedCollection": undefined,
        },
        "isLoading": false,
        "route": "Collection",
        "tree": Object {
          "isMemory": false,
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

  it("should search", () => {
    expect(
      genericSequence(
        act,
        collectionState
      )([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Edit],
        ["change", `${Id.Collection}-0`, "123"],
        ["change", Id.SearchCollectionsInput, "12"],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {
            "collection-element-0": Object {
              "id": "collection-element-0",
              "isEditable": true,
              "isHighlighted": true,
              "title": "123",
            },
            "collection-element-1": Object {
              "id": "collection-element-1",
              "isEditable": false,
              "isHighlighted": false,
              "title": "Collection",
            },
          },
          "collectionSearchInput": "12",
          "collections": Array [
            "collection-element-0",
            "collection-element-1",
          ],
          "selectedCollection": undefined,
        },
        "isLoading": false,
        "route": "Collection",
        "tree": Object {
          "isMemory": false,
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

  it("should search", () => {
    expect(
      genericSequence(
        act,
        collectionState
      )([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Edit],
        ["change", `${Id.Collection}-0`, "1234"],
        ["change", Id.SearchCollectionsInput, "1234"],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {
            "collection-element-0": Object {
              "id": "collection-element-0",
              "isEditable": true,
              "isHighlighted": true,
              "title": "1234",
            },
            "collection-element-1": Object {
              "id": "collection-element-1",
              "isEditable": false,
              "isHighlighted": false,
              "title": "Collection",
            },
          },
          "collectionSearchInput": "1234",
          "collections": Array [
            "collection-element-0",
          ],
          "selectedCollection": undefined,
        },
        "isLoading": false,
        "route": "Collection",
        "tree": Object {
          "isMemory": false,
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
