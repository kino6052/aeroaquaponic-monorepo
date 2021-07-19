import {
  ERoute,
  IAppState,
  Id,
  initialLoadingState,
  initialState,
} from "../../bridge";
import { Utils } from "../../utils/utils";
import { act } from "../main.service";

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
  it("should switch loading", () => {
    expect(act(initialLoadingState)(["click", "", ""])).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {},
          "collectionSearchInput": "",
          "selectedCollection": undefined,
        },
        "isLoading": false,
        "route": "Collection",
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

  it("should update when collection is loaded", () => {
    expect(
      act({ ...initialState, route: ERoute.Tree })([
        "io",
        Id.State,
        JSON.stringify(initialState),
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {},
          "collectionSearchInput": "",
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

  it("should update when tree is loaded", () => {
    expect(
      act({ ...initialState, route: ERoute.Collection })([
        "io",
        Id.State,
        JSON.stringify({
          ...initialState,
        } as IAppState),
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {
            "collection": Object {
              "id": "collection",
              "isEditable": false,
              "isHighlighted": false,
              "title": undefined,
            },
            "isLoading": Object {
              "id": "isLoading",
              "isEditable": false,
              "isHighlighted": false,
              "title": undefined,
            },
            "route": Object {
              "id": "route",
              "isEditable": false,
              "isHighlighted": false,
              "title": undefined,
            },
            "tree": Object {
              "id": "tree",
              "isEditable": false,
              "isHighlighted": false,
              "title": "Tree",
            },
          },
          "collectionSearchInput": "",
          "selectedCollection": undefined,
        },
        "isLoading": false,
        "route": "Collection",
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
