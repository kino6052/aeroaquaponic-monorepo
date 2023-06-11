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

import { uuid } from "uuidv4";

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

export function reducer<T>(state: IState, action: TAction<T>): IState {
  switch (action.id.id) {
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
        messages: [...state.messages, newMessage],
        conversations: [...state.conversations, newCategory],
      };

    default:
      return state;
  }
}
