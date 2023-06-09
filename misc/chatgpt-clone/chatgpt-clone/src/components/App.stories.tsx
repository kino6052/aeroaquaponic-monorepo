import { Main } from "./App";
import { EModel } from "./enums";
import { TMainProps } from "./types";

export default {
  title: "ChatGPT/App",
  component: Main,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    // layout: "fullscreen",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const InitialState = {
  args: {} as TMainProps,
};

export const OpenState = {
  args: {
    isOpen: true,
  } as TMainProps,
};

export const InputState = {
  args: {
    isOpen: true,
    input: "This is an awesome input!",
  } as TMainProps,
};

export const ModelState = {
  args: {
    selectedModel: EModel.GPT3,
    isOpen: true,
    input: "This is an awesome input!",
  } as TMainProps,
};
