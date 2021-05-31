import { Id, IState } from "../bridge";
import { IEvent } from "../utils/EventWrapper";
import { Utils } from "../utils/utils";

export const shortcutAddCollection = (state: IState, event: IEvent): IState => {
  const collectionId = `${Id.Collection}-${Utils.generateId()}`;
  return {
    ...state,
    // collectionIds: [...state.collectionIds, collectionId],
  };
};
