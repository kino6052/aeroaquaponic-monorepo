import React from "react";
import "./index.css";

const DecisionTree = (props) => {
  console.warn(props);
  const { data = {}, currentId = "root", next = [], history = [] } = props;
  return (
    <div class="container">
      <div class="tree">
        <h2>Decision Tree</h2>
        <ul class="list">
          {history.map((id) => (
            <li className="history">{data[id].title}</li>
          ))}
          <li className="current">{data[currentId].title}</li>
          {next.map((id) => (
            <li>{data[id].title}</li>
          ))}
        </ul>
      </div>
      <div class="description">
        <h2>Description</h2>
        <p>{data[currentId].description}</p>
      </div>
    </div>
  );
};

export default {
  title: "Example/DecisionTree",
  component: DecisionTree,
};

const Template = (args = state001) => <DecisionTree {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing

const state001 = {
  data: {
    root: {
      id: "root",
      title: "Select Options",
      description: "",
      children: [],
    },
  },
  history: [],
  currentId: "root",
  next: [],
};

export const Default = Template.bind({});
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
Three.args = state003;
