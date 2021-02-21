import { IInput, IState } from "../bridge";

export const act = (state: IState) => ([type, id, value]: IInput) => {
  return state;
};
