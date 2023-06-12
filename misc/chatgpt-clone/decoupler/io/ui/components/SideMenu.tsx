import React from "react";
import styled from "styled-components";
import { Icon } from "./Icon";
import { EStyleConstant } from "../../../enums";

import {
  faBook,
  faEdit,
  faMessage,
  faPlus,
  faTrash,
  faUpload,
  faCheck,
  faClose as faCross,
} from "@fortawesome/free-solid-svg-icons";
import { EventWrapper } from "./EventWrapper";
import { EControlId, TConversationCategory } from "../../../types";

const SideMenuWrapper = styled.div<{ isOpen: boolean }>`
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

  .buttons {
    display: flex;
    gap: 8px;
  }

  .conversations {
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

    .category {
      display: flex;
      flex-direction: column;
      gap: 4px;

      .label {
        display: flex;
        padding: 8px;
        font-size: 12px;
        font-weight: 600;
        color: grey;
      }

      .conversation {
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

        .title {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          flex-grow: 1;
        }

        .edit-title {
          display: inline-flex;
          background: transparent;
          border: 1px solid white;
          padding: 0 4px;
          color: white;
          flex-shrink: 1;
          width: inherit;
        }

        .icons {
          display: inline-flex;
          gap: 4px;
        }

        :hover {
          border: 1px solid hsla(0, 0%, 100%, 0.2);
        }
      }
    }
  }
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

const Icons: React.FC<{ id: string; isEditing: boolean }> = ({
  id,
  isEditing = false,
}) => {
  return (
    <span className="icons">
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
    </span>
  );
};

export const SideMenu: React.FC<{
  isOpen: boolean;
  conversations: TConversationCategory[];
}> = ({ isOpen, conversations = [] }) => (
  <SideMenuWrapper isOpen={isOpen}>
    <div className="buttons">
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
    </div>
    <div className="conversations">
      {conversations.map(({ category, conversations }) => {
        return (
          <div className="category" key={category}>
            <span className="label">{category}</span>
            {conversations?.map(
              ({ name, isActive, id, isEditing = false, tempName }) => (
                <EventWrapper
                  key={id}
                  id={{
                    id: EControlId.Conversation,
                    uid: id,
                  }}
                >
                  <span
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
                        <input
                          autoFocus
                          className="edit-title"
                          value={tempName}
                        />
                      </EventWrapper>
                    )}
                    {!isEditing && <span className="title">{name}</span>}
                    {isActive && <Icons id={id} isEditing={isEditing} />}
                  </span>
                </EventWrapper>
              )
            )}
          </div>
        );
      })}
    </div>
    <div className="user"></div>
  </SideMenuWrapper>
);
