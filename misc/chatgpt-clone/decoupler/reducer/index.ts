import { EModel, EUser } from "../enums";
import {
  EActionType,
  EControlId,
  IState,
  TAction,
  TConversation,
  TConversationCategory,
  TMainProps,
  TMessage,
} from "../types";

import { v4 as uuid } from "uuid";

export const selectMainProps = (state: IState): TMainProps => {
  return {
    input: state.input,
    messages: state.messages,
    activeMessage: state.activeMessage,
    conversations: state.conversations,
    isOpen: state.isOpen,
    selectedModel: state.selectedModel,
  };
};

export function compose<T>(state: IState) {
  return (actions: TAction<T>[]) =>
    actions.reduce((_state, action) => reducer(_state, action), state);
}

export function reducer<T>(state: IState, action: TAction<T>): IState {
  switch (action.id.id) {
    case EControlId.Conversation: {
      const currentConversation = state.conversations
        .map((category) => {
          return category.conversations?.find((conversation) => {
            return conversation.isActive;
          });
        })
        .find((v) => !!v);
      const nextConversation = state.conversations
        .map((category) => {
          return category.conversations?.find((conversation) => {
            return conversation.id === action.id.uid;
          });
        })
        .find((v) => !!v);
      console.warn(nextConversation);
      if (!nextConversation) return state;
      return {
        ...state,
        input: "",
        activeMessage: "",
        activeConversationId: action.id.uid,
        messages: nextConversation.messages,
        conversations: state.conversations.map((category) => ({
          ...category,
          conversations: category.conversations?.map((conversation) => {
            if (conversation.isActive) {
              return {
                ...conversation,
                isActive: false,
                messages: state.messages,
              };
            }
            if (conversation.id === action.id.uid) {
              return {
                ...conversation,
                isActive: true,
              };
            }
            return {
              ...conversation,
              isActive: false,
            };
          }),
        })),
      };
    }
    case EControlId.NewChat: {
      return {
        ...state,
        input: "",
        activeMessage: "",
        activeConversationId: undefined,
        messages: [],
        conversations: state.conversations.map((category) => ({
          ...category,
          conversations: category.conversations?.map((conversation) => {
            if (!conversation.isActive) return conversation;
            return {
              ...conversation,
              messages: state.messages,
              isActive: false,
            };
          }),
        })),
      };
    }
    case EControlId.QueryResponse:
      const payload = action.payload as Partial<{
        text: string;
        isDone: boolean;
      }>;
      if (!payload || !payload.text) return state;
      const activeMessage = `${state.activeMessage} ${payload.text || ""}`;
      if (!payload.isDone) {
        return {
          ...state,
          activeMessage,
        };
      }
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            text: activeMessage,
            user: EUser.ChatGPT,
          },
        ],
        isWaitingForResponse: false,
        activeMessage: "",
      };
    case EControlId.ExpandButton:
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    case EControlId.QueryInput:
      if (action.type !== EActionType.Change) return state;
      return {
        ...state,
        input: action.payload as string,
      };

    case EControlId.Toggle:
      return {
        ...state,
        selectedModel:
          state.selectedModel === EModel.GPT3 ? EModel.GPT4 : EModel.GPT3,
      };

    case EControlId.Submit:
      const newConversation: TConversation = {
        id: uuid(),
        name: "Conversation " + (state.conversations.length + 1),
        isActive: true,
        messages: [],
      };

      const newCategory: TConversationCategory = {
        id: uuid(),
        category: "Today",
        conversations: [newConversation],
      };

      const newMessage: TMessage = {
        user: EUser.User,
        text: state.input,
      };

      return {
        ...state,
        input: "",
        activeMessage: "",
        activeConversationId: state.activeConversationId || newConversation.id,
        messages: [...state.messages, newMessage],
        conversations: [
          ...(state.activeConversationId ? [] : [newCategory]),
          ...state.conversations,
        ],
        isWaitingForResponse: true,
      };

    default:
      return state;
  }
}
