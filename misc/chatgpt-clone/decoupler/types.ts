import { EModel, EReaction, EUser } from "./enums";

export type TMessage = {
  id: string;
  user: EUser;
  text: string;
  reaction?: EReaction;
};

export type TConversation = {
  id: string;
  name: string;
  isActive?: boolean;
  model?: EModel;
  messages: TMessage[];
  isEditing?: boolean;
  tempName?: string;
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
  isWaitingForResponse?: boolean;
  isOpen?: boolean;
  selectedModel?: EModel;
};

export enum EControlId {
  ExpandButton = "ExpandButton",
  QueryInput = "QueryInput",
  Toggle = "Toggle",
  NewChat = "NewChat",
  Submit = "Submit",
  QueryResponse = "QueryResponse",
  Conversation = "Conversation",
  LikeButton = "LikeButton",
  DislikeButton = "DislikeButton",
  EditConversation = "EditConversation",
  RemoveConversation = "RemoveConversation",
  ShareConversation = "ShareConversation",
  ConversationEditAccept = "ConversationEditAccept",
  ConversationEditCancel = "ConversationEditCancel",
  ConversationEditInput = "ConversationEditInput",
}

export enum EActionType {
  Click = "click",
  Change = "change",
  Enter = "enter",
  IO = "io",
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
  activeConversationId?: string;
  isOpen: boolean;
  selectedModel: EModel;
  isWaitingForResponse?: boolean;
}
export interface ICommand {
  execute(): IState;
}
