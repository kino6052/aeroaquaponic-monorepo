// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MainPage } from "./MainPage";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Pages/MainPage",
  component: MainPage,
} as ComponentMeta<typeof MainPage>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof MainPage> = (args) => (
  <MainPage {...args} />
);

export const _MainPage = Template.bind({});

_MainPage.args = {};
