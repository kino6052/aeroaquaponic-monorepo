import { Main } from "./App";
import { EModel, EReaction, EUser } from "../../../enums";
import { TMainProps } from "../../../types";

export default {
  title: "ChatGPT/App/Example Scenarios",
  component: Main,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    // layout: "fullscreen",
  },
};

const initialState: TMainProps = {
  input: "",
  messages: [],
  isOpen: true,
  conversations: [],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const InitialState = {
  args: initialState,
};

// NOTE: This happens when you click on the button
export const State001 = {
  args: {
    ...initialState,
    isOpen: false,
  },
};

export const State002 = {
  args: {
    ...initialState,
    input: "This is an awesome input!",
  },
};

export const State003 = {
  args: {
    ...initialState,
    selectedModel: EModel.GPT4,
    isOpen: true,
    input: "This is an awesome input!",
  },
};

export const State004 = {
  args: {
    ...initialState,
    selectedModel: EModel.GPT4,
    isOpen: true,
    input: "",
    messages: [
      {
        text: "This is an awesome input!",
        user: EUser.User,
      },
    ],
    isWaitingForResponse: true,
    activeMessage: "",
    conversations: [
      {
        category: "Today",
        id: "1",
        conversations: [
          {
            id: "1",
            name: "Conversation 1",
            isActive: true,
          },
        ],
      },
    ],
  } as TMainProps,
};

export const State005 = {
  args: {
    ...initialState,
    selectedModel: EModel.GPT4,
    isOpen: true,
    input: "",
    messages: [
      {
        text: "This is an awesome input!",
        user: EUser.User,
      },
    ],
    activeMessage: "This is the only message I can generate",
    conversations: [
      {
        category: "Today",
        id: "1",
        conversations: [
          {
            id: "1",
            name: "Conversation 1",
            isActive: true,
          },
        ],
      },
    ],
  } as TMainProps,
};

export const State006 = {
  args: {
    ...initialState,
    selectedModel: EModel.GPT4,
    isOpen: true,
    input: "",
    messages: [
      {
        text: "This is an awesome input!",
        user: EUser.User,
      },
      {
        text: "This is the only message I can generate...",
        user: EUser.ChatGPT,
      },
    ],
    activeMessage: "",
    conversations: [
      {
        category: "Today",
        id: "1",
        conversations: [
          {
            id: "1",
            name: "Conversation 1",
            isActive: true,
          },
        ],
      },
    ],
  } as TMainProps,
};

export const State007 = {
  args: {
    ...initialState,
    selectedModel: EModel.GPT4,
    isOpen: true,
    input: "",
    messages: [
      {
        text: "This is an awesome input!",
        user: EUser.User,
      },
      {
        text: "This is the only message I can generate...",
        user: EUser.ChatGPT,
      },
    ],
    activeMessage: "",
    conversations: [
      {
        category: "Today",
        id: "1",
        conversations: [
          {
            id: "1",
            name: "Conversation 2",
            isActive: true,
          },
          {
            id: "1",
            name: "Conversation 1",
            isActive: false,
          },
        ],
      },
    ],
  } as TMainProps,
};

export const Liked = {
  args: {
    ...initialState,
    selectedModel: EModel.GPT4,
    isOpen: true,
    input: "",
    messages: [
      {
        text: "This is an awesome input!",
        user: EUser.User,
      },
      {
        text: "This is the only message I can generate...",
        reaction: EReaction.Like,
        user: EUser.ChatGPT,
      },
    ],
    activeMessage: "",
    conversations: [
      {
        category: "Today",
        id: "1",
        conversations: [
          {
            id: "1",
            name: "Conversation 2",
            isActive: true,
          },
          {
            id: "1",
            name: "Conversation 1",
            isActive: false,
          },
        ],
      },
    ],
  } as TMainProps,
};

export const Disliked = {
  args: {
    ...initialState,
    selectedModel: EModel.GPT4,
    isOpen: true,
    input: "",
    messages: [
      {
        text: "This is an awesome input!",
        user: EUser.User,
      },
      {
        text: "This is the only message I can generate...",
        reaction: EReaction.Dislike,
        user: EUser.ChatGPT,
      },
    ],
    activeMessage: "",
    conversations: [
      {
        category: "Today",
        id: "1",
        conversations: [
          {
            id: "1",
            name: "Conversation 2",
            isActive: true,
          },
          {
            id: "1",
            name: "Conversation 1",
            isActive: false,
          },
        ],
      },
    ],
  } as TMainProps,
};

export const Editing = {
  args: {
    ...initialState,
    selectedModel: EModel.GPT4,
    isOpen: true,
    input: "",
    messages: [
      {
        text: "This is an awesome input!",
        user: EUser.User,
      },
      {
        text: "This is the only message I can generate...",
        reaction: EReaction.Dislike,
        user: EUser.ChatGPT,
      },
    ],
    activeMessage: "",
    conversations: [
      {
        category: "Today",
        id: "1",
        conversations: [
          {
            id: "1",
            name: "Conversation 2",
            isActive: true,
            isEditing: true,
          },
          {
            id: "1",
            name: "Conversation 1",
            isActive: false,
          },
        ],
      },
    ],
  } as TMainProps,
};
