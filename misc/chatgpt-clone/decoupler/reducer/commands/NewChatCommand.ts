import { EModel } from "../../enums";
import { ICommand, IState } from "../../types";

export class NewChatCommand implements ICommand {
  constructor(private state: IState) {}

  execute(): IState {
    return {
      ...this.state,
      input: "",
      activeMessage: "",
      activeConversationId: undefined,
      selectedModel: EModel.GPT3,
      messages: [],
      conversations: this.state.conversations.map((category) => ({
        ...category,
        conversations: category.conversations?.map((conversation) => {
          if (!conversation.isActive) return conversation;
          return {
            ...conversation,
            messages: this.state.messages,
            isActive: false,
          };
        }),
      })),
    };
  }
}
