import { Id, IState } from "../interfaces";

export const selectCurrent = (state: IState) => state.current;
export const selectHistory = (state: IState) => state.history;
export const selectChildren = (state: IState, id: Id) =>
  state.data[id]?.children;
