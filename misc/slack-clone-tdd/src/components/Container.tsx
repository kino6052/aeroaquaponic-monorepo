import React from "react";
import { IState } from "../bridge";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 4px;
  border: 1px dashed grey;
  border-radius: 8px;

  .bottom-bar {
    display: flex;
    padding: 0 16px;
  }

  .top-bar {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 16px;
    background: #340f35;
    justify-content: space-between;

    .avatar {
      display: flex;
      width: 24px;
      height: 24px;
    }

    .middle {
      display: flex;
      gap: 24px;
      align-items: center;

      .icon {
        min-width: 16px;
        height: 16px;
        border: 1px dashed white;
        color: white;
      }

      .input {
        display: flex;
        min-width: 504px;
        height: 24px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 6px;
        justify-content: center;
        align-items: center;
        gap: 8px;

        input {
          background: transparent;
          border: none;
          color: white;
        }
      }
    }

    .dots {
      display: flex;
      align-items: center;

      gap: 8px;

      .dot {
        border-radius: 100%;
        display: flex;
        height: 12px;
        width: 12px;

        &.red {
          background: #fc605c;
        }

        &.green {
          background: #34c648;
        }

        &.yellow {
          background: #fcbb40;
        }
      }
    }
  }
`;

export const Container = (props: { state: IState }) => (
  <Wrapper>
    <div className="top-bar">
      <div className="dots">
        <span className="dot red"></span>
        <span className="dot green"></span>
        <span className="dot yellow"></span>
      </div>
      <div className="middle">
        <span className="icon"></span>
        <span className="icon"></span>
        <span className="input">
          <span className="icon"></span>
          <input value={"search organization"}></input>
        </span>
        <span className="icon"></span>
      </div>
      <div className="avatar"></div>
    </div>
    <div className="bottom-bar">
      <div className="left"></div>
      <div className="right"></div>
      <p>Test</p>
    </div>
  </Wrapper>
);
