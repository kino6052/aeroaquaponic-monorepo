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
          "collectionNodes": Object {},
          "selectedCollection": "",
        },
        "route": "Collection",
        "tree": Object {},
          },
        },
      }
    `);
  });
});
