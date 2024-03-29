import { App } from ".";
import { TMainProps } from "../../types";

// Start the decouupler
import "../../index";

const initialState: TMainProps = {
  input: "",
  messages: [],
  isOpen: true,
  conversations: [],
};

export default {
  title: "ChatGPT/InteractiveApp",
  component: App,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    // layout: "fullscreen",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const InteractiveApp = {
  args: initialState,
};
