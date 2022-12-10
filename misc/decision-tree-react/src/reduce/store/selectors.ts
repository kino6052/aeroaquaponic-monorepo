import { Id, IState } from "../../bridge";

export const selectCurrent = (state: IState) => state.currentId;
export const selectHistory = (state: IState) => state.history;
export const selectNext = (state: IState) => state.next;
export const selectChildren = (state: IState, id: Id) =>
  state.data[id]?.children || [];
