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
        isHighlighted: false,
      },
    },
  };
};

const getCollectionList = (state: IAppState["collection"]) =>
  Object.values(state.collectionNodes);

export const shortcutUpCollection = (
  state: IAppState["collection"],
  event: IEvent
): IAppState["collection"] => {
  const list = getCollectionList(state);
  const highlightedItemIndex = list.findIndex(
    (highlightedItem) => highlightedItem.isHighlighted
  );
  const newHighlightedItemIndex =
    (list.length + highlightedItemIndex - 1) % list.length;
  const collectionNodes = list
    .map((item, index) => ({
      ...item,
      isHighlighted: index === newHighlightedItemIndex,
    }))
    .reduce((acc, item) => ({ ...acc, [item.id]: item }), {});
  return {
    ...state,
    collectionNodes,
  };
};

export const shortcutDownCollection = (
  state: IAppState["collection"],
  event: IEvent
): IAppState["collection"] => {
  const list = getCollectionList(state);
  const highlightedItemIndex = list.findIndex(
    (highlightedItem) => highlightedItem.isHighlighted
  );
  const newHighlightedItemIndex =
    (list.length + highlightedItemIndex + 1) % list.length;
  const collectionNodes = list
    .map((item, index) => ({
      ...item,
      isHighlighted: index === newHighlightedItemIndex,
    }))
    .reduce((acc, item) => ({ ...acc, [item.id]: item }), {});
  return {
    ...state,
    collectionNodes,
  };
};

export const shortcutEnterCollection = (
  state: IAppState["collection"],
  event: IEvent
): IAppState["collection"] => {
  const list = getCollectionList(state);
  const highlightedItemIndex = list.findIndex(
    (highlightedItem) => highlightedItem.isHighlighted
  );
  return {
    ...state,
    selectedCollection: list[highlightedItemIndex].id,
  };
};
