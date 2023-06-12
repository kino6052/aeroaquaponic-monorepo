import { compose, reducer } from "..";
import { initialState } from "../../bridge";
import { selectMainProps } from "../../selectors";
import { EActionType, EControlId } from "../../types";

let uid = 0;

jest.mock("uuid", () => {
  return {
    v4: jest.fn(() => {
      return String(uid++);
    }),
  };
});

// jest.mock("uuidv4", () => {
//   return {
//     uuid: jest.fn(() => {
//       return String(uid++);
//     }),
//   };
// });

beforeEach(() => {
  uid = 0;
});

describe("Should correctly collapse and uncollapse side panel", () => {
  it("should have the panel open initially", () => {
    const mainProps = selectMainProps(initialState);

    expect(mainProps).toMatchInlineSnapshot(`
      {
        "activeMessage": "",
        "conversations": [],
        "input": "",
        "isOpen": true,
        "messages": [],
        "selectedModel": "GPT-3.5",
      }
    `);
  });

  it("should hide the pannel when click on expand button", () => {
    const newState = reducer(initialState, {
      id: { id: EControlId.ExpandButton },
      type: EActionType.Click,
    });

    const mainProps = selectMainProps(newState);

    expect(mainProps).toMatchInlineSnapshot(`
      {
        "activeMessage": "",
        "conversations": [],
        "input": "",
        "isOpen": false,
        "messages": [],
        "selectedModel": "GPT-3.5",
      }
    `);
  });
});

describe("Should be able to enter input into the input field", () => {
  it("should have the input empty initially", () => {
    const mainProps = selectMainProps(initialState);

    expect(mainProps).toMatchInlineSnapshot(`
      {
        "activeMessage": "",
        "conversations": [],
        "input": "",
        "isOpen": true,
        "messages": [],
        "selectedModel": "GPT-3.5",
      }
    `);
  });

  it("should have input value set when providing input", () => {
    const newState = reducer(initialState, {
      id: { id: EControlId.QueryInput },
      type: EActionType.Change,
      payload: "This is the new input that I typed into the query input",
    });

    const mainProps = selectMainProps(newState);

    expect(mainProps).toMatchInlineSnapshot(`
      {
        "activeMessage": "",
        "conversations": [],
        "input": "This is the new input that I typed into the query input",
        "isOpen": true,
        "messages": [],
        "selectedModel": "GPT-3.5",
      }
    `);
  });

  it("should have input value set when providing input", () => {
    const newState = reducer(initialState, {
      id: { id: EControlId.QueryInput },
      type: EActionType.Change,
      payload: "this is what I wrote",
    });

    const mainProps = selectMainProps(newState);

    expect(mainProps).toMatchInlineSnapshot(`
      {
        "activeMessage": "",
        "conversations": [],
        "input": "this is what I wrote",
        "isOpen": true,
        "messages": [],
        "selectedModel": "GPT-3.5",
      }
    `);
  });
});

describe("Should be able to toggle the model", () => {
  it("should have chat gpt 3 initially", () => {
    const mainProps = selectMainProps(initialState);

    expect(mainProps).toMatchInlineSnapshot(`
      {
        "activeMessage": "",
        "conversations": [],
        "input": "",
        "isOpen": true,
        "messages": [],
        "selectedModel": "GPT-3.5",
      }
    `);
  });

  it("should toggle to chat gpt 4 model when click on toggle", () => {
    const newState = reducer(initialState, {
      id: { id: EControlId.Toggle },
      type: EActionType.Click,
    });

    const mainProps = selectMainProps(newState);

    expect(mainProps).toMatchInlineSnapshot(`
      {
        "activeMessage": "",
        "conversations": [],
        "input": "",
        "isOpen": true,
        "messages": [],
        "selectedModel": "GPT-4.0",
      }
    `);
  });

  it("should toggle back to chat gpt 3 model when click on toggle two times", () => {
    const newState = compose(initialState)([
      {
        id: { id: EControlId.Toggle },
        type: EActionType.Click,
      },
      {
        id: { id: EControlId.Toggle },
        type: EActionType.Click,
      },
    ]);

    const mainProps = selectMainProps(newState);

    expect(mainProps).toMatchInlineSnapshot(`
      {
        "activeMessage": "",
        "conversations": [],
        "input": "",
        "isOpen": true,
        "messages": [],
        "selectedModel": "GPT-3.5",
      }
    `);
  });
});

describe("Should submit the response and create a conversation", () => {
  it("should have no conversations and messages initially", () => {
    const mainProps = selectMainProps(initialState);

    expect(mainProps).toMatchInlineSnapshot(`
      {
        "activeMessage": "",
        "conversations": [],
        "input": "",
        "isOpen": true,
        "messages": [],
        "selectedModel": "GPT-3.5",
      }
    `);
  });

  it("should submit message and create conversation for today", () => {
    const nextState = compose(initialState)([
      {
        id: { id: EControlId.QueryInput },
        type: EActionType.Change,
        payload: "This is the new input that I typed into the query input",
      },
      {
        id: { id: EControlId.Submit },
        type: EActionType.Click,
      },
    ]);

    const mainProps = selectMainProps(nextState);

    expect(mainProps).toMatchInlineSnapshot(`
      {
        "activeConversationId": "0",
        "activeMessage": "",
        "conversations": [
          {
            "category": "Today",
            "conversations": [
              {
                "id": "0",
                "isActive": true,
                "messages": [],
                "model": "GPT-3.5",
                "name": "Conversation 1",
              },
            ],
            "id": "1",
          },
        ],
        "input": "",
        "isOpen": true,
        "isWaitingForResponse": true,
        "messages": [
          {
            "id": "2",
            "text": "This is the new input that I typed into the query input",
            "user": "user",
          },
        ],
        "selectedModel": "GPT-3.5",
      }
    `);
  });
});

describe("Should be able to edit and remove conversations", () => {
  it("should create second conversation", () => {
    const nextState = compose(initialState)([
      {
        id: { id: EControlId.QueryInput },
        type: EActionType.Change,
        payload: "This is the new input that I typed into the query input",
      },
      {
        id: { id: EControlId.Submit },
        type: EActionType.Click,
      },
      {
        id: { id: EControlId.QueryResponse },
        type: EActionType.IO,
        payload: {
          text: "This is the only response I can provide...",
          isDone: true,
        },
      },
      {
        id: { id: EControlId.NewChat },
        type: EActionType.Click,
      },
      {
        id: { id: EControlId.QueryInput },
        type: EActionType.Change,
        payload: "This is the new input that I typed into the query input",
      },
      {
        id: { id: EControlId.Submit },
        type: EActionType.Click,
      },
      {
        id: { id: EControlId.QueryResponse },
        type: EActionType.IO,
        payload: {
          text: "This is the only response I can provide...",
          isDone: true,
        },
      },
    ]);

    const mainProps = selectMainProps(nextState);

    expect(mainProps).toMatchInlineSnapshot(`
      {
        "activeConversationId": "4",
        "activeMessage": "",
        "conversations": [
          {
            "category": "Today",
            "conversations": [
              {
                "id": "4",
                "isActive": true,
                "messages": [],
                "model": "GPT-3.5",
                "name": "Conversation 2",
              },
              {
                "id": "0",
                "isActive": false,
                "messages": [
                  {
                    "id": "2",
                    "text": "This is the new input that I typed into the query input",
                    "user": "user",
                  },
                  {
                    "id": "3",
                    "text": " This is the only response I can provide...",
                    "user": "gpt",
                  },
                ],
                "model": "GPT-3.5",
                "name": "Conversation 1",
              },
            ],
            "id": "1",
          },
        ],
        "input": "",
        "isOpen": true,
        "isWaitingForResponse": false,
        "messages": [
          {
            "id": "6",
            "text": "This is the new input that I typed into the query input",
            "user": "user",
          },
          {
            "id": "7",
            "text": " This is the only response I can provide...",
            "user": "gpt",
          },
        ],
        "selectedModel": "GPT-3.5",
      }
    `);
  });

  it("should allow to remove second conversation", () => {
    const nextState = compose(initialState)([
      {
        id: { id: EControlId.QueryInput },
        type: EActionType.Change,
        payload: "This is the new input that I typed into the query input",
      },
      {
        id: { id: EControlId.Submit },
        type: EActionType.Click,
      },
      {
        id: { id: EControlId.QueryResponse },
        type: EActionType.IO,
        payload: {
          text: "This is the only response I can provide...",
          isDone: true,
        },
      },
      {
        id: { id: EControlId.NewChat },
        type: EActionType.Click,
      },
      {
        id: { id: EControlId.QueryInput },
        type: EActionType.Change,
        payload: "This is the new input that I typed into the query input",
      },
      {
        id: { id: EControlId.Submit },
        type: EActionType.Click,
      },
      {
        id: { id: EControlId.QueryResponse },
        type: EActionType.IO,
        payload: {
          text: "This is the only response I can provide...",
          isDone: true,
        },
      },
      {
        id: { id: EControlId.RemoveConversation, uid: "4" },
        type: EActionType.Click,
      },
    ]);

    const mainProps = selectMainProps(nextState);

    expect(mainProps).toMatchInlineSnapshot(`
      {
        "activeConversationId": undefined,
        "activeMessage": "",
        "conversations": [
          {
            "category": "Today",
            "conversations": [
              {
                "id": "0",
                "isActive": false,
                "messages": [
                  {
                    "id": "2",
                    "text": "This is the new input that I typed into the query input",
                    "user": "user",
                  },
                  {
                    "id": "3",
                    "text": " This is the only response I can provide...",
                    "user": "gpt",
                  },
                ],
                "model": "GPT-3.5",
                "name": "Conversation 1",
              },
            ],
            "id": "1",
          },
        ],
        "input": "",
        "isOpen": true,
        "isWaitingForResponse": false,
        "messages": [],
        "selectedModel": "GPT-3.5",
      }
    `);
  });

  it("should allow to change second conversation", () => {
    const nextState = compose(initialState)([
      {
        id: { id: EControlId.QueryInput },
        type: EActionType.Change,
        payload: "This is the new input that I typed into the query input",
      },
      {
        id: { id: EControlId.Submit },
        type: EActionType.Click,
      },
      {
        id: { id: EControlId.QueryResponse },
        type: EActionType.IO,
        payload: {
          text: "This is the only response I can provide...",
          isDone: true,
        },
      },
      {
        id: { id: EControlId.NewChat },
        type: EActionType.Click,
      },
      {
        id: { id: EControlId.QueryInput },
        type: EActionType.Change,
        payload: "This is the new input that I typed into the query input",
      },
      {
        id: { id: EControlId.Submit },
        type: EActionType.Click,
      },
      {
        id: { id: EControlId.QueryResponse },
        type: EActionType.IO,
        payload: {
          text: "This is the only response I can provide...",
          isDone: true,
        },
      },
      {
        id: { id: EControlId.EditConversation, uid: "4" },
        type: EActionType.Click,
      },
      {
        id: { id: EControlId.ConversationEditInput, uid: "4" },
        type: EActionType.Change,
        payload: "My favorite conversation",
      },
    ]);

    const mainProps = selectMainProps(nextState);

    expect(mainProps).toMatchInlineSnapshot(`
      {
        "activeConversationId": "4",
        "activeMessage": "",
        "conversations": [
          {
            "category": "Today",
            "conversations": [
              {
                "id": "4",
                "isActive": true,
                "isEditing": true,
                "messages": [],
                "model": "GPT-3.5",
                "name": "Conversation 2",
                "tempName": "My favorite conversation",
              },
              {
                "id": "0",
                "isActive": false,
                "messages": [
                  {
                    "id": "2",
                    "text": "This is the new input that I typed into the query input",
                    "user": "user",
                  },
                  {
                    "id": "3",
                    "text": " This is the only response I can provide...",
                    "user": "gpt",
                  },
                ],
                "model": "GPT-3.5",
                "name": "Conversation 1",
              },
            ],
            "id": "1",
          },
        ],
        "input": "",
        "isOpen": true,
        "isWaitingForResponse": false,
        "messages": [
          {
            "id": "6",
            "text": "This is the new input that I typed into the query input",
            "user": "user",
          },
          {
            "id": "7",
            "text": " This is the only response I can provide...",
            "user": "gpt",
          },
        ],
        "selectedModel": "GPT-3.5",
      }
    `);
  });

  it("should allow to save changes of conversation name", () => {
    const nextState = compose(initialState)([
      {
        id: { id: EControlId.QueryInput },
        type: EActionType.Change,
        payload: "This is the new input that I typed into the query input",
      },
      {
        id: { id: EControlId.Submit },
        type: EActionType.Click,
      },
      {
        id: { id: EControlId.QueryResponse },
        type: EActionType.IO,
        payload: {
          text: "This is the only response I can provide...",
          isDone: true,
        },
      },
      {
        id: { id: EControlId.NewChat },
        type: EActionType.Click,
      },
      {
        id: { id: EControlId.QueryInput },
        type: EActionType.Change,
        payload: "This is the new input that I typed into the query input",
      },
      {
        id: { id: EControlId.Submit },
        type: EActionType.Click,
      },
      {
        id: { id: EControlId.QueryResponse },
        type: EActionType.IO,
        payload: {
          text: "This is the only response I can provide...",
          isDone: true,
        },
      },
      {
        id: { id: EControlId.EditConversation, uid: "4" },
        type: EActionType.Click,
      },
      {
        id: { id: EControlId.ConversationEditInput, uid: "4" },
        type: EActionType.Change,
        payload: "My favorite conversation",
      },
      {
        id: { id: EControlId.ConversationEditAccept, uid: "4" },
        type: EActionType.Click,
      },
    ]);

    const mainProps = selectMainProps(nextState);

    expect(mainProps).toMatchInlineSnapshot(`
      {
        "activeConversationId": "4",
        "activeMessage": "",
        "conversations": [
          {
            "category": "Today",
            "conversations": [
              {
                "id": "4",
                "isActive": true,
                "isEditing": false,
                "messages": [],
                "model": "GPT-3.5",
                "name": "My favorite conversation",
                "tempName": "My favorite conversation",
              },
              {
                "id": "0",
                "isActive": false,
                "messages": [
                  {
                    "id": "2",
                    "text": "This is the new input that I typed into the query input",
                    "user": "user",
                  },
                  {
                    "id": "3",
                    "text": " This is the only response I can provide...",
                    "user": "gpt",
                  },
                ],
                "model": "GPT-3.5",
                "name": "Conversation 1",
              },
            ],
            "id": "1",
          },
        ],
        "input": "",
        "isOpen": true,
        "isWaitingForResponse": false,
        "messages": [
          {
            "id": "6",
            "text": "This is the new input that I typed into the query input",
            "user": "user",
          },
          {
            "id": "7",
            "text": " This is the only response I can provide...",
            "user": "gpt",
          },
        ],
        "selectedModel": "GPT-3.5",
      }
    `);
  });

  it("should allow to cancel changes of conversation name", () => {
    const nextState = compose(initialState)([
      {
        id: { id: EControlId.QueryInput },
        type: EActionType.Change,
        payload: "This is the new input that I typed into the query input",
      },
      {
        id: { id: EControlId.Submit },
        type: EActionType.Click,
      },
      {
        id: { id: EControlId.QueryResponse },
        type: EActionType.IO,
        payload: {
          text: "This is the only response I can provide...",
          isDone: true,
        },
      },
      {
        id: { id: EControlId.NewChat },
        type: EActionType.Click,
      },
      {
        id: { id: EControlId.QueryInput },
        type: EActionType.Change,
        payload: "This is the new input that I typed into the query input",
      },
      {
        id: { id: EControlId.Submit },
        type: EActionType.Click,
      },
      {
        id: { id: EControlId.QueryResponse },
        type: EActionType.IO,
        payload: {
          text: "This is the only response I can provide...",
          isDone: true,
        },
      },
      {
        id: { id: EControlId.EditConversation, uid: "4" },
        type: EActionType.Click,
      },
      {
        id: { id: EControlId.ConversationEditInput, uid: "4" },
        type: EActionType.Change,
        payload: "My favorite conversation",
      },
      {
        id: { id: EControlId.ConversationEditCancel, uid: "4" },
        type: EActionType.Click,
      },
    ]);

    const mainProps = selectMainProps(nextState);

    expect(mainProps).toMatchInlineSnapshot(`
      {
        "activeConversationId": "4",
        "activeMessage": "",
        "conversations": [
          {
            "category": "Today",
            "conversations": [
              {
                "id": "4",
                "isActive": true,
                "isEditing": false,
                "messages": [],
                "model": "GPT-3.5",
                "name": "Conversation 2",
                "tempName": "My favorite conversation",
              },
              {
                "id": "0",
                "isActive": false,
                "messages": [
                  {
                    "id": "2",
                    "text": "This is the new input that I typed into the query input",
                    "user": "user",
                  },
                  {
                    "id": "3",
                    "text": " This is the only response I can provide...",
                    "user": "gpt",
                  },
                ],
                "model": "GPT-3.5",
                "name": "Conversation 1",
              },
            ],
            "id": "1",
          },
        ],
        "input": "",
        "isOpen": true,
        "isWaitingForResponse": false,
        "messages": [
          {
            "id": "6",
            "text": "This is the new input that I typed into the query input",
            "user": "user",
          },
          {
            "id": "7",
            "text": " This is the only response I can provide...",
            "user": "gpt",
          },
        ],
        "selectedModel": "GPT-3.5",
      }
    `);
  });
});

describe("Should submit the response and receive response", () => {
  it("should submit message and provide a response but it should wait till the response is complete", () => {
    const nextState = compose(initialState)([
      {
        id: { id: EControlId.QueryInput },
        type: EActionType.Change,
        payload: "This is the new input that I typed into the query input",
      },
      {
        id: { id: EControlId.Submit },
        type: EActionType.Click,
      },
      {
        id: { id: EControlId.QueryResponse },
        type: EActionType.IO,
        payload: {
          text: "This",
          isDone: false,
        },
      },
      {
        id: { id: EControlId.QueryResponse },
        type: EActionType.IO,
        payload: {
          text: "is the only",
          isDone: false,
        },
      },
    ]);

    const mainProps = selectMainProps(nextState);

    expect(mainProps).toMatchInlineSnapshot(`
      {
        "activeConversationId": "0",
        "activeMessage": " This is the only",
        "conversations": [
          {
            "category": "Today",
            "conversations": [
              {
                "id": "0",
                "isActive": true,
                "messages": [],
                "model": "GPT-3.5",
                "name": "Conversation 1",
              },
            ],
            "id": "1",
          },
        ],
        "input": "",
        "isOpen": true,
        "isWaitingForResponse": true,
        "messages": [
          {
            "id": "2",
            "text": "This is the new input that I typed into the query input",
            "user": "user",
          },
        ],
        "selectedModel": "GPT-3.5",
      }
    `);
  });

  it("should submit message and provide a complete response", () => {
    const nextState = compose(initialState)([
      {
        id: { id: EControlId.QueryInput },
        type: EActionType.Change,
        payload: "This is the new input that I typed into the query input",
      },
      {
        id: { id: EControlId.Submit },
        type: EActionType.Click,
      },
      {
        id: { id: EControlId.QueryResponse },
        type: EActionType.IO,
        payload: {
          text: "This",
          isDone: false,
        },
      },
      {
        id: { id: EControlId.QueryResponse },
        type: EActionType.IO,
        payload: {
          text: "is the only",
          isDone: false,
        },
      },
      {
        id: { id: EControlId.QueryResponse },
        type: EActionType.IO,
        payload: {
          text: "response I can provide...",
          isDone: true,
        },
      },
    ]);

    const mainProps = selectMainProps(nextState);

    expect(mainProps).toMatchInlineSnapshot(`
      {
        "activeConversationId": "0",
        "activeMessage": "",
        "conversations": [
          {
            "category": "Today",
            "conversations": [
              {
                "id": "0",
                "isActive": true,
                "messages": [],
                "model": "GPT-3.5",
                "name": "Conversation 1",
              },
            ],
            "id": "1",
          },
        ],
        "input": "",
        "isOpen": true,
        "isWaitingForResponse": false,
        "messages": [
          {
            "id": "2",
            "text": "This is the new input that I typed into the query input",
            "user": "user",
          },
          {
            "id": "3",
            "text": " This is the only response I can provide...",
            "user": "gpt",
          },
        ],
        "selectedModel": "GPT-3.5",
      }
    `);
  });

  it("should be able to like complete response", () => {
    const nextState = compose(initialState)([
      {
        id: { id: EControlId.QueryInput },
        type: EActionType.Change,
        payload: "This is the new input that I typed into the query input",
      },
      {
        id: { id: EControlId.Submit },
        type: EActionType.Click,
      },
      {
        id: { id: EControlId.QueryResponse },
        type: EActionType.IO,
        payload: {
          text: "This",
          isDone: false,
        },
      },
      {
        id: { id: EControlId.QueryResponse },
        type: EActionType.IO,
        payload: {
          text: "is the only",
          isDone: false,
        },
      },
      {
        id: { id: EControlId.QueryResponse },
        type: EActionType.IO,
        payload: {
          text: "response I can provide...",
          isDone: true,
        },
      },
      {
        id: { id: EControlId.LikeButton, uid: "3" },
        type: EActionType.Click,
      },
    ]);

    const mainProps = selectMainProps(nextState);

    expect(mainProps).toMatchInlineSnapshot(`
      {
        "activeConversationId": "0",
        "activeMessage": "",
        "conversations": [
          {
            "category": "Today",
            "conversations": [
              {
                "id": "0",
                "isActive": true,
                "messages": [],
                "model": "GPT-3.5",
                "name": "Conversation 1",
              },
            ],
            "id": "1",
          },
        ],
        "input": "",
        "isOpen": true,
        "isWaitingForResponse": false,
        "messages": [
          {
            "id": "2",
            "text": "This is the new input that I typed into the query input",
            "user": "user",
          },
          {
            "id": "3",
            "reaction": "like",
            "text": " This is the only response I can provide...",
            "user": "gpt",
          },
        ],
        "selectedModel": "GPT-3.5",
      }
    `);
  });

  it("should be able to dislike complete response", () => {
    const nextState = compose(initialState)([
      {
        id: { id: EControlId.QueryInput },
        type: EActionType.Change,
        payload: "This is the new input that I typed into the query input",
      },
      {
        id: { id: EControlId.Submit },
        type: EActionType.Click,
      },
      {
        id: { id: EControlId.QueryResponse },
        type: EActionType.IO,
        payload: {
          text: "This",
          isDone: false,
        },
      },
      {
        id: { id: EControlId.QueryResponse },
        type: EActionType.IO,
        payload: {
          text: "is the only",
          isDone: false,
        },
      },
      {
        id: { id: EControlId.QueryResponse },
        type: EActionType.IO,
        payload: {
          text: "response I can provide...",
          isDone: true,
        },
      },
      {
        id: { id: EControlId.DislikeButton, uid: "3" },
        type: EActionType.Click,
      },
    ]);

    const mainProps = selectMainProps(nextState);

    expect(mainProps).toMatchInlineSnapshot(`
      {
        "activeConversationId": "0",
        "activeMessage": "",
        "conversations": [
          {
            "category": "Today",
            "conversations": [
              {
                "id": "0",
                "isActive": true,
                "messages": [],
                "model": "GPT-3.5",
                "name": "Conversation 1",
              },
            ],
            "id": "1",
          },
        ],
        "input": "",
        "isOpen": true,
        "isWaitingForResponse": false,
        "messages": [
          {
            "id": "2",
            "text": "This is the new input that I typed into the query input",
            "user": "user",
          },
          {
            "id": "3",
            "reaction": "dislike",
            "text": " This is the only response I can provide...",
            "user": "gpt",
          },
        ],
        "selectedModel": "GPT-3.5",
      }
    `);
  });
});
