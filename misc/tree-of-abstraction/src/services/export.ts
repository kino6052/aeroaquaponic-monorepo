import { IAppState, INode, INote, Scope } from "../bridge";
import { flatten } from "lodash";

interface IHierarchyItem {
  id: string;
  title: string;
  children: string[];
  isCollapsed: boolean;
  visible: boolean;
}

interface INoteItem {
  labels: IHierarchyItem[];
  title: string;
  id: string;
  html: string;
  visible: boolean;
}

interface ILegacy {
  title: string;
  id: string;
  hierarchy: IHierarchyItem[];
  notes: INoteItem[];
}

const generateChildParentMap = (hierarchy: ILegacy["hierarchy"]) =>
  hierarchy
    .map((item) => flatten(item.children.map((id) => [id, item.id])))
    .reduce(
      (acc, entry) => ({
        ...acc,
        [entry[0]]: entry[1],
      }),
      {} as { [key: string]: string }
    );

const generateNoteNodes = (legacy: ILegacy): IAppState["tree"]["noteNodes"] =>
  legacy.notes
    .map(
      (note) =>
        ({
          id: `note-element-${note.id}`,
          description: note.html,
          isCollapsed: true,
          isEditable: false,
          isHighlighted: false,
          parents: note.labels.map((note) => `item-element-${note.id}`),
          title: note.title,
        } as INote)
    )
    .reduce((acc, note) => ({ ...acc, [note.id]: note }), {});

const generateItemNotesMap = (legacy: ILegacy) => {
  const result: { [key: string]: string[] } = {};
  legacy.notes.map((note) => {
    note.labels.map(({ id }) => {
      result[id] = [...(result[id] || []), note.id];
    });
  });
  return result;
};

const traverse = (
  hierarchy: IHierarchyItem[],
  result: { [key: string]: number } = {},
  id: string = "root",
  indent = 0
) => {
  const item = hierarchy.find((item) => item.id === id);
  if (!item) return result;
  result[id] = indent;
  for (const c of item.children) {
    traverse(hierarchy, result, c, indent + 1);
  }
  return result;
};

const generateItemIndentMap = (hierarchy: IHierarchyItem[]) =>
  traverse(hierarchy);

const generateTreeNodes = (legacy: ILegacy): IAppState["tree"]["treeNodes"] => {
  const childParentMap = generateChildParentMap(legacy.hierarchy);
  const itemNotesMap = generateItemNotesMap(legacy);
  const itemIndentMap = generateItemIndentMap(legacy.hierarchy);
  return legacy.hierarchy
    .map(
      (item) =>
        ({
          id: `item-element-${item.id}`,
          isCollapsed: item.isCollapsed,
          isHighlighted: false,
          isEditable: false,
          title: item.title,
          children: item.children.map((id) => `item-element-${id}`),
          indent: itemIndentMap[item.id] || 0,
          notes: itemNotesMap[item.id]?.map((id) => `note-element-${id}`) || [],
          parent: `item-element-${childParentMap[item.id]}`,
        } as INode)
    )
    .reduce((acc, node) => ({ ...acc, [node.id]: node }), {});
};

const convert = (legacy: ILegacy): IAppState["tree"] => {
  return {
    title: legacy.title,
    itemSearchInput: "",
    noteSearchInput: "",
    scope: "tree",
    selectedNode: "",
    selectedNote: "",
    tree: [],
    notes: [],
    noteNodes: generateNoteNodes(legacy),
    treeNodes: generateTreeNodes(legacy),
  };
};

// const test =

// console.log(JSON.stringify(convert(test)))
