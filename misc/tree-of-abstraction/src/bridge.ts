import { BehaviorSubject } from "rxjs";
import { treeAct, collectionAct } from "./services/main.service";
import {} from "./services/collection.service";
import { EventSubject } from "./utils/EventWrapper";
import "./services/shortcuts.service";
import "./services/persistence.service";

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
  SearchNotesInput = "search-notes-input",
  Keyboard = "keyboard",
}

export const Scope = ["tree", "notes"] as const;

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

export type ITreeState = {
  scope: typeof Scope[number];

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

export const initialTreeState: ITreeState = {
  scope: Scope[0],

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

export const TreeStateSubject = new BehaviorSubject<ITreeState>(
  initialTreeState
);

EventSubject.subscribe((event) => {
  const prevState = TreeStateSubject.getValue();
  const newState = treeAct(prevState)(event);
  TreeStateSubject.next(newState);
});

export interface ICollectionState {
  collectionIds: string[];
  currentCollectionId?: string;
}

export const initialCollectionState: ICollectionState = {
  collectionIds: [],
};

export const CollectionStateSubject = new BehaviorSubject<ICollectionState>(
  initialCollectionState
);

EventSubject.subscribe((event) => {
  const prevState = CollectionStateSubject.getValue();
  const newState = collectionAct(prevState)(event);
  CollectionStateSubject.next(newState);
});
