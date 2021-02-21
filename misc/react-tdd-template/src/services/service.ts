import { IInput, IState } from "../bridge";

export const act = (state: IState) => ([type, id, value]: IInput) => {
  return state;
};

export const sequence = (inputs: IInput[]): typeof initialState =>
  inputs.reduce((acc, input) => act(acc)(input), initialState);
