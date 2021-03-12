import { BehaviorSubject } from "rxjs";
import { act } from "./services/main.service";
import { EventSubject } from "./utils/EventWrapper";
import "./services/shortcuts.service";

export type InputType = "change" | "click" | "focus";

export enum Id {
  AddItemButton = "add-item-button",
  AddItemInput = "add-item-input",
  SaveItemButton = "save-item-button",
  Item = "item-element",
  SearchItemsInput = "search-items-input",
  CollapseItemButton = "collapse-button",
  RemoveItemButton = "remove-item-button",
  EditItemButton = "edit-item-button",
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
  parent: string;
  isHighlighted: boolean;
  indent: number;
}

export type ITree = string[];

export type IState = {
  treeNodes: { [id: string]: INode };
  tree: ITree;
  selectedNode: string;
  addItemInput: string;
  itemSearchInput: string;
  shouldShowControls: boolean;
};

const RootNode = {
  id: RootId,
  children: [],
  isCollapsed: false,
  isHighlighted: false,
  isEditable: false,
  parent: "",
  title: "ROOT",
  indent: 0,
};

export const initialState: IState = {
  treeNodes: {
    [RootId]: RootNode,
  },
  tree: [RootId],
  selectedNode: RootId,
  itemSearchInput: "",
  addItemInput: "",
  shouldShowControls: false,
};

export const UndoStack: IState["treeNodes"][] = [];
export const RedoStack: IState["treeNodes"][] = [];

EventSubject.subscribe((event) => {
  const prevState = StateSubject.getValue();
  const newState = act(prevState)(event);
  StateSubject.next(newState);
});

export const StateSubject = new BehaviorSubject<IState>(initialState);
