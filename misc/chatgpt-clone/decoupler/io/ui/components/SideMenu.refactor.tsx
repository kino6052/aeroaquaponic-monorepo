import React, { PropsWithChildren } from "react";
import styled from "styled-components";

import {
  faBook,
  faCheck,
  faClose as faCross,
  faEdit,
  faMessage,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EStyleConstant } from "../../../enums";

const _SideMenu = styled.div<{ isOpen: boolean }>`
  display: flex;
  position: fixed;
  gap: 16px;
  flex-direction: column;
  transition: width ${EStyleConstant.TransitionDuration}s;
  width: ${({ isOpen }) => (isOpen ? EStyleConstant.LeftPanelWidth : 0)};
  background: #202123;
  padding: 16px;
  box-sizing: border-box;
  height: 100vh;
`;

const _Buttons = styled.span`
  display: flex;
  gap: 8px;
`;

const SideMenuButton = styled.button`
  &.grow {
    flex-grow: 1;
  }

  gap: 8px;
  display: flex;
  background: transparent;
  align-items: center;
  border: none;
  border: 1px solid hsla(0, 0%, 100%, 0.2);
  color: white;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: hsla(0, 0%, 100%, 0.2);
  }

  &.uncollapse {
    position: fixed;
    top: 0;
    left: 0;
    margin: 4px 12px;
    z-index: 100;
  }
`;

export const CollapseButton: React.FC<{ isOpen?: boolean }> = ({
  isOpen = false,
}) => {
  return !isOpen ? (
    <EventWrapper
      id={{
        id: EControlId.ExpandButton,
      }}
    >
      <SideMenuButton className="uncollapse">
        <Icon icon={faBook} />
      </SideMenuButton>
    </EventWrapper>
  ) : null;
};

const _Icons = styled.span`
  display: inline-flex;
  gap: 4px;
`;

const Icons: React.FC<{ id: string; isEditing: boolean }> = ({
  id,
  isEditing = false,
}) => {
  return (
    <_Icons>
      {isEditing && (
        <>
          <EventWrapper
            id={{
              id: EControlId.ConversationEditAccept,
              uid: id,
            }}
          >
            <Icon icon={faCheck} size="sm" tabIndex={0} />
          </EventWrapper>
          <EventWrapper
            id={{
              id: EControlId.ConversationEditCancel,
              uid: id,
            }}
          >
            <Icon icon={faCross} size="sm" tabIndex={0} />
          </EventWrapper>
        </>
      )}
      {!isEditing && (
        <>
          <EventWrapper
            id={{
              id: "EditConversation" as EControlId,
              uid: id,
            }}
          >
            <Icon icon={faEdit} size="sm" tabIndex={0} />
          </EventWrapper>
          <EventWrapper
            id={{
              id: "RemoveConversation" as EControlId,
              uid: id,
            }}
          >
            <Icon icon={faTrash} size="sm" tabIndex={0} />
          </EventWrapper>
          {/* <EventWrapper
            id={{
              id: "ShareConversation" as EControlId,
              uid: id,
            }}
          >
            <Icon icon={faUpload} size="sm" />
          </EventWrapper> */}
        </>
      )}
    </_Icons>
  );
};

export const Buttons: React.FC<{}> = ({}) => (
  <_Buttons>
    <EventWrapper
      id={{
        id: EControlId.NewChat,
      }}
    >
      <SideMenuButton className="grow">
        <Icon icon={faPlus} /> New Chat
      </SideMenuButton>
    </EventWrapper>
    <EventWrapper
      id={{
        id: EControlId.ExpandButton,
      }}
    >
      <SideMenuButton>
        <Icon icon={faBook} />
      </SideMenuButton>
    </EventWrapper>
  </_Buttons>
);

const _Conversations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;
  padding-right: 8px;
  width: 100%;

  /* This will change the width and the background color of the scrollbar */
  ::-webkit-scrollbar {
    width: 2px; /* Change width of scroll bar */
    background-color: transparent; /* Change background color */
  }

  /* This will change the color of the scrollbar thumb (the moving part) */
  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2); /* Change thumb color */
    border-radius: 10px; /* Make it round */
  }

  /* This will change the color of the scrollbar track (the stationary part) */
  ::-webkit-scrollbar-track {
    background-color: transparent; /* Change track color */
    border-radius: 8px; /* Make it round */
  }
`;

const _Category = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const _Label = styled.span`
  display: flex;
  padding: 8px;
  font-size: 12px;
  font-weight: 600;
  color: grey;
`;

const _Conversation = styled.div`
  display: flex;
  background: transparent;
  border: none;
  width: 100%;
  color: white;
  padding: 8px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  box-sizing: border-box;
  border: 1px solid transparent;
  gap: 12px;

  &.active {
    background: rgb(64, 65, 79);
  }

  :hover {
    border: 1px solid hsla(0, 0%, 100%, 0.2);
  }
`;

const _Title = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex-grow: 1;
`;

const _EditTitle = styled.input`
  display: inline-flex;
  background: transparent;
  border: 1px solid white;
  padding: 0 4px;
  color: white;
  flex-shrink: 1;
  width: inherit;
`;

export const Conversations: React.FC<{
  conversations: TConversationCategory[];
}> = ({ conversations }) =>
  conversations.map(({ category, conversations, id }) => {
    return (
      <_Conversations key={id}>
        <_Category>
          <_Label>{category}</_Label>
          {conversations?.map(
            ({ name, isActive, id, isEditing = false, tempName }) => (
              <EventWrapper
                key={id}
                id={{
                  id: EControlId.Conversation,
                  uid: id,
                }}
              >
                <_Conversation
                  tabIndex={0}
                  className={["conversation", isActive && "active"]
                    .filter((v) => !!v)
                    .join(" ")}
                >
                  <Icon icon={faMessage} />
                  {isEditing && (
                    <EventWrapper
                      id={{
                        id: EControlId.ConversationEditInput,
                        uid: id,
                      }}
                    >
                      <_EditTitle
                        autoFocus
                        className="edit-title"
                        value={tempName}
                      />
                    </EventWrapper>
                  )}
                  {!isEditing && <_Title>{name}</_Title>}
                  {isActive && <Icons id={id} isEditing={isEditing} />}
                </_Conversation>
              </EventWrapper>
            )
          )}
        </_Category>
      </_Conversations>
    );
  });

export const SideMenu: React.FC<{
  isOpen: boolean;
  conversations: TConversationCategory[];
}> = ({ isOpen, conversations = [] }) => (
  <_SideMenu isOpen={isOpen}>
    <Buttons />
    <Conversations conversations={conversations} />
  </_SideMenu>
);
