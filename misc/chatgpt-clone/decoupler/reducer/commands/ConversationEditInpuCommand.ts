import { EActionType, ICommand, IState, TAction } from "../../types";

export class ConversationEditInputCommand implements ICommand {
  constructor(private state: IState, private action: TAction<any>) {}

  execute(): IState {
    if (this.action.type === EActionType.Enter) {
      return {
        ...this.state,
        conversations: this.state.conversations.map((category) => ({
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

    if (![EActionType.Change].includes(this.action.type)) return this.state;

    return {
      ...this.state,
      conversations: this.state.conversations.map((category) => ({
        ...category,
        conversations: category.conversations?.map((conversation) => {
          if (!conversation.isActive) return conversation;
          if (!conversation.isEditing) return conversation;
          return {
            ...conversation,
            tempName: (this.action.payload || "") as string,
          };
        }),
      })),
    };
  }
}
