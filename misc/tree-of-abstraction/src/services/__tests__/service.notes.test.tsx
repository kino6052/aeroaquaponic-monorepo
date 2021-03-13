import { Id } from "../../bridge";
import { sequence, Utils } from "../../utils/utils";
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

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe("Notes", () => {
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

  it("should add note", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.ToggleScope],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
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
          "note-element-1": Object {
            "description": "Description...",
            "id": "note-element-1",
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
          "note-element-1",
          "note-element-0",
        ],
        "scope": "notes",
        "selectedNode": "item-element-root",
        "selectedNote": "note-element-1",
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
        ["keydown", Id.Keyboard, Shortcut.Down],
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
          "note-element-1": Object {
            "description": "Description...",
            "id": "note-element-1",
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
          "note-element-1",
          "note-element-0",
        ],
        "scope": "notes",
        "selectedNode": "item-element-root",
        "selectedNote": "note-element-1",
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

  it("should add note and edit", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.ToggleScope],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Edit],
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
          "note-element-1": Object {
            "description": "Description...",
            "id": "note-element-1",
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
          "note-element-1",
          "note-element-0",
        ],
        "scope": "notes",
        "selectedNode": "item-element-root",
        "selectedNote": "note-element-1",
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

  it("should go down", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.ToggleScope],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
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

  it("should go up", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.ToggleScope],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Up],
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

  it("should remove", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.ToggleScope],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Remove],
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

  it("should enter", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.ToggleScope],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Edit],
        ["change", `${Id.NoteTitle}-0`, "test"],
        ["change", `${Id.NoteDescription}-0`, "test"],
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
