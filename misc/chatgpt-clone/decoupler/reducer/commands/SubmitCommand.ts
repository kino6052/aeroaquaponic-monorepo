import { v4 as uuid } from "uuid";
import {
  ICommand,
  IState,
  TAction,
  TConversation,
  TConversationCategory,
  TMessage,
} from "../../types";
import { EUser } from "../../enums";

export class SubmitCommand implements ICommand {
  constructor(private state: IState, private action: TAction<any>) {}

  execute(): IState {
    const newConversation: TConversation = {
      id: uuid(),
      name:
        "Conversation " +
        (this.state.conversations.reduce((sum, c) => {
          return sum + (c.conversations?.length || 0);
        }, 0) +
          1),
      isActive: true,
      messages: [],
      model: this.state.selectedModel,
    };

    const newCategory: TConversationCategory = {
      id: uuid(),
      category: "Today",
      conversations: [],
    };

    const newMessage: TMessage = {
      id: uuid(),
      user: EUser.User,
      text: this.state.input,
    };

    const category = this.state.conversations?.[0] || newCategory;

    return {
      ...this.state,
      input: "",
      activeMessage: "",
      activeConversationId:
        this.state.activeConversationId || newConversation.id,
      messages: [...this.state.messages, newMessage],
      conversations: [
        {
          ...category,
          conversations: [
            ...(this.state.activeConversationId ? [] : [newConversation]),
            ...(category.conversations || []),
          ],
        },
      ],
      isWaitingForResponse: true,
    };
  }
}
