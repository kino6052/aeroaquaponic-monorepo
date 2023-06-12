import { IState, TAction } from "../types";
import { commandMap } from "./commands";

export function compose<T>(state: IState) {
  return (actions: TAction<T>[]) =>
    actions.reduce((_state, action) => reducer(_state, action), state);
}

export function reducer<T>(state: IState, action: TAction<T>): IState {
  const Command = commandMap.get(action.id?.id);

  if (!Command) {
    // Handle cases where there is no matching command
    return state;
  }

  // Instantiate the command and execute it
  const command = new Command(state, action);
  return command.execute();
}
