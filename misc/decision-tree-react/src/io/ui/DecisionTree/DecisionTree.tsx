import React from "react";
import { IState } from "../../../bridge";
import "./index.css";

export const DecisionTree = (props: IState) => {
  const { data, currentId, next, history } = props;
  return (
    <div className="container">
      <div className="tree">
        <h2>Decision Tree</h2>
        <ul className="list">
          {history.map((id) => (
            <li className="history">{data[id].title}</li>
          ))}
          {currentId && <li className="current">{data[currentId].title}</li>}
          {next.map((id) => (
            <li>{data[id].title}</li>
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
