import { EModel } from "../../enums";
import { ICommand, IState } from "../../types";

export class ToggleCommand implements ICommand {
  constructor(private state: IState) {}

  execute(): IState {
    return {
      ...this.state,
      selectedModel:
        this.state.selectedModel === EModel.GPT3 ? EModel.GPT4 : EModel.GPT3,
    };
  }
}
