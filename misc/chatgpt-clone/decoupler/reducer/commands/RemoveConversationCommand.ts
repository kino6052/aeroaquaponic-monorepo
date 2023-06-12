import { EModel } from "../../enums";
import { EActionType, ICommand, IState, TAction } from "../../types";

export class RemoveConversationCommand implements ICommand {
  constructor(private state: IState, private action: TAction<any>) {}

  execute(): IState {
    if (this.action.type !== EActionType.Click) return this.state;

    const selectedConversation = this.state.conversations
      .map((category) => {
        return category.conversations?.find((conversation) => {
          return conversation.id === this.action.id.uid;
        });
      })
      .find((v) => !!v);

    if (!selectedConversation) return this.state;

    const extra: Partial<IState> = selectedConversation.isActive
      ? {
          messages: [],
          selectedModel: EModel.GPT3,
          activeConversationId: undefined,
        }
      : {};

    return {
      ...this.state,
      ...extra,
      conversations: this.state.conversations
        .map((category) => ({
          ...category,
          conversations: category.conversations?.filter((conversation) => {
            return conversation.id !== selectedConversation?.id;
          }),
        }))
        .filter((c) => !!c.conversations && c.conversations?.length > 0),
    };
  }
}
