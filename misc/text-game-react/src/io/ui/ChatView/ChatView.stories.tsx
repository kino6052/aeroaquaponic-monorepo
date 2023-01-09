import { IState } from "../../../bridge";
import { ChatView } from "./ChatView";

export default {
  title: "Example/ChatView",
  component: ChatView,
};

const Template = (args: IState) => <ChatView {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing

const state001: IState = {
  history: ["First item", "Second item", "Third item"],
  input: "test",
  output: "",
  entities: {},
};

export const Default = Template.bind({});
// @ts-ignore
Default.args = state001;
