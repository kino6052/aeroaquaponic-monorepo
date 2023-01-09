import { IState } from "../../bridge";
export const selectOutput = (state: IState) => state.output;
export const selectInput = (state: IState) => state.input;
export const selectHistory = (state: IState) => state.history;
