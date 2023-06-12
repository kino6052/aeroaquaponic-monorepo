import { ICommand, IState } from "../../types";

export class ExpandButtonCommand implements ICommand {
  constructor(private state: IState) {}

  execute(): IState {
    return {
      ...this.state,
      isOpen: !this.state.isOpen,
    };
  }
}
