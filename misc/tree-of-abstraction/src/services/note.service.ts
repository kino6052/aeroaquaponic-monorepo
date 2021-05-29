import { intersection } from "lodash";
import { Id, INote, IState } from "../bridge";
import { IEvent } from "../utils/EventWrapper";
import { Utils } from "../utils/utils";
import { getDescendants, updateTreeNodes } from "./tree.service";

export const shortcutAddNote = (state: IState, event: IEvent): IState => {
  const noteId=  `${Id.Note}-${Utils.generateId()}`
  const newNoteNode: INote = {
    description: "Description...",
    title: "Title",
    id: noteId,
    isCollapsed: true,
    isEditable: false,
    parents: [state.selectedNode],
  };
  const newTreeNodes = updateTreeNodes(state, (node) => {
    if (node.id === state.selectedNode) {
      return {
        ...node,
        notes: [...node.notes, noteId],
      };
    }
    return node;
  });
  return {
    ...state,
    treeNodes: newTreeNodes,
    selectedNote: newNoteNode.id,
    noteNodes: {
      [newNoteNode.id]: newNoteNode,
      ...state.noteNodes,
    },
  };
};

export const shortcutDownNote = (state: IState, event: IEvent): IState => {
  const notes = state.notes;
  const maxIndex = notes.length;
  const index = state.notes.indexOf(state.selectedNote);
  const newIndex = (index + 1) % maxIndex;
  return { ...state, selectedNote: notes[newIndex] };
};

export const shortcutUpNote = (state: IState, event: IEvent): IState => {
  const notes = state.notes;
  const maxIndex = notes.length;
  const index = state.notes.indexOf(state.selectedNote);
  const newIndex = (maxIndex + index - 1) % maxIndex;
  return { ...state, selectedNote: notes[newIndex] };
};

export const shortcutCollapseNote = (state: IState, event: IEvent): IState => {
  const note = state.noteNodes[state.selectedNote];
  const newNoteNodes: IState["noteNodes"] = {
    ...state.noteNodes,
    [state.selectedNote]: {
      ...note,
      isCollapsed: !note.isCollapsed,
    },
  };
  return { ...state, noteNodes: newNoteNodes };
};

export const shortcutRemoveNote = (state: IState): IState => {
  const selectedNote = state.noteNodes[state.selectedNote];
  const newNoteNodes: IState["noteNodes"] = {
    ...state.noteNodes,
    [state.selectedNote]: {
      ...selectedNote,
      parents: [],
    },
  };
  const newTreeNodes = updateTreeNodes(state, (node) => {
    if (selectedNote.parents.includes(node.id)) {
      return {
        ...node,
        notes: node.notes.filter((id) => id !== state.selectedNote),
      };
    }
    return node;
  });
  return { ...state, noteNodes: newNoteNodes, treeNodes: newTreeNodes };
};

export const processNotes = (state: IState): IState => {
  const newNotes: string[] = Object.values(state.noteNodes).reduce(
    (acc, note) => {
      const descendants = [
        state.selectedNode,
        getDescendants(state.selectedNode, state),
      ];
      const intersectionResult = intersection(descendants, note.parents);
      if (intersectionResult.length > 0) {
        return [...acc, note.id];
      }
      return acc;
    },
    [] as string[]
  );
  return {
    ...state,
    notes: newNotes,
  };
};
