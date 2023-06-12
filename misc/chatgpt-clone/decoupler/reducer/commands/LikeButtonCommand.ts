import { EReaction } from "../../enums";
import { EActionType, ICommand, IState, TAction } from "../../types";

export class LikeButtonCommand implements ICommand {
  constructor(private state: IState, private action: TAction<any>) {}

  execute(): IState {
    if (this.action.type !== EActionType.Click) return this.state;

    return {
      ...this.state,
      messages: this.state.messages.map((m) => {
        if (m.id !== this.action.id.uid) return m;
        return {
          ...m,
          reaction: EReaction.Like,
        };
      }),
    };
  }
}
