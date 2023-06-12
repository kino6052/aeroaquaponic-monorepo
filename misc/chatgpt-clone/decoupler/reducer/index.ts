import { EModel, EReaction, EUser } from "../enums";
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
  switch (action.id?.id) {
    case EControlId.DislikeButton: {
      if (action.type !== EActionType.Click) return state;

      return {
        ...state,
        messages: state.messages.map((m) => {
          if (m.id !== action.id.uid) return m;

          return {
            ...m,
            reaction: EReaction.Dislike,
          };
        }),
      };
    }
    case EControlId.LikeButton: {
      if (action.type !== EActionType.Click) return state;

      return {
        ...state,
        messages: state.messages.map((m) => {
          if (m.id !== action.id.uid) return m;

          return {
            ...m,
            reaction: EReaction.Like,
          };
        }),
      };
    }
    case EControlId.ConversationEditCancel: {
      if (action.type !== EActionType.Click) return state;

      return {
        ...state,
        conversations: state.conversations.map((category) => ({
          ...category,
          conversations: category.conversations?.map((conversation) => {
            if (!conversation.isActive) return conversation;
            if (!conversation.isEditing) return conversation;
            return {
              ...conversation,
              isEditing: false,
            };
          }),
        })),
      };
    }
    case EControlId.ConversationEditAccept: {
      if (action.type !== EActionType.Click) return state;

      return {
        ...state,
        conversations: state.conversations.map((category) => ({
          ...category,
          conversations: category.conversations?.map((conversation) => {
            if (!conversation.isActive) return conversation;
            if (!conversation.isEditing) return conversation;
            return {
              ...conversation,
              isEditing: false,
              name: conversation.tempName || conversation.name,
            };
          }),
        })),
      };
    }
    case EControlId.ConversationEditInput: {
      if (action.type === EActionType.Enter) {
        return {
          ...state,
          conversations: state.conversations.map((category) => ({
            ...category,
            conversations: category.conversations?.map((conversation) => {
              if (!conversation.isActive) return conversation;
              if (!conversation.isEditing) return conversation;
              return {
                ...conversation,
                isEditing: false,
                name: conversation.tempName || conversation.name,
              };
            }),
          })),
        };
      }

      if (![EActionType.Change].includes(action.type)) return state;

      return {
        ...state,
        conversations: state.conversations.map((category) => ({
          ...category,
          conversations: category.conversations?.map((conversation) => {
            if (!conversation.isActive) return conversation;
            if (!conversation.isEditing) return conversation;
            return {
              ...conversation,
              tempName: (action.payload || "") as string,
            };
          }),
        })),
      };
    }
    case EControlId.EditConversation: {
      if (action.type !== EActionType.Click) return state;

      return {
        ...state,
        conversations: state.conversations.map((category) => ({
          ...category,
          conversations: category.conversations?.map((conversation) => {
            if (!conversation.isActive) return conversation;

            return {
              ...conversation,
              isEditing: true,
              tempName: conversation.name,
            };
          }),
        })),
      };
    }
    case EControlId.RemoveConversation: {
      if (action.type !== EActionType.Click) return state;
      const selectedConversation = state.conversations
        .map((category) => {
          return category.conversations?.find((conversation) => {
            return conversation.id === action.id.uid;
          });
        })
        .find((v) => !!v);
      if (action.type !== EActionType.Click) return state;

      const extra: Partial<IState> = selectedConversation?.isActive
        ? {
            messages: [],
            selectedModel: EModel.GPT3,
            activeConversationId: undefined,
          }
        : {};

      return {
        ...state,
        ...extra,
        conversations: state.conversations
          .map((category) => ({
            ...category,
            conversations: category.conversations?.filter((conversation) => {
              return conversation.id !== selectedConversation?.id;
            }),
          }))
          .filter((c) => !!c.conversations && c.conversations?.length > 0),
      };
    }
    case EControlId.Conversation: {
      if (action.type != EActionType.Click) return state;
      const currentConversation = state.conversations
        .map((category) => {
          return category.conversations?.find((conversation) => {
            return conversation.id === state.activeConversationId;
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
      if (!nextConversation) return state;
      if (nextConversation.id === currentConversation?.id) return state;
      return {
        ...state,
        input: "",
        activeMessage: "",
        activeConversationId: action.id.uid,
        messages: nextConversation.messages,
        selectedModel: nextConversation.model || EModel.GPT3,
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
        selectedModel: EModel.GPT3,
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
            id: uuid(),
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

    case EControlId.QueryInput: {
      if (![EActionType.Change, EActionType.Enter].includes(action.type))
        return state;
      if (action.type === EActionType.Change)
        return {
          ...state,
          input: action.payload as string,
        };
      if (action.type === EActionType.Enter && !action.payload) return state;
      // Refactor

      const newConversation: TConversation = {
        id: uuid(),
        name:
          "Conversation " +
          (state.conversations.reduce((sum, c) => {
            return sum + (c.conversations?.length || 0);
          }, 0) +
            1),
        isActive: true,
        messages: [],
        model: state.selectedModel,
      };

      const newCategory: TConversationCategory = {
        id: uuid(),
        category: "Today",
        conversations: [],
      };

      const newMessage: TMessage = {
        id: uuid(),
        user: EUser.User,
        text: state.input,
      };

      const category = state.conversations?.[0] || newCategory;

      return {
        ...state,
        input: "",
        activeMessage: "",
        activeConversationId: state.activeConversationId || newConversation.id,
        messages: [...state.messages, newMessage],
        conversations: [
          {
            ...category,
            conversations: [
              ...(state.activeConversationId ? [] : [newConversation]),
              ...(category.conversations || []),
            ],
          },
        ],
        isWaitingForResponse: true,
      };
    }

    case EControlId.Toggle:
      if (action.type !== EActionType.Click) return state;
      return {
        ...state,
        selectedModel:
          state.selectedModel === EModel.GPT3 ? EModel.GPT4 : EModel.GPT3,
      };

    case EControlId.Submit: {
      const newConversation: TConversation = {
        id: uuid(),
        name:
          "Conversation " +
          (state.conversations.reduce((sum, c) => {
            return sum + (c.conversations?.length || 0);
          }, 0) +
            1),
        isActive: true,
        messages: [],
        model: state.selectedModel,
      };

      const newCategory: TConversationCategory = {
        id: uuid(),
        category: "Today",
        conversations: [],
      };

      const newMessage: TMessage = {
        id: uuid(),
        user: EUser.User,
        text: state.input,
      };

      const category = state.conversations?.[0] || newCategory;

      return {
        ...state,
        input: "",
        activeMessage: "",
        activeConversationId: state.activeConversationId || newConversation.id,
        messages: [...state.messages, newMessage],
        conversations: [
          {
            ...category,
            conversations: [
              ...(state.activeConversationId ? [] : [newConversation]),
              ...(category.conversations || []),
            ],
          },
        ],
        isWaitingForResponse: true,
      };
    }

    default:
      return state;
  }
}
