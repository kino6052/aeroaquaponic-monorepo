import { BehaviorSubject } from "rxjs";
import { act } from "./services/main.service";
import { EventSubject, IEvent } from "./utils/EventWrapper";
import "./services/shortcuts.service";
import "./services/persistence.io";
import "./services/export";
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
  SearchCollectionsInput = "search-collections-input",
  // IO
  Save = "save-io",
  Load = "load-io",
  State = "collections-io",
  Tree = "tree-io",
  Route = "route-io",
}

export type IAct<T> = (state: T) => (event: IEvent) => T;

export const Scope = ["tree", "notes"] as const;

export const RootId = `${Id.Item}-root`;

export type IInput = [InputType, string, string];

export interface IEntity {
  id: string;
  title: string;
  isEditable: boolean;
  isHighlighted: boolean;
}

export interface INode extends IEntity {
  isCollapsed: boolean;
  children: string[];
  notes: string[];
  parent: string;
  indent: number;
}

export interface INote extends IEntity {
  description: string;
  isCollapsed: boolean;
  parents: string[];
  score?: number;
}

export type ITree = string[];

export enum ERoute {
  Collection = "Collection",
  Tree = "Tree",
}

export type IAppState = {
  isLoading: boolean;

  // Routing
  route: ERoute;

  collection: {
    // Collection
    collectionNodes: { [id: string]: IEntity };
    selectedCollection?: string;
    collectionSearchInput: string;
    collections: string[];
  };

  tree: {
    title: string;

    // Tree
    scope: typeof Scope[number];
    treeNodes: { [id: string]: INode };
    tree: ITree;
    selectedNode: string;
    itemSearchInput: string;

    // Notes
    isMemory: boolean;
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
  isLoading: false,

  // Routing
  route: ERoute.Tree,

  collection: {
    collectionNodes: {},
    selectedCollection: "test",
    collectionSearchInput: "",
    collections: [],
  },

  tree: {
    title: "Tree",

    // Tree
    scope: Scope[0],
    treeNodes: {
      [RootId]: RootNode,
    },
    tree: [RootId],
    selectedNode: RootId,
    itemSearchInput: "",

    //Notes
    isMemory: false,
    noteNodes: {},
    notes: [],
    selectedNote: "",
    noteSearchInput: "",
  },
};

export const initialCollectionState: IAppState = {
  ...initialState,
  route: ERoute.Collection,
  collection: {
    ...initialState.collection,
    selectedCollection: undefined,
  },
};

export const initialLoadingState: IAppState = {
  ...initialCollectionState,
  isLoading: true,
};

export const StateSubject = new BehaviorSubject<IAppState>(initialLoadingState);

window.addEventListener("load", () => {
  EventSubject.subscribe((event) => {
    const prevState = StateSubject.getValue();
    const newState = act(prevState)(event);
    console.info(event, newState);
    StateSubject.next(newState);
  });
});

export const sequence = genericSequence(act, initialState);

export const getSequence = (initialState: IAppState) => (
  inputs: IEvent[]
): IAppState => inputs.reduce((acc, input) => act(acc)(input), initialState);
