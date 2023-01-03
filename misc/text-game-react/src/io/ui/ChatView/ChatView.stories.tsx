import React from "react";
import { IState } from "../../../bridge";
import { DecisionTree } from "./DecisionTree";

export default {
  title: "Example/DecisionTree",
  component: DecisionTree,
};

const Template = (args: IState) => <DecisionTree {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing

const state001 = {
  data: {
    root: {
      id: "root",
      title: "Get Started",
      description: "",
      children: [],
    },
  },
  history: [],
  next: ["root"],
};

export const Default = Template.bind({});
// @ts-ignore
Default.args = state001;

const state002 = {
  data: {
    root: {
      id: "root",
      title: "Select Options",
      description: "",
      children: ["op1"],
    },
    op1: {
      id: "op1",
      title: "Option 1",
      description: "You Selected Option 1",
      children: [],
    },
    op2: {
      id: "op2",
      title: "Option 2",
      description: "You Selected Option 2",
      children: [],
    },
  },
  history: [],
  currentId: "root",
  next: ["op1", "op2"],
};

export const Two = Template.bind({});
// @ts-ignore
Two.args = state002;

const state003 = {
  data: {
    root: {
      id: "root",
      title: "Select Options",
      description: "",
      children: ["op1"],
    },
    op1: {
      id: "op1",
      title: "Option 1",
      description: "You Selected Option 1",
      children: ["op3"],
    },
    op2: {
      id: "op2",
      title: "Option 2",
      description: "You Selected Option 2",
      children: [],
    },
    op3: {
      id: "op3",
      title: "Option 3",
      description: "You Selected Option 3",
      children: [],
    },
  },
  history: ["root"],
  currentId: "op1",
  next: ["op3"],
};

export const Three = Template.bind({});
// @ts-ignore
Three.args = state003;
