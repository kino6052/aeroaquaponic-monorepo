import { IState } from "../interfaces";
export const selectOutput = (state: IState) => state.output;
export const selectInput = (state: IState) => state.input;
export const selectIsGoogling = (state: IState) => state.google.isGoogling;
export const selectHasReadManifest = (state: IState) =>
  state.google.options["self-sufficiency"].visited;
export const selectCommands = (state: IState) =>
  Object.entries(state.commands)
    .sort(([key1], [key2]) => (key1 > key2 ? 1 : -1))
    .reduce(
      (acc, [key, value]) => ({ ...acc, [key]: value }),
      {}
    ) as typeof state.commands;
export const selectCommand = (commandName: string, state: IState) =>
  selectCommands(state)[commandName];
