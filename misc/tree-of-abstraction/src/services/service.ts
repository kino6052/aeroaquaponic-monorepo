import {
  Id,
  IInput,
  initialState,
  INode,
  IState,
  ITree,
  RootId,
} from "../bridge";
import { Utils } from "../utils/utils";

const getProcess = ({ treeNodes }: IState, value: string) =>
  function process(
    id: string = "root",
    predicate: (child: string, value: string, hasChildren: boolean) => boolean
  ): ITree {
    return treeNodes[id]?.children.reduce((acc, child) => {
      const result = process(child, predicate);
      const hasChildren = Object.entries(result).length > 0;
      const hasTestPassed = predicate(child, value, hasChildren);
      if (hasTestPassed) return [...acc, child, ...result];
      return acc;
    }, [] as ITree);
  };

export const act = (state: IState) => ([type, id, value]: IInput): IState => {
  if (type === "change" && id === Id.AddItemInput) {
    return {
      ...state,
      addItemInput: value,
    };
  } else if (type === "click" && id === Id.AddItemButton) {
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
    const newParent =
      (parent && {
        [parent.id]: {
          ...parent,
          children: [...parent.children, newNode.id],
        },
      }) ||
      {};
    const treeNodes = {
      ...state.treeNodes,
      ...newParent,
      ...{ [newNode.id]: newNode },
    };
    const tree = getProcess({ ...state, treeNodes }, value)("root", () => true);
    return {
      ...state,
      treeNodes,
      tree,
    };
  } else if (type === "click" && id.includes(Id.Item)) {
    return {
      ...state,
      selectedNode: id,
    };
  } else if (type === "change" && Id.SearchItemsInput) {
    const treeNodes = state.treeNodes;
    const getHasSearchTerm = (
      child: string,
      value: string,
      hasChildren: boolean
    ) => {
      const node = treeNodes[child];
      const hasSearchTerm = node.title
        .toLowerCase()
        .includes(value.toLowerCase());
      return hasSearchTerm || hasChildren;
    };
    const tree = getProcess(state, value)("root", getHasSearchTerm);
    const newTreeNodes = Object.values(state.treeNodes)
      .map((node) => {
        const isHighlighted =
          !!value && node.title.toLowerCase().includes(value.toLowerCase());
        return {
          ...node,
          isHighlighted,
        };
      })
      .reduce(
        (acc, node) => ({ ...acc, [node.id]: node }),
        {} as typeof treeNodes
      );
    return {
      ...state,
      itemSearchInput: value,
      tree,
      treeNodes: newTreeNodes,
    };
  } else if (type === "click" && id.includes(Id.CollapseItemButton)) {
    const treeNodes = state.treeNodes;
    const processedId = id.replace(`${Id.CollapseItemButton}-`, "");
    const newTreeNodes = Object.values(state.treeNodes)
      .map((node) => {
        const processedNodeId = node.id.replace(`${Id.Item}-`, "");
        const isCollapsed =
          processedNodeId === processedId && !node.isCollapsed;
        return {
          ...node,
          isCollapsed,
        };
      })
      .reduce(
        (acc, node) => ({ ...acc, [node.id]: node }),
        {} as typeof treeNodes
      );
    const tree = getProcess({ ...state, treeNodes: newTreeNodes }, value)(
      "root",
      (child) => !newTreeNodes[newTreeNodes[child].parent].isCollapsed
    );
    return {
      ...state,
      tree,
      treeNodes: newTreeNodes,
    };
  }
  return state;
};

export const sequence = (inputs: IInput[]): IState =>
  inputs.reduce((acc, input) => act(acc)(input), initialState);
