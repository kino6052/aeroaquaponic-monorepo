import { v4 as uuid } from "uuid";
import {
  ICommand,
  IState,
  TAction,
  TConversation,
  TMessage,
} from "../../types";
import { EUser } from "../../enums";

export class SubmitCommand implements ICommand {
  constructor(private state: IState, private action: TAction<any>) {}

  private getConversationCount(): number {
    return this.state.conversations.reduce(
      (sum, c) => sum + (c.conversations?.length || 0),
      0
    );
  }

  private createNewConversation(id: string): TConversation {
    return {
      id: id,
      name: `Conversation ${this.getConversationCount() + 1}`,
      isActive: true,
      messages: [],
      model: this.state.selectedModel,
    };
  }

  private createNewMessage(id: string): TMessage {
    return {
      id: id,
      user: EUser.User,
      text: this.state.input,
    };
  }

  private getUpdatedCategory(
    newConversation: TConversation,
    categoryId: string
  ) {
    const category = this.state.conversations[0] ?? {
      id: categoryId,
      category: "Today",
      conversations: [],
    };
    const conversations = this.state.activeConversationId
      ? []
      : [newConversation];

    return {
      ...category,
      conversations: [...conversations, ...(category.conversations || [])],
    };
  }

  private getUpdatedState(
    newConversation: TConversation,
    newMessage: TMessage,
    categoryId: string
  ) {
    return {
      ...this.state,
      input: "",
      activeMessage: "",
      activeConversationId:
        this.state.activeConversationId || newConversation.id,
      messages: [...this.state.messages, newMessage],
      conversations: [this.getUpdatedCategory(newConversation, categoryId)],
      isWaitingForResponse: true,
    };
  }

  execute(): IState {
    const conversationId = uuid();
    const categoryId = uuid();
    const messageId = uuid();

    const newConversation = this.createNewConversation(conversationId);
    const newMessage = this.createNewMessage(messageId);

    return this.getUpdatedState(newConversation, newMessage, categoryId);
  }
}
