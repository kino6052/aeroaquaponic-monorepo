import { Main } from "./App";
import { EModel, EUser } from "../../../enums";
import { TMainProps } from "../../../types";

export default {
  title: "ChatGPT/App",
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
