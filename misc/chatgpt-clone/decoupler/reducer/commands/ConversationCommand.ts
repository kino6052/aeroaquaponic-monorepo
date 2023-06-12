import { EModel } from "../../enums";
import { EActionType, ICommand, IState, TAction } from "../../types";

export class ConversationCommand implements ICommand {
  constructor(private state: IState, private action: TAction<any>) {}

  execute(): IState {
    if (this.action.type !== EActionType.Click) return this.state;

    const currentConversation = this.state.conversations
      .map((category) => {
        return category.conversations?.find((conversation) => {
          return conversation.id === this.state.activeConversationId;
        });
      })
      .find((v) => !!v);

    const nextConversation = this.state.conversations
      .map((category) => {
        return category.conversations?.find((conversation) => {
          return conversation.id === this.action.id.uid;
        });
      })
      .find((v) => !!v);

    if (!nextConversation || nextConversation.id === currentConversation?.id) {
      return this.state;
    }

    return {
      ...this.state,
      input: "",
      activeMessage: "",
      activeConversationId: this.action.id.uid,
      messages: nextConversation.messages,
      selectedModel: nextConversation.model || EModel.GPT3,
      conversations: this.state.conversations.map((category) => ({
        ...category,
        conversations: category.conversations?.map((conversation) => {
          if (conversation.isActive) {
            return {
              ...conversation,
              isActive: false,
              messages: this.state.messages,
            };
          }
          if (conversation.id === this.action.id.uid) {
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
}
