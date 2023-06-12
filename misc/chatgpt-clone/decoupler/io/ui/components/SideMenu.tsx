import React from "react";
import { Icon } from "./Icon";

import {
  faBook,
  faCheck,
  faClose as faCross,
  faEdit,
  faMessage,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { EControlId, TConversationCategory } from "../../../types";
import { EventWrapper } from "./EventWrapper";

import "./SideMenu.css";

export const CollapseButton: React.FC<{ isOpen?: boolean }> = ({
  isOpen = false,
}) => {
  return !isOpen ? (
    <EventWrapper
      id={{
        id: EControlId.ExpandButton,
      }}
    >
      <button className="SideMenuButton uncollapse">
        <Icon icon={faBook} />
      </button>
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
        </>
      )}
    </span>
  );
};

const Conversation: React.FC<{
  conversation: {
    name: string;
    isActive: boolean;
    id: string;
    isEditing?: boolean;
    tempName?: string;
  };
}> = ({ conversation }) => (
  <EventWrapper
    key={conversation.id}
    id={{
      id: EControlId.Conversation,
      uid: conversation.id,
    }}
  >
    <span
      tabIndex={0}
      className={`conversation ${conversation.isActive ? "active" : ""}`}
    >
      <Icon icon={faMessage} />
      {conversation.isEditing && (
        <EventWrapper
          id={{
            id: EControlId.ConversationEditInput,
            uid: conversation.id,
          }}
        >
          <input
            autoFocus
            className="edit-title"
            value={conversation.tempName}
          />
        </EventWrapper>
      )}
      {!conversation.isEditing && (
        <span className="title">{conversation.name}</span>
      )}
      {conversation.isActive && (
        <Icons id={conversation.id} isEditing={conversation.isEditing} />
      )}
    </span>
  </EventWrapper>
);

const Category: React.FC<{
  category: {
    category: string;
    conversations: Array<{
      name: string;
      isActive: boolean;
      id: string;
      isEditing?: boolean;
      tempName?: string;
    }>;
  };
}> = ({ category }) => (
  <div className="category" key={category.category}>
    <span className="label">{category.category}</span>
    {category.conversations.map((conversation) => (
      <Conversation conversation={conversation} key={conversation.id} />
    ))}
  </div>
);

const Buttons: React.FC = () => (
  <div className="buttons">
    <EventWrapper
      id={{
        id: EControlId.NewChat,
      }}
    >
      <button className="SideMenuButton grow">
        <Icon icon={faPlus} /> New Chat
      </button>
    </EventWrapper>
    <EventWrapper
      id={{
        id: EControlId.ExpandButton,
      }}
    >
      <button className="SideMenuButton">
        <Icon icon={faBook} />
      </button>
    </EventWrapper>
  </div>
);

export const SideMenu: React.FC<{
  isOpen: boolean;
  conversations: TConversationCategory[];
}> = ({ isOpen, conversations = [] }) => (
  <div className={`SideMenuWrapper ${isOpen ? "isOpen" : ""}`}>
    <Buttons />
    <div className="conversations">
      {conversations.map((category) => (
        <Category category={category} key={category.category} />
      ))}
    </div>
    <div className="user"></div>
  </div>
);
