import { IAppState, Id } from "../bridge";
import { IEvent } from "../utils/EventWrapper";
import { Utils } from "../utils/utils";
import { Shortcut } from "./shortcuts.service";

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

export const shortcutEditCollection = (
  state: IAppState["collection"],
  event: IEvent
): IAppState["collection"] | false => {
  const [type, id, value] = event;
  const isEnter = value === Shortcut.Enter;

  const list = getCollectionList(state);
  const highlightedItemIndex = list.findIndex(
    (highlightedItem) => highlightedItem.isHighlighted
  );

  const isEditable = list[highlightedItemIndex].isEditable;

  if (isEnter && !isEditable) return false;

  const collectionNodes = list
    .map((item, index) => ({
      ...item,
      isEditable: index === highlightedItemIndex ? !item.isEditable : false,
    }))
    .reduce((acc, item) => ({ ...acc, [item.id]: item }), {});
  return {
    ...state,
    collectionNodes,
  };
};

// export const shortcutRemoveCollection = (
//   state: IAppState["collection"],
//   event: IEvent
// ): IAppState["collection"] => {
//   const list = getCollectionList(state);
//   const highlightedItemIndex = list.findIndex(
//     (highlightedItem) => highlightedItem.isHighlighted
//   );
//   const collectionNodes = list
//     .filter((item, index) => index !== highlightedItemIndex)
//     .reduce((acc, item) => ({ ...acc, [item.id]: item }), {});
//   return {
//     ...state,
//     collectionNodes,
//   };
// };

export const changeCollectionTitle = (
  state: IAppState["collection"],
  event: IEvent
): IAppState["collection"] => {
  const [, id, value] = event;
  const list = getCollectionList(state);
  const itemIndex = list.findIndex((item) => item.id === id);
  const collectionNodes = list
    .map((item, index) => ({
      ...item,
      title: index === itemIndex ? value : item.title,
    }))
    .reduce((acc, item) => ({ ...acc, [item.id]: item }), {});
  return {
    ...state,
    collectionNodes,
  };
};

export const changeCollectionSearchInput = (
  state: IAppState["collection"],
  [, , value]: IEvent
): IAppState["collection"] => {
  return {
    ...state,
    collectionSearchInput: value,
    collections: Object.values(state.collectionNodes)
      .filter(
        (node) =>
          (value || "").length < 3 ||
          (value &&
            node.title
              .toLowerCase()
              .includes(state.collectionSearchInput.toLowerCase()))
      )
      .map((node) => node.id),
  };
};
