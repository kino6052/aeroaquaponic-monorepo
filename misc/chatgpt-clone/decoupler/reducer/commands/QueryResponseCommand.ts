import { v4 as uuid } from "uuid";
import { ICommand, IState, TAction } from "../../types";
import { EUser } from "../../enums";

export class QueryResponseCommand implements ICommand {
  constructor(private state: IState, private action: TAction<any>) {}

  execute(): IState {
    const payload = this.action.payload as Partial<{
      text: string;
      isDone: boolean;
    }>;

    if (!payload || !payload.text) return this.state;

    const activeMessage = `${this.state.activeMessage} ${payload.text || ""}`;

    if (!payload.isDone) {
      return {
        ...this.state,
        activeMessage,
      };
    }

    return {
      ...this.state,
      messages: [
        ...this.state.messages,
        {
          id: uuid(),
          text: activeMessage,
          user: EUser.ChatGPT,
        },
      ],
      isWaitingForResponse: false,
      activeMessage: "",
    };
  }
}
