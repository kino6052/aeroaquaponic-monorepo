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
  return (
    <div className="container">
      <div className="feed"></div>
      <div className="input">
        <input />
      </div>
    </div>
  );
};
