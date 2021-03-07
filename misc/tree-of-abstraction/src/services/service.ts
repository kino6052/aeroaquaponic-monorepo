import {
  Id,
  IInput,
  initialState,
  INode,
  IState,
  ITree,
  RootId,
} from "../bridge";
import { IEvent } from "../utils/EventWrapper";
import { Utils } from "../utils/utils";

const getProcess = (state: IState) =>
  function process(
    id: string = "root",
    predicate: (
      state: IState
    ) => (child: string, hasChildren: boolean) => boolean = () => () => true
  ): ITree {
    const { treeNodes } = state;
    return treeNodes[id]?.children.reduce((acc, child) => {
      const result = process(child, predicate);
      const hasChildren = Object.entries(result).length > 0;
      const hasTestPassed = predicate(state)(child, hasChildren);
      if (hasTestPassed) return [...acc, child, ...result];
      return acc;
    }, [] as ITree);
  };

const processState = (
  predicates: Array<
    (state: IState) => (child: string, hasChildren: boolean) => boolean
  >,
  maps: Array<(state: IState) => IState["treeNodes"]>,
  state: IState = initialState
): IState => {
  const updatedState = maps.reduce(
    (state, map) => ({
      ...state,
      treeNodes: map(state),
    }),
    state
  );
  const filteredState = predicates.reduce(
    (state, predicate) => ({
      ...state,
      tree: [RootId, ...getProcess(state)(RootId, predicate)],
    }),
    updatedState
  );
  return filteredState;
};

const updateHighligted = (state: IState) => {
  const newTreeNodes = updateTreeNodes(state, (node) => {
    const value = state.itemSearchInput;
    const isHighlighted =
      !!value && node.title.toLowerCase().includes(value.toLowerCase());
    return {
      ...node,
      isHighlighted,
    };
  });
  return newTreeNodes;
};

const getIsCollapsed = (state: IState) => (child: string) => {
  const { itemSearchInput, treeNodes } = state;
  return !itemSearchInput && !treeNodes[treeNodes[child].parent].isCollapsed;
};

const getHasSearchTerm = ({ treeNodes, itemSearchInput }: IState) => (
  child: string,
  hasChildren: boolean
) => {
  const node = treeNodes[child];
  const hasSearchTerm = node.title
    .toLowerCase()
    .includes(itemSearchInput.toLowerCase());
  return hasSearchTerm || hasChildren;
};

const getIsVisible = (state: IState) => (
  child: string,
  hasChildren: boolean
) => {
  const hasSearchTerm = getHasSearchTerm(state)(child, hasChildren);
  const isSelected = state.selectedNode === child;
  const isCollapsed = getIsCollapsed(state)(child);
  const hasInput = !!state.itemSearchInput;
  return (
    isSelected || (hasInput && hasSearchTerm) || isCollapsed || hasChildren
  );
};

const updateTreeNodes = (state: IState, cb: (node: INode) => INode) =>
  Object.values(state.treeNodes)
    .map(cb)
    .reduce(
      (acc, node) => ({ ...acc, [node.id]: node }),
      {} as typeof state.treeNodes
    );

const changeAddItemInput = (state: IState, [, , value]: IEvent): IState => {
  return {
    ...state,
    addItemInput: value,
  };
};

const clickAddItemInput = (state: IState, event: IEvent): IState => {
  const selectedId = state.selectedNode || RootId;
  const newNode: INode = {
    children: [] as string[],
    id: `${Id.Item}-${Utils.generateId()}`,
    isCollapsed: false,
    parent: selectedId,
    title: state.addItemInput,
    isHighlighted: false,
    indent: state.treeNodes[selectedId].indent + 1,
  };
  const parent = state.treeNodes[selectedId];
  const newParent = {
    [parent.id]: {
      ...parent,
      children: [...parent.children, newNode.id],
    },
  };
  const treeNodes = {
    ...state.treeNodes,
    ...newParent,
    ...{ [newNode.id]: newNode },
  };
  return {
    ...state,
    treeNodes,
  };
};

const clickItem = (state: IState, [, id]: IEvent): IState => {
  return {
    ...state,
    selectedNode: id,
  };
};

const changeSearchInput = (state: IState, [, , value]: IEvent): IState => {
  return {
    ...state,
    itemSearchInput: value,
  };
};

const collapseItem = (state: IState, [, id]: IEvent): IState => {
  const processedId = id.replace(`${Id.CollapseItemButton}-`, "");
  const newTreeNodes = updateTreeNodes(state, (node) => {
    const processedNodeId = node.id.replace(`${Id.Item}-`, "");
    const isFound = processedNodeId === processedId;
    if (!isFound) return node;
    const isCollapsed = !node.isCollapsed;
    return {
      ...node,
      isCollapsed,
    };
  });
  return {
    ...state,
    treeNodes: newTreeNodes,
  };
};

export const act = (state: IState) => ([type, id, value]: IEvent): IState => {
  const changeAddItemInputResult =
    type === "change" &&
    id === Id.AddItemInput &&
    changeAddItemInput(state, [type, id, value]);
  const clickAddItemInputResult =
    type === "click" &&
    id === Id.AddItemButton &&
    clickAddItemInput(state, [type, id, value]);
  const clickItemResult =
    type === "click" &&
    id.includes(Id.Item) &&
    clickItem(state, [type, id, value]);
  const changeSearchInputResult =
    type === "change" &&
    Id.SearchItemsInput &&
    changeSearchInput(state, [type, id, value]);
  const collapseItemResult =
    type === "click" &&
    id.includes(Id.CollapseItemButton) &&
    collapseItem(state, [type, id, value]);
  const eventProcessingResult =
    changeAddItemInputResult ||
    clickAddItemInputResult ||
    clickItemResult ||
    changeSearchInputResult ||
    collapseItemResult ||
    state;
  return processState(
    [getIsVisible],
    [updateHighligted],
    eventProcessingResult
  );
};

export const sequence = (inputs: IInput[]): IState =>
  inputs.reduce((acc, input) => act(acc)(input), initialState);
