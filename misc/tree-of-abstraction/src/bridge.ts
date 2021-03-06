import { BehaviorSubject } from "rxjs";
import { act } from "./services/service";
import { EventSubject } from "./utils/EventWrapper";

export type InputType = "change" | "click" | "focus";

export enum Id {
  AddItemButton = "add-item-button",
  AddItemInput = "add-item-input",
  SaveItemButton = "save-item-button",
  Item = "item",
  SearchItemsInput = "search-items-input",
  CollapseItemButton = "collapse-button",
}

export type IInput = [InputType, string, string];

export interface INode {
  id: string;
  title: string;
  isCollapsed: boolean;
  children: string[];
  parent: string;
  isHighlighted: boolean;
}

export type ITree = { [id: string]: ITree };

export type IState = {
  treeNodes: { [id: string]: INode };
  tree: ITree;
  selectedNode: string;
  addItemInput: string;
  itemSearchInput: string;
};

export const initialState: IState = {
  treeNodes: {},
  tree: {},
  selectedNode: "",
  itemSearchInput: "",
  addItemInput: "",
};

EventSubject.subscribe((event) => {
  StateSubject.next(act(StateSubject.getValue())(event));
});

export const StateSubject = new BehaviorSubject<IState>(initialState);
