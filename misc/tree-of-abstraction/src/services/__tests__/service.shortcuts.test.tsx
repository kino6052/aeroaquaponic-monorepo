import { Id, initialState } from "../../bridge";
import { Utils } from "../../utils/utils";
import { act, sequence } from "../service";

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe("Tree", () => {
  it("should show controls", () => {
    expect(sequence([["keydown", Id.Keyboard, "ControlLeft"]]))
      .toMatchInlineSnapshot(`
      Object {
        "addItemInput": "",
        "itemSearchInput": "",
        "selectedNode": "",
        "shouldShowControls": true,
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
            "parent": "",
            "title": "ROOT",
          },
        },
      }
    `);
  });
});
