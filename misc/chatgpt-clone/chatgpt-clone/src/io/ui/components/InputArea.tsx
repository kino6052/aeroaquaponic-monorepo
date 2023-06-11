import { faPlane } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import { EStyleConstant } from "../../../enums";
import { Icon } from "./Icon";
import "./styles.css";

const ChatBottomView = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: rgb(52, 53, 65);
  box-sizing: border-box;
  position: fixed;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  bottom: 0;

  transition: width ${EStyleConstant.TransitionDuration}s,
    left ${EStyleConstant.TransitionDuration}s;

  width: ${({ isOpen }) =>
    isOpen ? `calc(100% - ${EStyleConstant.LeftPanelWidth})` : "100%"};
  left: ${({ isOpen }) => (isOpen ? EStyleConstant.LeftPanelWidth : 0)};
`;

const SubTitle = styled.p`
  font-size: 12px;
  line-height: 16px;
`;

const Input = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  flex-grow: 1;
`;

const TextInput = styled.textarea`
  display: flex;
  width: 100%;
  border-radius: 16px;
  background: rgb(64, 65, 79);
  padding: 16px;
  color: white;
  font-size: 16px;
  height: 24px;
  line-height: 24px;
  resize: none;

  /* This will change the width and the background color of the scrollbar */
  ::-webkit-scrollbar {
    width: 4px; /* Change width of scroll bar */
    background-color: transparent; /* Change background color */
  }

  /* This will change the color of the scrollbar thumb (the moving part) */
  ::-webkit-scrollbar-thumb {
    background-color: white; /* Change thumb color */
    border-radius: 10px; /* Make it round */
  }

  /* This will change the color of the scrollbar track (the stationary part) */
  ::-webkit-scrollbar-track {
    background-color: transparent; /* Change track color */
    border-radius: 8px; /* Make it round */
  }
`;

const Button = styled.button`
  color: transparent;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  line-height: 24px;
  display: flex;
  position: absolute;
  border: 1px dashed grey;
  background: rgb(171, 104, 255);
  right: 16px;
  margin-top: 16px;
  cursor: pointer;

  :disabled {
    cursor: unset;
    background: grey;
  }
`;

export const InputArea: React.FC<
  Partial<{
    isOpen: boolean;
    input: string;
    activeMessage: string;
  }>
> = ({ isOpen = false, input = "", activeMessage = "" }) => {
  return (
    <ChatBottomView isOpen={isOpen}>
      <Input>
        <TextInput value={input} disabled={!!activeMessage} />
        <Button disabled={!!activeMessage || input.length === 0}>
          <Icon icon={faPlane} />
        </Button>
      </Input>
      <SubTitle>
        ChatGPT may produce inaccurate information about people, places, or
        facts. ChatGPT May 24 Version
      </SubTitle>
    </ChatBottomView>
  );
};
