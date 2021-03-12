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

describe("Remove", () => {
  it("should remove node", () => {
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
        ["click", `${Id.RemoveItemButton}-3`, ""],
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

  it("should remove node", () => {
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
        ["click", `${Id.RemoveItemButton}-${RootId}`, ""],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "itemSearchInput": "",
        "noteNodes": Object {},
        "noteSearchInput": "",
        "notes": Array [],
        "selectedNode": "remove-item-button-item-element-root",
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
});
