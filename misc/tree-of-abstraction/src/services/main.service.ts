import { intersection, max, union, without } from "lodash";
import {
  Id,
  initialState,
  INode,
  IState,
  RedoStack,
  RootId,
  UndoStack,
} from "../bridge";
import { IEvent } from "../utils/EventWrapper";
import { Utils } from "../utils/utils";
import { Shortcut } from "./shortcuts.service";

const getDescendants = (id: string, state: IState): string[] => {
  const node = state.treeNodes[id];
  if (!node) return [];
  return node.children.reduce((acc, id) => {
    return [...acc, id, ...getDescendants(id, state)] as string[];
  }, [] as string[]);
};

const getIsDescendant = (
  potentialDescendant: string,
  potentialParent: string,
  state: IState
): [boolean, string[]] => {
  const descendants = getDescendants(potentialParent, state);
  return [descendants.includes(potentialDescendant), descendants];
};

const getParents = (id: string, state: IState): string[] => {
  const node = state.treeNodes[id];
  if (!node) return [];
  return [...getParents(node.parent, state), id];
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
  if (!state.addItemInput) return state;
  const selectedId = state.selectedNode || RootId;
  const newNode: INode = {
    children: [] as string[],
    id: `${Id.Item}-${Utils.generateId()}`,
    isCollapsed: false,
    parent: selectedId,
    title: state.addItemInput,
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

const shortcutAddItem = (state: IState, event: IEvent): IState => {
  const selectedId = state.selectedNode || RootId;
  const newNode: INode = {
    children: [] as string[],
    id: `${Id.Item}-${Utils.generateId()}`,
    isCollapsed: false,
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

const clickRemoveItemButton = (state: IState, [, id]: IEvent): IState => {
  const processedId = id.replace(`${Id.RemoveItemButton}-`, "");
  const itemId = `${Id.Item}-${processedId}`;
  const parentId = state.treeNodes[itemId]?.parent;
  const newTreeNodes = updateTreeNodes(state, (node) => {
    const isFound = node.id === itemId && node.id !== RootId;
    const isParent = node.id === parentId;
    if (isParent)
      return {
        ...node,
        children: node.children.filter((id) => id !== itemId),
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
    treeNodes: newTreeNodes,
  };
};

const shortcutRemoveItem = (state: IState, [, id]: IEvent): IState => {
  const nodeId = state.selectedNode;
  const parentId = state.treeNodes[nodeId]?.parent;
  const parent = state.treeNodes[parentId];
  if (!parent) return state;
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
    selectedNode: parent.children[0] || parentId,
    treeNodes: newTreeNodes,
  };
};

const clickItem = (state: IState, [, id, value]: IEvent): IState => {
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

const changeSearchInput = (state: IState, [, , value]: IEvent): IState => {
  return {
    ...state,
    itemSearchInput: value,
  };
};

const process = (state: IState): IState => {
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
  if (!state.itemSearchInput) {
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

const shortcutCollapseItem = (state: IState, [, id]: IEvent): IState => {
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

const changeItemTitle = (state: IState, [, id, value]: IEvent): IState => {
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

const toggleEditItem = (state: IState, [, id]: IEvent): IState => {
  const processedId = id.replace(`${Id.EditItemButton}-`, "");
  const newTreeNodes = updateTreeNodes(state, (node) => {
    const processedNodeId = node.id.replace(`${Id.Item}-`, "");
    const isFound = processedNodeId === processedId;
    if (!isFound) return node;
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

const shortcutToggleEditItem = (state: IState, event: IEvent): IState => {
  const newTreeNodes = updateTreeNodes(state, (node) => {
    const isFound = node.id === state.selectedNode;
    if (!isFound) return node;
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

const shortcutEnter = (state: IState, event: IEvent): IState => {
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

const shortcutDown = (state: IState, event: IEvent): IState => {
  const nodes = state.tree;
  const maxIndex = nodes.length;
  const index = state.tree.indexOf(state.selectedNode);
  const newIndex = (index + 1) % maxIndex;
  return { ...state, selectedNode: nodes[newIndex] };
};

const shortcutMoveDown = (state: IState, event: IEvent): IState => {
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

const shortcutUp = (state: IState, event: IEvent): IState => {
  const nodes = state.tree;
  const maxIndex = nodes.length;
  const index = state.tree.indexOf(state.selectedNode);
  const newIndex = (maxIndex + (index - 1)) % maxIndex;
  return { ...state, selectedNode: nodes[newIndex] };
};

const shortcutMoveUp = (state: IState, event: IEvent): IState => {
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

const shortcutUndo = (state: IState, event: IEvent): IState => {
  if (!UndoStack.length) return state;
  RedoStack.push(state.treeNodes);
  const prev = UndoStack.pop();
  if (!prev) return state;
  return { ...state, treeNodes: prev };
};

const shortcutRedo = (state: IState, event: IEvent): IState => {
  if (!RedoStack.length) return state;
  UndoStack.push(state.treeNodes);
  const prev = RedoStack.pop();
  if (!prev) return state;
  return { ...state, treeNodes: prev };
};

const showControls = (state: IState, [type, , value]: IEvent): IState => {
  return {
    ...state,
    shouldShowControls: type === "keydown" && value === "ControlLeft",
  };
};

export const act = (state: IState) => ([type, id, value]: IEvent): IState => {
  // Shortcuts
  const shortcutCollapseItemResult =
    type === "keydown" &&
    id === Id.Keyboard &&
    value === Shortcut.Colapse &&
    shortcutCollapseItem(state, [type, id, value]);
  const shortcutEnterResult =
    type === "keydown" &&
    id === Id.Keyboard &&
    value === Shortcut.Enter &&
    shortcutEnter(state, [type, id, value]);
  const shortcutToggleEditResult =
    type === "keydown" &&
    id === Id.Keyboard &&
    value === Shortcut.Edit &&
    shortcutToggleEditItem(state, [type, id, value]);
  const shortcutAddItemResult =
    type === "keydown" &&
    id === Id.Keyboard &&
    value === Shortcut.Add &&
    shortcutAddItem(state, [type, id, value]);
  const shortcutDownResult =
    type === "keydown" &&
    id === Id.Keyboard &&
    value === Shortcut.Down &&
    shortcutDown(state, [type, id, value]);
  const shortcutUpResult =
    type === "keydown" &&
    id === Id.Keyboard &&
    value === Shortcut.Up &&
    shortcutUp(state, [type, id, value]);
  const shortcutMoveDownResult =
    type === "keydown" &&
    id === Id.Keyboard &&
    value === Shortcut.MoveDown &&
    shortcutMoveDown(state, [type, id, value]);
  const shortcutMoveUpResult =
    type === "keydown" &&
    id === Id.Keyboard &&
    value === Shortcut.MoveUp &&
    shortcutMoveUp(state, [type, id, value]);
  const shortcutRemoveItemResult =
    type === "keydown" &&
    id === Id.Keyboard &&
    value === Shortcut.Remove &&
    shortcutRemoveItem(state, [type, id, value]);
  const shortcutUndoResult =
    type === "keydown" &&
    id === Id.Keyboard &&
    value === Shortcut.Undo &&
    shortcutUndo(state, [type, id, value]);
  const shortcutRedoResult =
    type === "keydown" &&
    id === Id.Keyboard &&
    value === Shortcut.Redo &&
    shortcutRedo(state, [type, id, value]);

  // IO
  const editItemResult =
    type === "click" &&
    id.includes(Id.EditItemButton) &&
    toggleEditItem(state, [type, id, value]);
  const changeAddItemInputResult =
    type === "change" &&
    id === Id.AddItemInput &&
    changeAddItemInput(state, [type, id, value]);
  const clickAddItemInputResult =
    type === "click" &&
    id === Id.AddItemButton &&
    clickAddItemInput(state, [type, id, value]);
  const changeItemTitleResult =
    type === "change" &&
    id.includes(Id.Item) &&
    changeItemTitle(state, [type, id, value]);
  const clickItemResult =
    type === "click" &&
    id.includes(Id.Item) &&
    clickItem(state, [type, id, value]);
  const changeSearchInputResult =
    type === "change" &&
    id === Id.SearchItemsInput &&
    changeSearchInput(state, [type, id, value]);
  const collapseItemResult =
    type === "click" &&
    id.includes(Id.CollapseItemButton) &&
    collapseItem(state, [type, id, value]);
  const clickRemoveItemButtonResult =
    type === "click" &&
    id.includes(Id.RemoveItemButton) &&
    clickRemoveItemButton(state, [type, id, value]);

  const nodeModifyingResult =
    // Shortcuts
    shortcutAddItemResult ||
    shortcutRemoveItemResult ||
    shortcutMoveDownResult ||
    shortcutMoveUpResult ||
    clickItemResult ||
    changeItemTitleResult;

  if (nodeModifyingResult) {
    RedoStack.length = 0;
    UndoStack.push(state.treeNodes);
  }

  const eventProcessingResult =
    // Undo / Redo
    shortcutUndoResult ||
    shortcutRedoResult ||
    // Other
    shortcutUpResult ||
    shortcutDownResult ||
    shortcutCollapseItemResult ||
    shortcutEnterResult ||
    shortcutToggleEditResult ||
    // IO
    changeAddItemInputResult ||
    clickAddItemInputResult ||
    changeSearchInputResult ||
    collapseItemResult ||
    clickRemoveItemButtonResult ||
    editItemResult ||
    state;

  const result = nodeModifyingResult || eventProcessingResult;

  return process({
    ...result,
    treeNodes: updateHighligted(result),
  });
};

export const sequence = (inputs: IEvent[]): IState =>
  inputs.reduce((acc, input) => act(acc)(input), initialState);
