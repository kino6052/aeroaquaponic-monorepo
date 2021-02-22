import { Id, IInput, initialState, INode, IState, ITree } from "../bridge";

const getIds = (tree: ITree): string[] =>
  Object.entries(tree).reduce((acc, [id, tree]) => {
    return [...acc, id, ...getIds(tree)];
  }, [] as string[]);

export const act = (state: IState) => ([type, id, value]: IInput): IState => {
  if (type === "change" && id === Id.AddItemInput) {
    return {
      ...state,
      addItemInput: value,
    };
  } else if (type === "click" && id === Id.AddItemButton) {
    const newNode: INode = {
      children: [] as string[],
      id: `${Id.Item}-${state.currentId}`,
      isCollapsed: false,
      parent: state.selectedNode,
      title: state.addItemInput,
      isHighlighted: false,
    };
    const parent = state.treeNodes[state.selectedNode];
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
    const process = (id: string = ""): ITree =>
      treeNodes[id]?.children.reduce(
        (acc, child) => ({ ...acc, [child]: process(child) }),
        {}
      ) || {};
    const tree = Object.values(treeNodes)
      .filter(({ parent }) => parent === "")
      .reduce((acc, node) => {
        return { ...acc, [node.id]: process(node.id) };
      }, {});
    return {
      ...state,
      currentId: state.currentId + 1,
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
    const process = (id: string = ""): ITree =>
      treeNodes[id]?.children.reduce((acc, child) => {
        const node = treeNodes[child];
        const hasSearchTerm = node.title
          .toLowerCase()
          .includes(value.toLowerCase());
        const result = process(child);
        const hasChildren = Object.entries(result).length > 0;
        if (hasSearchTerm || hasChildren) return { ...acc, [child]: result };
        return acc;
      }, {}) || {};
    const tree = Object.values(treeNodes)
      .filter(({ parent }) => parent === "")
      .reduce((acc, node) => {
        return { ...acc, [node.id]: process(node.id) };
      }, {});
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
  }
  return state;
};

export const sequence = (inputs: IInput[]): IState =>
  inputs.reduce((acc, input) => act(acc)(input), initialState);
