import { BehaviorSubject } from "rxjs";
import { act } from "./services/main.service";
import {} from "./services/collection.service";
import { EventSubject, IEvent } from "./utils/EventWrapper";
import "./services/shortcuts.service";
import "./services/persistence.service";
import { genericSequence } from "./utils/utils";

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
  // Collection
  Collection = "collection-element",
}

export type IAct<T> = (state: T) => (event: IEvent) => T;

export const Scope = ["tree", "notes"] as const;

export const RootId = `${Id.Item}-root`;

export type IInput = [InputType, string, string];

export interface IEntity {
  id: string;
  title: string;
  isEditable: boolean;
}

export interface INode extends IEntity {
  isCollapsed: boolean;
  children: string[];
  notes: string[];
  parent: string;
  isHighlighted: boolean;
  indent: number;
}

export interface INote extends IEntity {
  description: string;
  isCollapsed: boolean;
  parents: string[];
}

export type ITree = string[];

export enum ERoute {
  Collection = "Collection",
  Tree = "Tree",
}

export type IAppState = {
  // Routing
  route: ERoute;

  collection: {
    // Collection
    collectionNodes: { [id: string]: IEntity };
    selectedCollection?: string;
  };

  tree: {
    // Tree
    scope: typeof Scope[number];
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
};

export type IState = IAppState["tree"];

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

export const initialState: IAppState = {
  // Routing
  route: ERoute.Tree,

  collection: {
    collectionNodes: {},
    selectedCollection: "",
  },

  tree: {
    // Tree
    scope: Scope[0],
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
  },
};

const initialCollectionState: IAppState = {
  ...initialState,
  route: ERoute.Collection,
};

export const StateSubject = new BehaviorSubject<IAppState>(
  initialCollectionState
);

EventSubject.subscribe((event) => {
  const prevState = StateSubject.getValue();
  const newState = act(prevState)(event);
  console.info(newState);
  StateSubject.next(newState);
});

export const sequence = genericSequence(act, initialState);

export const getSequence = (initialState: IAppState) => (
  inputs: IEvent[]
): IAppState => inputs.reduce((acc, input) => act(acc)(input), initialState);
