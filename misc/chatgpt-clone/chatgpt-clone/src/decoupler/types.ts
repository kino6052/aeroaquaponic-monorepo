import { EModel, EUser } from "./enums";

export type TMessage = { user: EUser; text: string };

export type TConversation = {
  id: string;
  name: string;
  isActive?: boolean;
};

export type TConversationCategory = {
  id: string;
  category: string;
  conversations?: TConversation[];
};

export type TMainProps = {
  input: string;
  activeMessage?: string;
  messages: TMessage[];
  conversations?: TConversationCategory[];
  isOpen?: boolean;
  selectedModel?: EModel;
};

export enum EControlId {
  ExpandButton = "ExpandButton",
  QueryInput = "QueryInput",
  Toggle = "Toggle",
  NewChat = "NewChat",
  Submit = "Submit",
}

export enum EActionType {
  Click = "click",
  Change = "change",
}

export type TAction<T> = {
  type: EActionType;
  id: { id: EControlId; uid?: string };
  payload?: T;
};

export interface IState {
  input: string;
  messages: TMessage[];
  activeMessage: string;
  conversations: TConversationCategory[];
  isOpen: boolean;
  selectedModel: EModel;
}
