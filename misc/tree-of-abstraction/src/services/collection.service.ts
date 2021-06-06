import { IAppState, Id, IState } from "../bridge";
import { IEvent } from "../utils/EventWrapper";
import { Utils } from "../utils/utils";

export const shortcutAddCollection = (
  state: IAppState["collection"],
  event: IEvent
): IAppState["collection"] => {
  const collectionId = `${Id.Collection}-${Utils.generateId()}`;
  return {
    ...state,
    collectionNodes: {
      ...state.collectionNodes,
      [collectionId]: {
        id: collectionId,
        isEditable: false,
        title: "Collection",
      },
    },
  };
};
