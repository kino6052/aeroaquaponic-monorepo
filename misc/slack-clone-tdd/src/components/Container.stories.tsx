import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Container } from "./Container";

export default {
  title: "Slack/Container",
  component: Container,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Default = Template.bind({});
Default.args = {};
