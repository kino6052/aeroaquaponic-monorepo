import { Id, sequence } from "../../bridge";
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
        "collectionNodes": Object {},
        "route": "Tree",
        "selectedCollection": "",
        "tree": Object {
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
              "notes": Array [
                "note-element-0",
              ],
              "parent": "",
              "title": "ROOT",
            },
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
        "collectionNodes": Object {},
        "route": "Tree",
        "selectedCollection": "",
        "tree": Object {
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
              "notes": Array [
                "note-element-0",
                "note-element-1",
              ],
              "parent": "",
              "title": "ROOT",
            },
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
        "collectionNodes": Object {},
        "route": "Tree",
        "selectedCollection": "",
        "tree": Object {
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
              "notes": Array [
                "note-element-0",
                "note-element-1",
              ],
              "parent": "",
              "title": "ROOT",
            },
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
        "collectionNodes": Object {},
        "route": "Tree",
        "selectedCollection": "",
        "tree": Object {
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
              "isEditable": true,
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
              "notes": Array [
                "note-element-0",
                "note-element-1",
              ],
              "parent": "",
              "title": "ROOT",
            },
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
        "collectionNodes": Object {},
        "route": "Tree",
        "selectedCollection": "",
        "tree": Object {
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
              "notes": Array [
                "note-element-0",
              ],
              "parent": "",
              "title": "ROOT",
            },
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
        "collectionNodes": Object {},
        "route": "Tree",
        "selectedCollection": "",
        "tree": Object {
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
              "notes": Array [
                "note-element-0",
              ],
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
        ["keydown", Id.Keyboard, Shortcut.ToggleScope],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Remove],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collectionNodes": Object {},
        "route": "Tree",
        "selectedCollection": "",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {
            "note-element-0": Object {
              "description": "Description...",
              "id": "note-element-0",
              "isCollapsed": true,
              "isEditable": false,
              "parents": Array [],
              "title": "Title",
            },
          },
          "noteSearchInput": "",
          "notes": Array [],
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
        },
      }
    `);
  });

  it("should remove", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.ToggleScope],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Remove],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collectionNodes": Object {},
        "route": "Tree",
        "selectedCollection": "",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {
            "note-element-1": Object {
              "description": "Description...",
              "id": "note-element-1",
              "isCollapsed": true,
              "isEditable": false,
              "parents": Array [
                "item-element-0",
              ],
              "title": "Title",
            },
            "note-element-2": Object {
              "description": "Description...",
              "id": "note-element-2",
              "isCollapsed": true,
              "isEditable": false,
              "parents": Array [],
              "title": "Title",
            },
            "note-element-3": Object {
              "description": "Description...",
              "id": "note-element-3",
              "isCollapsed": true,
              "isEditable": false,
              "parents": Array [
                "item-element-0",
              ],
              "title": "Title",
            },
          },
          "noteSearchInput": "",
          "notes": Array [
            "note-element-3",
            "note-element-1",
          ],
          "scope": "notes",
          "selectedNode": "item-element-0",
          "selectedNote": "note-element-2",
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
              "notes": Array [
                "note-element-1",
                "note-element-3",
              ],
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
        "collectionNodes": Object {},
        "route": "Tree",
        "selectedCollection": "",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {
            "note-element-0": Object {
              "description": "test",
              "id": "note-element-0",
              "isCollapsed": true,
              "isEditable": true,
              "parents": Array [
                "item-element-root",
              ],
              "title": "test",
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
              "notes": Array [
                "note-element-0",
              ],
              "parent": "",
              "title": "ROOT",
            },
          },
        },
      }
    `);
  });

  it("should collapse", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.ToggleScope],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Collapse],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collectionNodes": Object {},
        "route": "Tree",
        "selectedCollection": "",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {
            "note-element-0": Object {
              "description": "Description...",
              "id": "note-element-0",
              "isCollapsed": false,
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
              "notes": Array [
                "note-element-0",
              ],
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
        ["keydown", Id.Keyboard, Shortcut.ToggleScope],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Edit],
        ["change", `${Id.NoteDescription}-0`, "test"],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collectionNodes": Object {},
        "route": "Tree",
        "selectedCollection": "",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {
            "note-element-0": Object {
              "description": "test",
              "id": "note-element-0",
              "isCollapsed": true,
              "isEditable": true,
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
              "notes": Array [
                "note-element-0",
              ],
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
        ["keydown", Id.Keyboard, Shortcut.ToggleScope],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Edit],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Edit],
        ["change", `${Id.NoteTitle}-0`, "test"],
        ["change", `${Id.NoteDescription}-0`, "test"],
        ["change", `${Id.NoteTitle}-1`, "test"],
        ["change", `${Id.NoteDescription}-1`, "test"],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collectionNodes": Object {},
        "route": "Tree",
        "selectedCollection": "",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {
            "note-element-0": Object {
              "description": "test",
              "id": "note-element-0",
              "isCollapsed": true,
              "isEditable": false,
              "parents": Array [
                "item-element-root",
              ],
              "title": "test",
            },
            "note-element-1": Object {
              "description": "test",
              "id": "note-element-1",
              "isCollapsed": true,
              "isEditable": false,
              "parents": Array [
                "item-element-root",
              ],
              "title": "test",
            },
          },
          "noteSearchInput": "",
          "notes": Array [
            "note-element-1",
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
              "notes": Array [
                "note-element-0",
                "note-element-1",
              ],
              "parent": "",
              "title": "ROOT",
            },
          },
        },
      }
    `);
  });

  it("should correctly get descendants", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.ToggleScope],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Edit],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Edit],
        ["keydown", Id.Keyboard, Shortcut.ToggleScope],
        ["keydown", Id.Keyboard, Shortcut.Up],
        ["keydown", Id.Keyboard, Shortcut.Up],
        ["keydown", Id.Keyboard, Shortcut.Up],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collectionNodes": Object {},
        "route": "Tree",
        "selectedCollection": "",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {
            "note-element-3": Object {
              "description": "Description...",
              "id": "note-element-3",
              "isCollapsed": true,
              "isEditable": false,
              "parents": Array [
                "item-element-2",
              ],
              "title": "Title",
            },
            "note-element-4": Object {
              "description": "Description...",
              "id": "note-element-4",
              "isCollapsed": true,
              "isEditable": false,
              "parents": Array [
                "item-element-2",
              ],
              "title": "Title",
            },
          },
          "noteSearchInput": "",
          "notes": Array [
            "note-element-4",
            "note-element-3",
          ],
          "scope": "tree",
          "selectedNode": "item-element-root",
          "selectedNote": "note-element-3",
          "tree": Array [
            "item-element-root",
            "item-element-0",
            "item-element-1",
            "item-element-2",
          ],
          "treeNodes": Object {
            "item-element-0": Object {
              "children": Array [
                "item-element-1",
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
                "item-element-2",
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
              "indent": 3,
              "isCollapsed": false,
              "isEditable": false,
              "isHighlighted": false,
              "notes": Array [
                "note-element-3",
                "note-element-4",
              ],
              "parent": "item-element-1",
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

  it("should search", () => {
    expect(
      sequence([
        ["keydown", Id.Keyboard, Shortcut.ToggleScope],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["change", Id.SearchNotesInput, "titl"],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collectionNodes": Object {},
        "route": "Tree",
        "selectedCollection": "",
        "tree": Object {
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
            "note-element-2": Object {
              "description": "Description...",
              "id": "note-element-2",
              "isCollapsed": true,
              "isEditable": false,
              "parents": Array [
                "item-element-root",
              ],
              "title": "Title",
            },
          },
          "noteSearchInput": "titl",
          "notes": Array [
            "note-element-2",
            "note-element-1",
            "note-element-0",
          ],
          "scope": "notes",
          "selectedNode": "item-element-root",
          "selectedNote": "note-element-2",
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
              "notes": Array [
                "note-element-0",
                "note-element-1",
                "note-element-2",
              ],
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
      sequence([
        ["keydown", Id.Keyboard, Shortcut.ToggleScope],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["change", Id.SearchNotesInput, "1234"],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collectionNodes": Object {},
        "route": "Tree",
        "selectedCollection": "",
        "tree": Object {
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
            "note-element-2": Object {
              "description": "Description...",
              "id": "note-element-2",
              "isCollapsed": true,
              "isEditable": false,
              "parents": Array [
                "item-element-root",
              ],
              "title": "Title",
            },
          },
          "noteSearchInput": "1234",
          "notes": Array [],
          "scope": "notes",
          "selectedNode": "item-element-root",
          "selectedNote": "note-element-2",
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
              "notes": Array [
                "note-element-0",
                "note-element-1",
                "note-element-2",
              ],
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
      sequence([
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.Down],
        ["keydown", Id.Keyboard, Shortcut.ToggleScope],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Add],
        ["keydown", Id.Keyboard, Shortcut.Up],
        ["keydown", Id.Keyboard, Shortcut.Up],
        ["keydown", Id.Keyboard, Shortcut.Up],
        ["change", Id.SearchNotesInput, "titl"],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "collectionNodes": Object {},
        "route": "Tree",
        "selectedCollection": "",
        "tree": Object {
          "itemSearchInput": "",
          "noteNodes": Object {
            "note-element-3": Object {
              "description": "Description...",
              "id": "note-element-3",
              "isCollapsed": true,
              "isEditable": false,
              "parents": Array [
                "item-element-2",
              ],
              "title": "Title",
            },
            "note-element-4": Object {
              "description": "Description...",
              "id": "note-element-4",
              "isCollapsed": true,
              "isEditable": false,
              "parents": Array [
                "item-element-2",
              ],
              "title": "Title",
            },
            "note-element-5": Object {
              "description": "Description...",
              "id": "note-element-5",
              "isCollapsed": true,
              "isEditable": false,
              "parents": Array [
                "item-element-2",
              ],
              "title": "Title",
            },
          },
          "noteSearchInput": "titl",
          "notes": Array [
            "note-element-5",
            "note-element-4",
            "note-element-3",
          ],
          "scope": "notes",
          "selectedNode": "item-element-2",
          "selectedNote": "note-element-5",
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
              "notes": Array [
                "note-element-3",
                "note-element-4",
                "note-element-5",
              ],
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
