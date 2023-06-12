import { EActionType, ICommand, IState, TAction } from "../../types";

export class EditConversationCommand implements ICommand {
  constructor(private state: IState, private action: TAction<any>) {}

  execute(): IState {
    if (this.action.type !== EActionType.Click) return this.state;

    return {
      ...this.state,
      conversations: this.state.conversations.map((category) => ({
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
}
