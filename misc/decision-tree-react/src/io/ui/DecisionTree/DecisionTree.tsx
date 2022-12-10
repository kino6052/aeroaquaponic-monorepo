import React from "react";
import { Id, IState } from "../../../bridge";
import { EventWrapper } from "../utils/EventWrapper";
import "./index.css";

const Option: React.FC<{
  className?: "history" | "current" | "next";
  id: Id;
  title: string;
}> = ({ title, id, className }) => (
  <EventWrapper id={id}>
    <li id={id} className={className}>
      {title}
    </li>
  </EventWrapper>
);

export const DecisionTree = (props: IState) => {
  const { data, currentId, next, history } = props;
  console.warn(props);
  return (
    <div className="container">
      <div className="tree">
        <h2>Decision Tree</h2>
        <ul className="list">
          {history.map((id) => (
            <Option
              id={id}
              key={id}
              title={data[id].title}
              className="history"
            />
          ))}
          {currentId && (
            <Option
              id={currentId}
              title={data[currentId].title}
              className="current"
            />
          )}
          {next.map((id) => (
            <Option id={id} key={id} title={data[id].title} className="next" />
          ))}
        </ul>
      </div>
      <div className="description">
        <h2>Description</h2>
        <p>{currentId && data[currentId].description}</p>
      </div>
    </div>
  );
};
