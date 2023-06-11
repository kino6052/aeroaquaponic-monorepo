import { PropsWithChildren } from "react";
import styled from "styled-components";
import { EModel, EStyleConstant, EUser } from "../../../enums";
import { Icon } from "./Icon";
import { TMessage } from "./types";

import {
  faClipboard,
  faRobot,
  faThumbsDown,
  faThumbsUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./styles.css";

const ChatAreaWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  background-color: rgb(52, 53, 65);
  position: relative;

  transition: width ${EStyleConstant.TransitionDuration}s,
    left ${EStyleConstant.TransitionDuration}s;

  width: ${({ isOpen }) =>
    isOpen ? `calc(100% - ${EStyleConstant.LeftPanelWidth})` : "100%"};
  left: ${({ isOpen }) => (isOpen ? EStyleConstant.LeftPanelWidth : 0)};

  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .body {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex-grow: 1;
    display: flex;
    width: 100%;
    padding-bottom: 128px;
  }
`;

const MessageWrapper = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  background: none;
  box-sizing: border-box;
  padding: 32px 16px;

  .avatar {
    display: flex;
    flex-basis: 24px;
    min-width: 24px;
    height: 24px;
    border-radius: 4px;
    justify-content: center;

    &.${EUser.User} {
      background: orange;
    }

    &.${EUser.ChatGPT} {
      background: #19c37d;
    }
  }

  .content {
    display: flex;
    flex-basis: auto;
    width: 100%;
    gap: 8px;

    @keyframes blink {
      0% {
        opacity: 1;
      }
      49% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      99% {
        opacity: 0;
      }
    }

    .carret {
      display: inline-flex;
      width: 12px;
      height: 100%;
      background: white;
      animation: blink 1.2s infinite;
    }
  }

  .buttons {
    display: flex;
    flex-basis: auto;

    .button {
      display: flex;
      min-width: 12px;
      height: 12px;
    }
  }

  &.active {
    background: rgb(68, 70, 84);
    border-bottom: rgb(217, 217, 227);
  }
`;

const ToggleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Toggle = styled.div`
  display: flex;
  background: rgb(32, 33, 35);
  padding: 4px;
  border-radius: 8px;
`;

const ModelSelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 16px 0;

  h2 {
    display: inline-flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    gap: 8px;

    span {
      font-size: 16px;
      margin: 4px;
      background: #fae69e;
      color: #927201;
      padding: 2px 8px;
      border-radius: 8px;
      text-transform: uppercase;
    }
  }
`;

const MessageViewWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .heading {
    display: flex;
    justify-content: center;
    font-size: 14px;
    padding: 14px 0;
    background: rgb(68, 70, 84);
    border-bottom: rgb(217, 217, 227);
  }
`;

const Item = styled.button`
  background: none;
  border: none;
  color: rgb(142, 142, 160);
  font-weight: 600;
  display: flex;
  border-radius: 8px;
  padding: 10px 0;
  width: 100px;
  justify-content: center;

  &.active {
    color: white;
    border: 1px solid rgb(78, 79, 96);
    background-color: rgb(64, 65, 79);
  }
`;

// Avatar.tsx;
const Avatar: React.FC<{ user: EUser }> = ({ user }) => (
  <span className={`avatar ${user}`}>
    {user === EUser.ChatGPT && <Icon icon={faRobot} />}
    {user === EUser.User && <Icon icon={faUser} />}
  </span>
);

// MessageContent.tsx
const MessageContent: React.FC<PropsWithChildren<{ isTyping: boolean }>> = ({
  children,
  isTyping,
}) => (
  <span className="content">
    {children} {isTyping && <span className="carret"></span>}
  </span>
);

// MessageButtons.tsx
const MessageButtons: React.FC = () => (
  <div className="buttons">
    <button className="button">
      <Icon icon={faClipboard} size="sm" />
    </button>
    <button className="button">
      <Icon icon={faThumbsUp} size="sm" />
    </button>
    <button className="button">
      <Icon icon={faThumbsDown} size="sm" />
    </button>
  </div>
);

// Message.tsx
const Message: React.FC<
  PropsWithChildren<{
    user: EUser;
    active?: boolean;
    isTyping?: boolean;
  }>
> = ({ children, user, active = false, isTyping = false }) => (
  <MessageWrapper className={active ? "active" : ""}>
    <Avatar user={user} />
    <MessageContent isTyping={isTyping}>{children}</MessageContent>
    {user === EUser.ChatGPT && !isTyping && <MessageButtons />}
  </MessageWrapper>
);

// ToggleItem.tsx
const ToggleItem: React.FC<
  PropsWithChildren<{
    active: boolean;
  }>
> = ({ active, children }) => (
  <Item className={active ? "active" : ""}>{children}</Item>
);

// ModelSelection.tsx
const ModelSelection: React.FC<{ selectedModel: EModel }> = ({
  selectedModel,
}) => (
  <ModelSelectionWrapper>
    <ToggleWrapper>
      <Toggle>
        <ToggleItem active={selectedModel === EModel.GPT3}>
          {EModel.GPT3}
        </ToggleItem>
        <ToggleItem active={selectedModel === EModel.GPT4}>
          {EModel.GPT4}
        </ToggleItem>
      </Toggle>
    </ToggleWrapper>
    <h2>
      ChatGPT <span>plus</span>
    </h2>
  </ModelSelectionWrapper>
);

// MessageList.tsx
const MessageList: React.FC<{
  messages: TMessage[];
  selectedModel: EModel;
  activeMessage: string;
}> = ({ messages, selectedModel, activeMessage }) => (
  <MessageViewWrapper>
    <div className="heading">Model: {selectedModel}</div>
    {messages.map(({ user, text }, i) => {
      return (
        <Message key={text} user={user} active={(i + 1) % 2 === 0}>
          {text}
        </Message>
      );
    })}
    {activeMessage && (
      <Message user={EUser.ChatGPT} isTyping>
        {activeMessage}
      </Message>
    )}
  </MessageViewWrapper>
);

// ChatArea.tsx
export const ChatArea: React.FC<{
  isOpen: boolean;
  selectedModel: EModel;
  messages: TMessage[];
  activeMessage: string;
}> = ({
  isOpen = false,
  selectedModel = EModel.GPT3,
  messages = [],
  activeMessage = "",
}) => {
  const hasMessages = messages.length > 0;
  return (
    <ChatAreaWrapper isOpen={isOpen}>
      <div className="body">
        {!hasMessages && <ModelSelection selectedModel={selectedModel} />}
        {hasMessages && (
          <MessageList
            messages={messages}
            selectedModel={selectedModel}
            activeMessage={activeMessage}
          />
        )}
      </div>
    </ChatAreaWrapper>
  );
};
