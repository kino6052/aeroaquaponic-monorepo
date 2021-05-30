import { intersection } from "lodash";
import { Id, INote, IState } from "../bridge";
import { IEvent } from "../utils/EventWrapper";
import { Utils } from "../utils/utils";
import { getDescendants, updateTreeNodes } from "./tree.service";

export const shortcutAddNote = (state: IState, event: IEvent): IState => {
  const noteId = `${Id.Note}-${Utils.generateId()}`;
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

export const editNote = (state: IState): IState => {
  const selectedNote = state.noteNodes[state.selectedNote];
  const newNoteNodes: IState["noteNodes"] = {
    ...updateNoteNodes(state, (note) => ({ ...note, isEditable: false })),
    [state.selectedNote]: {
      ...selectedNote,
      isEditable: !selectedNote.isEditable,
    },
  };
  return { ...state, noteNodes: newNoteNodes };
};

export const updateNoteNodes = (state: IState, cb: (note: INote) => INote) =>
  Object.values(state.noteNodes)
    .map(cb)
    .reduce(
      (acc, note) => ({ ...acc, [note.id]: note }),
      {} as typeof state.noteNodes
    );

export const changeNoteTitle = (
  state: IState,
  [, id, value]: IEvent
): IState => {
  const newNoteNodes = updateNoteNodes(state, (note) => {
    const isFound =
      id.replace(Id.NoteTitle, "") === note.id.replace(Id.Note, "");
    if (!isFound) return note;
    return {
      ...note,
      title: value,
    };
  });
  return {
    ...state,
    noteNodes: newNoteNodes,
  };
};

export const changeNoteDescription = (
  state: IState,
  [, id, value]: IEvent
): IState => {
  const newNoteNodes = updateNoteNodes(state, (note) => {
    const isFound =
      id.replace(Id.NoteDescription, "") === note.id.replace(Id.Note, "");
    if (!isFound) return note;
    return {
      ...note,
      description: value,
    };
  });
  return {
    ...state,
    noteNodes: newNoteNodes,
  };
};

export const processNotes = (state: IState): IState => {
  const descendants = [
    state.selectedNode,
    ...getDescendants(state.selectedNode, state),
  ];
  const newNotes: string[] = Object.values(state.noteNodes).reduce(
    (acc, note) => {
      const intersectionResult = intersection(descendants, note.parents);
      if (intersectionResult.length > 0) {
        const isMatch =
          state.noteSearchInput.length >= 3 &&
          note.title
            .toLowerCase()
            .includes(state.noteSearchInput.toLowerCase());
        const notFiltered = state.noteSearchInput.length < 3;

        return isMatch || notFiltered ? [...acc, note.id] : acc;
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

export const changeSearchInput = (
  state: IState,
  [, , value]: IEvent
): IState => {
  return {
    ...state,
    noteSearchInput: value,
  };
};
