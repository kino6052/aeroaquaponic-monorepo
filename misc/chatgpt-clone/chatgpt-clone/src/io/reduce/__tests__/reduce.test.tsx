import { v4 as uuidv4 } from "uuid";

export enum EUser {
  User = "user",
  ChatGPT = "gpt",
}

export enum EModel {
  GPT3 = "GPT-3.5",
  GPT4 = "GPT-4.0",
}

export enum EStyleConstant {
  LeftPanelWidth = "280px",
  TransitionDuration = 0.1,
}

export type TMessage = { user: EUser; text: string };

export type TConversation = {
  id: string;
  name: string;
  isActive?: boolean;
};

export type TConversationCategory = {
  id: string;
  category: string;
  conversations?: TConversation[];
};

export type TMainProps = {
  input: string;
  activeMessage?: string;
  messages: TMessage[];
  conversations?: TConversationCategory[];
  isOpen?: boolean;
  selectedModel?: EModel;
};

interface IState {
  // TODO: Define fields
}

enum EControlId {
  ExpandButton = "ExpandButton",
  QueryInput = "QueryInput",
  Toggle = "Toggle",
  NewChat = "NewChat",
  Submit = "Submit",
}

enum EActionType {
  Click,
  Input,
}

type TAction<T> = {
  type: EActionType;
  id: { id: EControlId; index?: number };
  payload?: T;
};

interface IState {
  input: string;
  messages: TMessage[];
  activeMessage: string;
  conversations: TConversationCategory[];
  isOpen: boolean;
  selectedModel: EModel;
}

const initialState: IState = {
  input: "",
  messages: [],
  activeMessage: "",
  conversations: [],
  isOpen: true,
  selectedModel: EModel.GPT3,
};

const selectMainProps = (state: IState): TMainProps => {
  return {
    input: state.input,
    messages: state.messages,
    activeMessage: state.activeMessage,
    conversations: state.conversations,
    isOpen: state.isOpen,
    selectedModel: state.selectedModel,
  };
};

function reduce<T>(state: IState, action: TAction<T>): IState {
  switch (action.id.id) {
    case EControlId.ExpandButton:
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    case EControlId.QueryInput:
      return {
        ...state,
        input: action.payload as string,
      };

    case EControlId.Toggle:
      return {
        ...state,
        selectedModel:
          state.selectedModel === EModel.GPT3 ? EModel.GPT4 : EModel.GPT3,
      };

    case EControlId.Submit:
      const newConversation: TConversation = {
        id: uuidv4(),
        name: "Conversation " + (state.conversations.length + 1),
        isActive: true,
      };

      const newCategory: TConversationCategory = {
        id: uuidv4(),
        category: "Today",
        conversations: [newConversation],
      };

      const newMessage: TMessage = {
        user: EUser.User,
        text: state.input,
      };

      return {
        ...state,
        input: "",
        activeMessage: newMessage.text,
        messages: [...state.messages, newMessage],
        conversations: [...state.conversations, newCategory],
      };

    default:
      return state;
  }
}

describe("Should correctly collapse and uncollapse side panel", () => {
  it("should have the pannel open initially", () => {
    const mainProps = selectMainProps(initialState);

    expect(mainProps).toBe({
      input: "",
      messages: [],
      activeMessage: "",
      conversations: [],
      isOpen: true,
      selectedModel: EModel.GPT3,
    } as TMainProps);
  });

  it("should hide the pannel when click on expand button", () => {
    const newState = reduce(initialState, {
      id: { id: EControlId.ExpandButton },
      type: EActionType.Click,
    });

    const mainProps = selectMainProps(newState);

    expect(mainProps).toBe({
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

    expect(mainProps).toBe({
      input: "",
      messages: [],
      activeMessage: "",
      conversations: [],
      isOpen: true,
      selectedModel: EModel.GPT3,
    } as TMainProps);
  });

  it("should have input value set when providing input", () => {
    const newState = reduce(initialState, {
      id: { id: EControlId.QueryInput },
      type: EActionType.Input,
      payload: "This is the new input that I typed into the query input",
    });

    const mainProps = selectMainProps(newState);

    expect(mainProps).toBe({
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

    expect(mainProps).toBe({
      input: "",
      messages: [],
      activeMessage: "",
      conversations: [],
      isOpen: true,
      selectedModel: EModel.GPT3,
    } as TMainProps);
  });

  it("should toggle to chat gpt 4 model when click on toggle", () => {
    const newState = reduce(initialState, {
      id: { id: EControlId.Toggle },
      type: EActionType.Click,
    });

    const mainProps = selectMainProps(newState);

    expect(mainProps).toBe({
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

    expect(mainProps).toBe({
      input: "",
      messages: [],
      activeMessage: "",
      conversations: [],
      isOpen: true,
      selectedModel: EModel.GPT3,
    } as TMainProps);
  });

  it("should submit message and create conversation for today", () => {
    const newState001 = reduce(initialState, {
      id: { id: EControlId.QueryInput },
      type: EActionType.Input,
      payload: "This is the new input that I typed into the query input",
    });

    const newState002 = reduce(newState001, {
      id: { id: EControlId.Submit },
      type: EActionType.Click,
    });

    const mainProps = selectMainProps(newState002);

    expect(mainProps).toBe({
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
          id: "1",
          conversations: [{ id: "1", name: "Conversation 1", isActive: true }],
        },
      ],
      isOpen: true,
      selectedModel: EModel.GPT3,
    } as TMainProps);
  });
});
