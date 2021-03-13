import { Id, INote, IState } from "../bridge";
import { IEvent } from "../utils/EventWrapper";
import { Utils } from "../utils/utils";

export const shortcutAddNote = (state: IState, event: IEvent): IState => {
  const newNoteNode: INote = {
    description: "Description...",
    title: "Title",
    id: `${Id.Note}-${Utils.generateId()}`,
    isCollapsed: false,
    isEditable: false,
    parents: [state.selectedNode],
  };
  return {
    ...state,
    selectedNote: newNoteNode.id,
    noteNodes: {
      ...state.noteNodes,
      [newNoteNode.id]: newNoteNode,
    },
  };
};

export const processNotes = (state: IState): IState => {
  const newNotes: string[] = Object.values(state.noteNodes).reduce(
    (acc, note) => [...acc, note.id],
    [] as string[]
  );
  return {
    ...state,
    notes: newNotes,
  };
};
