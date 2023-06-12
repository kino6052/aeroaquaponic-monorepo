import React from "react";
import styled from "styled-components";
import { EModel } from "../../../enums";
import { CollapseButton, SideMenu } from "./SideMenu";

import { TMainProps } from "../../../types";
import { ChatArea } from "./ChatArea";
import { GlobalStyle } from "./GlobalStyle";
import { InputArea } from "./InputArea";

const AppWrapper = styled.div`
  display: flex;
`;

export const Main: React.FC<TMainProps> = ({
  input = "",
  messages,
  selectedModel = EModel.GPT3,
  isOpen = false,
  conversations = [],
  activeMessage = "",
  isWaitingForResponse = false,
}) => {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <CollapseButton isOpen={isOpen} />
        <SideMenu isOpen={isOpen} conversations={conversations} />
        <ChatArea
          isOpen={isOpen}
          activeMessage={activeMessage}
          messages={messages}
          selectedModel={selectedModel}
          isWaitingForResponse={isWaitingForResponse}
        />
        <InputArea
          input={input}
          isOpen={isOpen}
          activeMessage={activeMessage}
          isWaitingForResponse={isWaitingForResponse}
        />
      </AppWrapper>
    </>
  );
};
