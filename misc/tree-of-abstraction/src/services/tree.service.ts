import { intersection, union, without } from "lodash";
import { Id, INode, IState, RootId } from "../bridge";
import { IEvent } from "../utils/EventWrapper";
import { Utils } from "../utils/utils";
import { RedoStack, UndoStack } from "./main.service";

export const getDescendants = (id: string, state: IState): string[] => {
  const node = state.treeNodes[id];
  if (!node) return [];
  return node.children.reduce((acc, id) => {
    return [...acc, id, ...getDescendants(id, state)] as string[];
  }, [] as string[]);
};

export const getIsDescendant = (
  potentialDescendant: string,
  potentialParent: string,
  state: IState
): [boolean, string[]] => {
  const descendants = getDescendants(potentialParent, state);
  return [descendants.includes(potentialDescendant), descendants];
};

export const getParents = (id: string, state: IState): string[] => {
  const node = state.treeNodes[id];
  if (!node) return [];
  return [...getParents(node.parent, state), id];
};

export const updateHighligted = (state: IState) => {
  const newTreeNodes = updateTreeNodes(state, (node) => {
    const value = state.itemSearchInput;
    const isHighlighted =
      !!value &&
      value.length >= 3 &&
      node.title.toLowerCase().includes(value.toLowerCase());
    return {
      ...node,
      isHighlighted,
    };
  });
  return newTreeNodes;
};

export const updateTreeNodes = (state: IState, cb: (node: INode) => INode) =>
  Object.values(state.treeNodes)
    .map(cb)
    .reduce(
      (acc, node) => ({ ...acc, [node.id]: node }),
      {} as typeof state.treeNodes
    );

export const shortcutAddItem = (state: IState, event: IEvent): IState => {
  const selectedId = state.selectedNode || RootId;
  const newNode: INode = {
    children: [] as string[],
    id: `${Id.Item}-${Utils.generateId()}`,
    isCollapsed: false,
    notes: [],
    parent: selectedId,
    title: "title",
    isHighlighted: false,
    isEditable: false,
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

export const shortcutRemoveItem = (state: IState, [, id]: IEvent): IState => {
  const nodeId = state.selectedNode;
  const parentId = state.treeNodes[nodeId]?.parent;
  const parent = state.treeNodes[parentId];
  if (!parent) return state;
  const index = state.treeNodes[parentId].children.indexOf(nodeId);
  const newTreeNodes = updateTreeNodes(state, (node) => {
    const isFound = node.id === nodeId && node.id !== RootId;
    const isParent = node.id === parentId;
    if (isParent)
      return {
        ...node,
        children: node.children.filter((id) => id !== nodeId),
      };
    if (isFound)
      return {
        ...node,
        parent: "",
      };
    return node;
  });
  return {
    ...state,
    selectedNode:
      newTreeNodes[parentId].children[Math.max(0, index - 1)] || parentId,
    treeNodes: newTreeNodes,
  };
};

export const clickItem = (state: IState, [, id, value]: IEvent): IState => {
  if (value === "10") {
    const [isDescendant, descendants] = getIsDescendant(
      id,
      state.selectedNode,
      state
    );
    const isDescendantOrSelf = isDescendant || id === state.selectedNode;
    if (isDescendantOrSelf) return state;
    const newTreeNodes = updateTreeNodes(state, (node) => {
      const parentId = state.treeNodes[state.selectedNode].parent;
      // Update indent of descendants
      if (descendants.includes(node.id)) {
        return {
          ...node,
          indent:
            state.treeNodes[id].indent +
            (node.indent - state.treeNodes[state.selectedNode].indent) +
            1,
        };
      }
      // Update target node
      if (node.id === id) {
        return {
          ...node,
          children: [
            state.selectedNode,
            ...node.children.filter((id) => id !== state.selectedNode),
          ],
        };
      }
      // Update selected node's parent
      if (node.id === parentId) {
        return {
          ...node,
          children: node.children.filter((id) => id !== state.selectedNode),
        };
      }
      // Update selected node parent property
      if (node.id === state.selectedNode) {
        return {
          ...node,
          parent: id,
          indent: state.treeNodes[id].indent + 1,
        };
      }
      return node;
    });
    return {
      ...state,
      treeNodes: newTreeNodes,
      selectedNode: id,
    };
  }
  return {
    ...state,
    selectedNode: id,
  };
};

export const changeSearchInput = (
  state: IState,
  [, , value]: IEvent
): IState => {
  return {
    ...state,
    itemSearchInput: value,
  };
};

export const process = (state: IState): IState => {
  const currentTree = [RootId, ...getDescendants(RootId, state)];
  const highlighted = Object.values(state.treeNodes)
    .filter(({ isHighlighted }) => isHighlighted)
    .map(({ id }) => id);
  const highlightedParents = highlighted.reduce(
    (acc, id) => {
      return [...acc, ...getParents(id, state)];
    },
    [...highlighted] as string[]
  );
  const selectedParents = getParents(state.selectedNode, state);
  const collapsed = Object.values(state.treeNodes)
    .filter(({ isCollapsed }) => isCollapsed)
    .map(({ id }) => id);
  const collapsedDescendants = collapsed.reduce((acc, id) => {
    return [...acc, ...getDescendants(id, state)];
  }, [] as string[]);
  if (!state.itemSearchInput || state.itemSearchInput.length < 3) {
    const toExclude = without(
      collapsedDescendants,
      ...highlightedParents,
      ...selectedParents
    );
    const tree = without(currentTree, ...toExclude);
    return { ...state, tree };
  } else {
    return {
      ...state,
      tree: intersection(
        currentTree,
        union(highlightedParents, selectedParents)
      ),
    };
  }
};

export const shortcutCollapse = (state: IState, [, id]: IEvent): IState => {
  const newTreeNodes = updateTreeNodes(state, (node) => {
    const isFound = node.id === state.selectedNode;
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

export const changeItemTitle = (
  state: IState,
  [, id, value]: IEvent
): IState => {
  const newTreeNodes = updateTreeNodes(state, (node) => {
    const isFound = id === node.id;
    if (!isFound) return node;
    return {
      ...node,
      title: value,
    };
  });
  return {
    ...state,
    treeNodes: newTreeNodes,
  };
};

export const shortcutToggleEditItem = (
  state: IState,
  event: IEvent
): IState => {
  const newTreeNodes = updateTreeNodes(state, (node) => {
    const isFound = node.id === state.selectedNode;
    if (!isFound) return { ...node, isEditable: false };
    const isEditable = !node.isEditable;
    return {
      ...node,
      isEditable,
    };
  });
  return {
    ...state,
    treeNodes: newTreeNodes,
  };
};

export const shortcutEnter = (state: IState, event: IEvent): IState => {
  const newTreeNodes = updateTreeNodes(state, (node) => {
    const isFound = node.id === state.selectedNode;
    if (!isFound) return node;
    const isEditable = false;
    return {
      ...node,
      isEditable,
    };
  });
  return {
    ...state,
    treeNodes: newTreeNodes,
  };
};

export const shortcutDown = (state: IState, event: IEvent): IState => {
  const nodes = state.tree;
  const maxIndex = nodes.length;
  const index = state.tree.indexOf(state.selectedNode);
  const newIndex = (index + 1) % maxIndex;
  return { ...state, selectedNode: nodes[newIndex] };
};

export const shortcutMoveDown = (state: IState, event: IEvent): IState => {
  const node = state.treeNodes[state.selectedNode];
  if (!node) return state;
  const parent = state.treeNodes[node.parent];
  if (!parent) return state;
  const children = parent.children;
  const maxIndex = children.length - 1;
  const index = parent.children.indexOf(node.id);
  if (index === maxIndex) return state;
  const newChildren = [
    ...children.slice(0, index),
    children[index + 1],
    children[index],
    ...children.slice(index + 2),
  ];
  const treeNodes = updateTreeNodes(state, (node) => {
    if (node.id !== parent.id) return node;
    return {
      ...node,
      children: newChildren,
    };
  });
  return { ...state, treeNodes };
};

export const shortcutUp = (state: IState, event: IEvent): IState => {
  const nodes = state.tree;
  const maxIndex = nodes.length;
  const index = state.tree.indexOf(state.selectedNode);
  const newIndex = (maxIndex + (index - 1)) % maxIndex;
  return { ...state, selectedNode: nodes[newIndex] };
};

export const shortcutMoveUp = (state: IState, event: IEvent): IState => {
  const node = state.treeNodes[state.selectedNode];
  if (!node) return state;
  const parent = state.treeNodes[node.parent];
  if (!parent) return state;
  const children = parent.children;
  const index = parent.children.indexOf(node.id);
  if (index === 0) return state;
  const newChildren = [
    ...children.slice(0, index - 1),
    children[index],
    children[index - 1],
    ...children.slice(index + 1),
  ];
  const treeNodes = updateTreeNodes(state, (node) => {
    if (node.id !== parent.id) return node;
    return {
      ...node,
      children: newChildren,
    };
  });
  return { ...state, treeNodes };
};

export const shortcutUndo = (state: IState, event: IEvent): IState => {
  if (!UndoStack.length) return state;
  RedoStack.push(state.treeNodes);
  const prev = UndoStack.pop()!;
  return { ...state, treeNodes: prev };
};

export const shortcutRedo = (state: IState, event: IEvent): IState => {
  if (!RedoStack.length) return state;
  UndoStack.push(state.treeNodes);
  const prev = RedoStack.pop()!;
  return { ...state, treeNodes: prev };
};
