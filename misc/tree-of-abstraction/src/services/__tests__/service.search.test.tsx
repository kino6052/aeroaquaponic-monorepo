import { Id } from "../../bridge";
import { Utils } from "../../utils/utils";
import { sequence } from "../main.service";

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

describe("Search", () => {
  it("should search", () => {
    expect(
      sequence([
        ["change", Id.AddItemInput, "one"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-0`, ""],
        ["change", Id.AddItemInput, "two"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-0`, ""],
        ["change", Id.AddItemInput, "three"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-2`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.SearchItemsInput, "o"],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "itemSearchInput": "o",
        "noteNodes": Object {},
        "noteSearchInput": "",
        "notes": Array [],
        "selectedNode": "item-element-3",
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
            "isHighlighted": true,
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
        ["change", Id.AddItemInput, "one"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-0`, ""],
        ["change", Id.AddItemInput, "two"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-0`, ""],
        ["change", Id.AddItemInput, "three"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-2`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.SearchItemsInput, "ur"],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "itemSearchInput": "ur",
        "noteNodes": Object {},
        "noteSearchInput": "",
        "notes": Array [],
        "selectedNode": "item-element-3",
        "selectedNote": "",
        "tree": Array [],
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

  it("should search", () => {
    expect(
      sequence([
        ["change", Id.AddItemInput, "one"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-0`, ""],
        ["change", Id.AddItemInput, "two"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-0`, ""],
        ["change", Id.AddItemInput, "three"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-2`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.SearchItemsInput, "TWO"],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "itemSearchInput": "TWO",
        "noteNodes": Object {},
        "noteSearchInput": "",
        "notes": Array [],
        "selectedNode": "item-element-3",
        "selectedNote": "",
        "tree": Array [],
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

  it("should search", () => {
    expect(
      sequence([
        ["change", Id.AddItemInput, "one"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-0`, ""],
        ["change", Id.AddItemInput, "two"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-0`, ""],
        ["change", Id.AddItemInput, "three"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-2`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.SearchItemsInput, ""],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "itemSearchInput": "",
        "noteNodes": Object {},
        "noteSearchInput": "",
        "notes": Array [],
        "selectedNode": "item-element-3",
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

  it("should search", () => {
    expect(
      sequence([
        ["change", Id.AddItemInput, "one"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-0`, ""],
        ["change", Id.AddItemInput, "two"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-0`, ""],
        ["change", Id.AddItemInput, "three"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-2`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-1`, ""],
        ["change", Id.SearchItemsInput, "four"],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "itemSearchInput": "four",
        "noteNodes": Object {},
        "noteSearchInput": "",
        "notes": Array [],
        "selectedNode": "item-element-1",
        "selectedNote": "",
        "tree": Array [],
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
