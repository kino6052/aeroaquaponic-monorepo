import { Decoupler } from "../../utils/Decoupler";
import { EModel } from "./enums";
import { reducer } from "./reducer";
import { EActionType, EControlId, IState } from "./types";

export const initialState: IState = {
  input: "",
  messages: [],
  activeMessage: "",
  conversations: [],
  isOpen: true,
  selectedModel: EModel.GPT3,
};

export const decoupler = new Decoupler<IState, EActionType, EControlId, string>(
  initialState,
  reducer
);
