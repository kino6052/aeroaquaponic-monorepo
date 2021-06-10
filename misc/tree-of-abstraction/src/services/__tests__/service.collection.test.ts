import { ERoute, IAppState, Id, initialState, sequence } from "../../bridge";
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

const collectionState: IAppState = {
  ...initialState,
  route: ERoute.Collection,
};

describe("Collection", () => {
  it("should correct perform empty sequence", () => {
    expect(genericSequence(act, collectionState)([])).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {},
          "selectedCollection": "",
        },
        "route": "Collection",
        "tree": Object {
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
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collection": Object {
          "collectionNodes": Object {
            "collection-element-0": Object {
              "id": "collection-element-0",
              "isEditable": false,
              "title": "Collection",
            },
            "collection-element-1": Object {
              "id": "collection-element-1",
              "isEditable": false,
              "title": "Collection",
            },
          },
          "selectedCollection": "",
        },
        "route": "Collection",
        "tree": Object {
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
    ).toMatchInlineSnapshot(``);
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
    ).toMatchInlineSnapshot(``);
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
    ).toMatchInlineSnapshot(``);
  });
});
