import { Id, initialState } from "../../bridge";
import { Utils } from "../../utils/utils";
import { act, sequence } from "../service";

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
        "addItemInput": "",
        "itemSearchInput": "",
        "selectedNode": "",
        "tree": Array [
          Object {
            "children": Array [],
            "id": "root",
            "indent": 0,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "",
            "title": "ROOT",
          },
        ],
        "treeNodes": Object {
          "root": Object {
            "children": Array [],
            "id": "root",
            "indent": 0,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "",
            "title": "ROOT",
          },
        },
      }
    `);
  });
});

describe("Tree", () => {
  it("should add node", () => {
    expect(
      sequence([
        ["change", Id.AddItemInput, "one"],
        ["click", Id.AddItemButton, ""],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "addItemInput": "one",
        "itemSearchInput": "",
        "selectedNode": "",
        "tree": Array [
          Object {
            "children": Array [],
            "id": "item-0",
            "indent": 1,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "root",
            "title": "one",
          },
        ],
        "treeNodes": Object {
          "item-0": Object {
            "children": Array [],
            "id": "item-0",
            "indent": 1,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "root",
            "title": "one",
          },
          "root": Object {
            "children": Array [
              "item-0",
            ],
            "id": "root",
            "indent": 0,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "",
            "title": "ROOT",
          },
        },
      }
    `);
  });

  it("should add node", () => {
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
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "addItemInput": "four",
        "itemSearchInput": "",
        "selectedNode": "item-3",
        "tree": Array [
          Object {
            "children": Array [
              "item-1",
              "item-2",
            ],
            "id": "item-0",
            "indent": 1,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "root",
            "title": "one",
          },
          Object {
            "children": Array [],
            "id": "item-1",
            "indent": 2,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-0",
            "title": "two",
          },
          Object {
            "children": Array [
              "item-3",
            ],
            "id": "item-2",
            "indent": 2,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-0",
            "title": "three",
          },
          Object {
            "children": Array [
              "item-4",
              "item-5",
              "item-6",
            ],
            "id": "item-3",
            "indent": 3,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-2",
            "title": "four",
          },
          Object {
            "children": Array [],
            "id": "item-4",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
          Object {
            "children": Array [],
            "id": "item-5",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
          Object {
            "children": Array [],
            "id": "item-6",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
        ],
        "treeNodes": Object {
          "item-0": Object {
            "children": Array [
              "item-1",
              "item-2",
            ],
            "id": "item-0",
            "indent": 1,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "root",
            "title": "one",
          },
          "item-1": Object {
            "children": Array [],
            "id": "item-1",
            "indent": 2,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-0",
            "title": "two",
          },
          "item-2": Object {
            "children": Array [
              "item-3",
            ],
            "id": "item-2",
            "indent": 2,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-0",
            "title": "three",
          },
          "item-3": Object {
            "children": Array [
              "item-4",
              "item-5",
              "item-6",
            ],
            "id": "item-3",
            "indent": 3,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-2",
            "title": "four",
          },
          "item-4": Object {
            "children": Array [],
            "id": "item-4",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
          "item-5": Object {
            "children": Array [],
            "id": "item-5",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
          "item-6": Object {
            "children": Array [],
            "id": "item-6",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
          "root": Object {
            "children": Array [
              "item-0",
            ],
            "id": "root",
            "indent": 0,
            "isCollapsed": false,
            "isHighlighted": false,
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
        ["change", Id.SearchItemsInput, "o"],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "addItemInput": "four",
        "itemSearchInput": "o",
        "selectedNode": "item-3",
        "tree": Array [
          Object {
            "children": Array [
              "item-1",
              "item-2",
            ],
            "id": "item-0",
            "indent": 1,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "root",
            "title": "one",
          },
          Object {
            "children": Array [],
            "id": "item-1",
            "indent": 2,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-0",
            "title": "two",
          },
          Object {
            "children": Array [
              "item-3",
            ],
            "id": "item-2",
            "indent": 2,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-0",
            "title": "three",
          },
          Object {
            "children": Array [
              "item-4",
              "item-5",
              "item-6",
            ],
            "id": "item-3",
            "indent": 3,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-2",
            "title": "four",
          },
          Object {
            "children": Array [],
            "id": "item-4",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
          Object {
            "children": Array [],
            "id": "item-5",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
          Object {
            "children": Array [],
            "id": "item-6",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
        ],
        "treeNodes": Object {
          "item-0": Object {
            "children": Array [
              "item-1",
              "item-2",
            ],
            "id": "item-0",
            "indent": 1,
            "isCollapsed": false,
            "isHighlighted": true,
            "parent": "root",
            "title": "one",
          },
          "item-1": Object {
            "children": Array [],
            "id": "item-1",
            "indent": 2,
            "isCollapsed": false,
            "isHighlighted": true,
            "parent": "item-0",
            "title": "two",
          },
          "item-2": Object {
            "children": Array [
              "item-3",
            ],
            "id": "item-2",
            "indent": 2,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-0",
            "title": "three",
          },
          "item-3": Object {
            "children": Array [
              "item-4",
              "item-5",
              "item-6",
            ],
            "id": "item-3",
            "indent": 3,
            "isCollapsed": false,
            "isHighlighted": true,
            "parent": "item-2",
            "title": "four",
          },
          "item-4": Object {
            "children": Array [],
            "id": "item-4",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": true,
            "parent": "item-3",
            "title": "four",
          },
          "item-5": Object {
            "children": Array [],
            "id": "item-5",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": true,
            "parent": "item-3",
            "title": "four",
          },
          "item-6": Object {
            "children": Array [],
            "id": "item-6",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": true,
            "parent": "item-3",
            "title": "four",
          },
          "root": Object {
            "children": Array [
              "item-0",
            ],
            "id": "root",
            "indent": 0,
            "isCollapsed": false,
            "isHighlighted": true,
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
        "addItemInput": "four",
        "itemSearchInput": "ur",
        "selectedNode": "item-3",
        "tree": Array [
          Object {
            "children": Array [
              "item-1",
              "item-2",
            ],
            "id": "item-0",
            "indent": 1,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "root",
            "title": "one",
          },
          Object {
            "children": Array [
              "item-3",
            ],
            "id": "item-2",
            "indent": 2,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-0",
            "title": "three",
          },
          Object {
            "children": Array [
              "item-4",
              "item-5",
              "item-6",
            ],
            "id": "item-3",
            "indent": 3,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-2",
            "title": "four",
          },
          Object {
            "children": Array [],
            "id": "item-4",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
          Object {
            "children": Array [],
            "id": "item-5",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
          Object {
            "children": Array [],
            "id": "item-6",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
        ],
        "treeNodes": Object {
          "item-0": Object {
            "children": Array [
              "item-1",
              "item-2",
            ],
            "id": "item-0",
            "indent": 1,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "root",
            "title": "one",
          },
          "item-1": Object {
            "children": Array [],
            "id": "item-1",
            "indent": 2,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-0",
            "title": "two",
          },
          "item-2": Object {
            "children": Array [
              "item-3",
            ],
            "id": "item-2",
            "indent": 2,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-0",
            "title": "three",
          },
          "item-3": Object {
            "children": Array [
              "item-4",
              "item-5",
              "item-6",
            ],
            "id": "item-3",
            "indent": 3,
            "isCollapsed": false,
            "isHighlighted": true,
            "parent": "item-2",
            "title": "four",
          },
          "item-4": Object {
            "children": Array [],
            "id": "item-4",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": true,
            "parent": "item-3",
            "title": "four",
          },
          "item-5": Object {
            "children": Array [],
            "id": "item-5",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": true,
            "parent": "item-3",
            "title": "four",
          },
          "item-6": Object {
            "children": Array [],
            "id": "item-6",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": true,
            "parent": "item-3",
            "title": "four",
          },
          "root": Object {
            "children": Array [
              "item-0",
            ],
            "id": "root",
            "indent": 0,
            "isCollapsed": false,
            "isHighlighted": false,
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
        "addItemInput": "four",
        "itemSearchInput": "TWO",
        "selectedNode": "item-3",
        "tree": Array [
          Object {
            "children": Array [
              "item-1",
              "item-2",
            ],
            "id": "item-0",
            "indent": 1,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "root",
            "title": "one",
          },
          Object {
            "children": Array [],
            "id": "item-1",
            "indent": 2,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-0",
            "title": "two",
          },
        ],
        "treeNodes": Object {
          "item-0": Object {
            "children": Array [
              "item-1",
              "item-2",
            ],
            "id": "item-0",
            "indent": 1,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "root",
            "title": "one",
          },
          "item-1": Object {
            "children": Array [],
            "id": "item-1",
            "indent": 2,
            "isCollapsed": false,
            "isHighlighted": true,
            "parent": "item-0",
            "title": "two",
          },
          "item-2": Object {
            "children": Array [
              "item-3",
            ],
            "id": "item-2",
            "indent": 2,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-0",
            "title": "three",
          },
          "item-3": Object {
            "children": Array [
              "item-4",
              "item-5",
              "item-6",
            ],
            "id": "item-3",
            "indent": 3,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-2",
            "title": "four",
          },
          "item-4": Object {
            "children": Array [],
            "id": "item-4",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
          "item-5": Object {
            "children": Array [],
            "id": "item-5",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
          "item-6": Object {
            "children": Array [],
            "id": "item-6",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
          "root": Object {
            "children": Array [
              "item-0",
            ],
            "id": "root",
            "indent": 0,
            "isCollapsed": false,
            "isHighlighted": false,
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
        "addItemInput": "four",
        "itemSearchInput": "",
        "selectedNode": "item-3",
        "tree": Array [
          Object {
            "children": Array [
              "item-1",
              "item-2",
            ],
            "id": "item-0",
            "indent": 1,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "root",
            "title": "one",
          },
          Object {
            "children": Array [],
            "id": "item-1",
            "indent": 2,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-0",
            "title": "two",
          },
          Object {
            "children": Array [
              "item-3",
            ],
            "id": "item-2",
            "indent": 2,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-0",
            "title": "three",
          },
          Object {
            "children": Array [
              "item-4",
              "item-5",
              "item-6",
            ],
            "id": "item-3",
            "indent": 3,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-2",
            "title": "four",
          },
          Object {
            "children": Array [],
            "id": "item-4",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
          Object {
            "children": Array [],
            "id": "item-5",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
          Object {
            "children": Array [],
            "id": "item-6",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
        ],
        "treeNodes": Object {
          "item-0": Object {
            "children": Array [
              "item-1",
              "item-2",
            ],
            "id": "item-0",
            "indent": 1,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "root",
            "title": "one",
          },
          "item-1": Object {
            "children": Array [],
            "id": "item-1",
            "indent": 2,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-0",
            "title": "two",
          },
          "item-2": Object {
            "children": Array [
              "item-3",
            ],
            "id": "item-2",
            "indent": 2,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-0",
            "title": "three",
          },
          "item-3": Object {
            "children": Array [
              "item-4",
              "item-5",
              "item-6",
            ],
            "id": "item-3",
            "indent": 3,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-2",
            "title": "four",
          },
          "item-4": Object {
            "children": Array [],
            "id": "item-4",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
          "item-5": Object {
            "children": Array [],
            "id": "item-5",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
          "item-6": Object {
            "children": Array [],
            "id": "item-6",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
          "root": Object {
            "children": Array [
              "item-0",
            ],
            "id": "root",
            "indent": 0,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "",
            "title": "ROOT",
          },
        },
      }
    `);
  });

  it("should collapse", () => {
    counter = 0;
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
        ["click", `${Id.CollapseItemButton}-2`, ""],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "addItemInput": "four",
        "itemSearchInput": "",
        "selectedNode": "item-3",
        "tree": Array [
          Object {
            "children": Array [
              "item-1",
              "item-2",
            ],
            "id": "item-0",
            "indent": 1,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "root",
            "title": "one",
          },
          Object {
            "children": Array [],
            "id": "item-1",
            "indent": 2,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-0",
            "title": "two",
          },
          Object {
            "children": Array [
              "item-3",
            ],
            "id": "item-2",
            "indent": 2,
            "isCollapsed": true,
            "isHighlighted": false,
            "parent": "item-0",
            "title": "three",
          },
        ],
        "treeNodes": Object {
          "item-0": Object {
            "children": Array [
              "item-1",
              "item-2",
            ],
            "id": "item-0",
            "indent": 1,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "root",
            "title": "one",
          },
          "item-1": Object {
            "children": Array [],
            "id": "item-1",
            "indent": 2,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-0",
            "title": "two",
          },
          "item-2": Object {
            "children": Array [
              "item-3",
            ],
            "id": "item-2",
            "indent": 2,
            "isCollapsed": true,
            "isHighlighted": false,
            "parent": "item-0",
            "title": "three",
          },
          "item-3": Object {
            "children": Array [
              "item-4",
              "item-5",
              "item-6",
            ],
            "id": "item-3",
            "indent": 3,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-2",
            "title": "four",
          },
          "item-4": Object {
            "children": Array [],
            "id": "item-4",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
          "item-5": Object {
            "children": Array [],
            "id": "item-5",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
          "item-6": Object {
            "children": Array [],
            "id": "item-6",
            "indent": 4,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
          "root": Object {
            "children": Array [
              "item-0",
            ],
            "id": "root",
            "indent": 0,
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "",
            "title": "ROOT",
          },
        },
      }
    `);
  });
});
