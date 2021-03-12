import { BehaviorSubject } from "rxjs";
import { act } from "./services/main.service";
import { EventSubject } from "./utils/EventWrapper";
import "./services/shortcuts.service";

export type InputType = "change" | "click" | "focus";

export enum Id {
  // Items
  AddItemInput = "add-item-input",
  Item = "item-element",
  SearchItemsInput = "search-items-input",
  // Notes
  Note = "note-element",
  NoteTitle = "note-title",
  NoteDescription = "note-description",
  Keyboard = "keyboard",
}

export const RootId = `${Id.Item}-root`;

export type IInput = [InputType, string, string];

export interface INode {
  id: string;
  title: string;
  isCollapsed: boolean;
  isEditable: boolean;
  children: string[];
  notes: string[];
  parent: string;
  isHighlighted: boolean;
  indent: number;
}

export interface INote {
  id: string;
  title: string;
  description: string;
  isCollapsed: boolean;
  isEditable: boolean;
  parents: string[];
}

export type ITree = string[];

export type IState = {
  scope: "tree" | "notes";

  // Tree
  treeNodes: { [id: string]: INode };
  tree: ITree;
  selectedNode: string;
  itemSearchInput: string;

  // Notes
  noteNodes: { [id: string]: INote };
  notes: string[];
  selectedNote: string;
  noteSearchInput: string;
};

const RootNode = {
  id: RootId,
  children: [],
  notes: [],
  isCollapsed: false,
  isHighlighted: false,
  isEditable: false,
  parent: "",
  title: "ROOT",
  indent: 0,
};

export const initialState: IState = {
  scope: "tree",

  // Tree
  treeNodes: {
    [RootId]: RootNode,
  },
  tree: [RootId],
  selectedNode: RootId,
  itemSearchInput: "",

  //Notes
  noteNodes: {},
  notes: [],
  selectedNote: "",
  noteSearchInput: "",
};

export const UndoStack: IState["treeNodes"][] = [];
export const RedoStack: IState["treeNodes"][] = [];

EventSubject.subscribe((event) => {
  const prevState = StateSubject.getValue();
  const newState = act(prevState)(event);
  StateSubject.next(newState);
});

export const StateSubject = new BehaviorSubject<IState>(initialState);
