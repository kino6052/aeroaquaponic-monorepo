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
        "tree": Object {},
        "treeNodes": Object {
          "root": Object {
            "children": Array [],
            "id": "root",
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
        "tree": Object {
          "root": Object {
            "item-0": Object {},
          },
        },
        "treeNodes": Object {
          "item-0": Object {
            "children": Array [],
            "id": "item-0",
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
        "tree": Object {
          "root": Object {
            "item-0": Object {
              "item-1": Object {},
              "item-2": Object {
                "item-3": Object {
                  "item-4": Object {},
                  "item-5": Object {},
                  "item-6": Object {},
                },
              },
            },
          },
        },
        "treeNodes": Object {
          "item-0": Object {
            "children": Array [
              "item-1",
              "item-2",
            ],
            "id": "item-0",
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "root",
            "title": "one",
          },
          "item-1": Object {
            "children": Array [],
            "id": "item-1",
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
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-2",
            "title": "four",
          },
          "item-4": Object {
            "children": Array [],
            "id": "item-4",
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
          "item-5": Object {
            "children": Array [],
            "id": "item-5",
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
          "item-6": Object {
            "children": Array [],
            "id": "item-6",
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
        "tree": Object {
          "root": Object {
            "item-0": Object {
              "item-1": Object {},
              "item-2": Object {
                "item-3": Object {
                  "item-4": Object {},
                  "item-5": Object {},
                  "item-6": Object {},
                },
              },
            },
          },
        },
        "treeNodes": Object {
          "item-0": Object {
            "children": Array [
              "item-1",
              "item-2",
            ],
            "id": "item-0",
            "isCollapsed": false,
            "isHighlighted": true,
            "parent": "root",
            "title": "one",
          },
          "item-1": Object {
            "children": Array [],
            "id": "item-1",
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
            "isCollapsed": false,
            "isHighlighted": true,
            "parent": "item-2",
            "title": "four",
          },
          "item-4": Object {
            "children": Array [],
            "id": "item-4",
            "isCollapsed": false,
            "isHighlighted": true,
            "parent": "item-3",
            "title": "four",
          },
          "item-5": Object {
            "children": Array [],
            "id": "item-5",
            "isCollapsed": false,
            "isHighlighted": true,
            "parent": "item-3",
            "title": "four",
          },
          "item-6": Object {
            "children": Array [],
            "id": "item-6",
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
        "tree": Object {
          "root": Object {
            "item-0": Object {
              "item-2": Object {
                "item-3": Object {
                  "item-4": Object {},
                  "item-5": Object {},
                  "item-6": Object {},
                },
              },
            },
          },
        },
        "treeNodes": Object {
          "item-0": Object {
            "children": Array [
              "item-1",
              "item-2",
            ],
            "id": "item-0",
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "root",
            "title": "one",
          },
          "item-1": Object {
            "children": Array [],
            "id": "item-1",
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
            "isCollapsed": false,
            "isHighlighted": true,
            "parent": "item-2",
            "title": "four",
          },
          "item-4": Object {
            "children": Array [],
            "id": "item-4",
            "isCollapsed": false,
            "isHighlighted": true,
            "parent": "item-3",
            "title": "four",
          },
          "item-5": Object {
            "children": Array [],
            "id": "item-5",
            "isCollapsed": false,
            "isHighlighted": true,
            "parent": "item-3",
            "title": "four",
          },
          "item-6": Object {
            "children": Array [],
            "id": "item-6",
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
        "tree": Object {
          "root": Object {
            "item-0": Object {
              "item-1": Object {},
            },
          },
        },
        "treeNodes": Object {
          "item-0": Object {
            "children": Array [
              "item-1",
              "item-2",
            ],
            "id": "item-0",
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "root",
            "title": "one",
          },
          "item-1": Object {
            "children": Array [],
            "id": "item-1",
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
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-2",
            "title": "four",
          },
          "item-4": Object {
            "children": Array [],
            "id": "item-4",
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
          "item-5": Object {
            "children": Array [],
            "id": "item-5",
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
          "item-6": Object {
            "children": Array [],
            "id": "item-6",
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
        "tree": Object {
          "root": Object {
            "item-0": Object {
              "item-1": Object {},
              "item-2": Object {
                "item-3": Object {
                  "item-4": Object {},
                  "item-5": Object {},
                  "item-6": Object {},
                },
              },
            },
          },
        },
        "treeNodes": Object {
          "item-0": Object {
            "children": Array [
              "item-1",
              "item-2",
            ],
            "id": "item-0",
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "root",
            "title": "one",
          },
          "item-1": Object {
            "children": Array [],
            "id": "item-1",
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
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-2",
            "title": "four",
          },
          "item-4": Object {
            "children": Array [],
            "id": "item-4",
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
          "item-5": Object {
            "children": Array [],
            "id": "item-5",
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
          "item-6": Object {
            "children": Array [],
            "id": "item-6",
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
        "tree": Object {
          "root": Object {
            "item-0": Object {
              "item-1": Object {},
              "item-2": Object {},
            },
          },
        },
        "treeNodes": Object {
          "item-0": Object {
            "children": Array [
              "item-1",
              "item-2",
            ],
            "id": "item-0",
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "root",
            "title": "one",
          },
          "item-1": Object {
            "children": Array [],
            "id": "item-1",
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
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-2",
            "title": "four",
          },
          "item-4": Object {
            "children": Array [],
            "id": "item-4",
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
          "item-5": Object {
            "children": Array [],
            "id": "item-5",
            "isCollapsed": false,
            "isHighlighted": false,
            "parent": "item-3",
            "title": "four",
          },
          "item-6": Object {
            "children": Array [],
            "id": "item-6",
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
