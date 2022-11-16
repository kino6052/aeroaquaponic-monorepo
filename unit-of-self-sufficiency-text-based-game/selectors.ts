import { IState } from "./interfaces";
export const selectOutput = (state: IState) => state.output;
export const selectInput = (state: IState) => state.input;
export const selectIsGoogling = (state: IState) => state.google.isGoogling;
export const selectHasReadManifest = (state: IState) =>
  state.google.options["self-sufficiency"].visited;
export const selectCommand = (commandName: string, state: IState) =>
  state.commands[commandName];
