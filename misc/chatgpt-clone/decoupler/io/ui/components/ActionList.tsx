import React from "react";
import { TAction } from "../../../types";
import styled from "styled-components";

const ActionListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  border: 1px dashed grey;
  top: 0;
  right: 0;
  z-index: 1;
  max-width: 300px;
  margin: 8px;
  flex-wrap: wrap;
  box-sizing: border-box;
  overflow: scroll;

  ul {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    li {
      padding: 8px;
      border: 1px dashed white;
      margin: 8px;
      box-sizing: border-box;
    }
  }
`;

export const ActionList: React.FC<{ actions: TAction<any>[] }> = React.memo(
  ({ actions }) => {
    return (
      <ActionListWrapper>
        <ul>
          {actions.map((action) => {
            const actionString = JSON.stringify(action);
            return <li key={actionString}>{actionString}</li>;
          })}
        </ul>
      </ActionListWrapper>
    );
  }
);
