import { EUser, EModel } from "./enums";

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
