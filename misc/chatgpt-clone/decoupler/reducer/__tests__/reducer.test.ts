import { initialState } from "../../bridge";
import { reducer, selectMainProps } from "..";
import { EActionType, EControlId, TMainProps } from "../../types";
import { EModel, EUser } from "../../enums";

describe("Should correctly collapse and uncollapse side panel", () => {
  it("should have the panel open initially", () => {
    const mainProps = selectMainProps(initialState);

    expect(mainProps).toMatchObject({
      input: "",
      messages: [],
      activeMessage: "",
      conversations: [],
      isOpen: true,
      selectedModel: EModel.GPT3,
    } as TMainProps);
  });

  it("should hide the pannel when click on expand button", () => {
    const newState = reducer(initialState, {
      id: { id: EControlId.ExpandButton },
      type: EActionType.Click,
    });

    const mainProps = selectMainProps(newState);

    expect(mainProps).toMatchObject({
      input: "",
      messages: [],
      activeMessage: "",
      conversations: [],
      isOpen: false,
      selectedModel: EModel.GPT3,
    } as TMainProps);
  });
});

describe("Should be able to enter input into the input field", () => {
  it("should have the input empty initially", () => {
    const mainProps = selectMainProps(initialState);

    expect(mainProps).toMatchObject({
      input: "",
      messages: [],
      activeMessage: "",
      conversations: [],
      isOpen: true,
      selectedModel: EModel.GPT3,
    } as TMainProps);
  });

  it("should have input value set when providing input", () => {
    const newState = reducer(initialState, {
      id: { id: EControlId.QueryInput },
      type: EActionType.Change,
      payload: "This is the new input that I typed into the query input",
    });

    const mainProps = selectMainProps(newState);

    expect(mainProps).toMatchObject({
      input: "This is the new input that I typed into the query input",
      messages: [],
      activeMessage: "",
      conversations: [],
      isOpen: true,
      selectedModel: EModel.GPT3,
    } as TMainProps);
  });
});

describe("Should be able to toggle the model", () => {
  it("should have chat gpt 3 initially", () => {
    const mainProps = selectMainProps(initialState);

    expect(mainProps).toMatchObject({
      input: "",
      messages: [],
      activeMessage: "",
      conversations: [],
      isOpen: true,
      selectedModel: EModel.GPT3,
    } as TMainProps);
  });

  it("should toggle to chat gpt 4 model when click on toggle", () => {
    const newState = reducer(initialState, {
      id: { id: EControlId.Toggle },
      type: EActionType.Click,
    });

    const mainProps = selectMainProps(newState);

    expect(mainProps).toMatchObject({
      input: "",
      messages: [],
      activeMessage: "",
      conversations: [],
      isOpen: true,
      selectedModel: EModel.GPT4,
    } as TMainProps);
  });
});

describe("Should submit the response and create a conversation", () => {
  it("should have no conversations and messages initially", () => {
    const mainProps = selectMainProps(initialState);

    expect(mainProps).toMatchObject({
      input: "",
      messages: [],
      activeMessage: "",
      conversations: [],
      isOpen: true,
      selectedModel: EModel.GPT3,
    } as TMainProps);
  });

  it("should submit message and create conversation for today", () => {
    const newState001 = reducer(initialState, {
      id: { id: EControlId.QueryInput },
      type: EActionType.Change,
      payload: "This is the new input that I typed into the query input",
    });

    const newState002 = reducer(newState001, {
      id: { id: EControlId.Submit },
      type: EActionType.Click,
    });

    const mainProps = selectMainProps(newState002);

    expect(mainProps).toMatchObject({
      input: "",
      messages: [
        {
          text: "This is the new input that I typed into the query input",
          user: EUser.User,
        },
      ],
      activeMessage: "",
      conversations: [
        {
          category: "Today",
          conversations: [{ name: "Conversation 1", isActive: true }],
        },
      ],
      isOpen: true,
      selectedModel: EModel.GPT3,
    } as TMainProps);
  });
});
