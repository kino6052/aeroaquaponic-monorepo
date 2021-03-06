import { BehaviorSubject } from "rxjs";
import { act } from "./services/service";
import { EventSubject } from "./utils/EventWrapper";

export type InputType = "change" | "click" | "focus";

export const RootId = "root";

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
  indent: number;
}

export type ITree = INode[];

export type IState = {
  treeNodes: { [id: string]: INode };
  tree: ITree;
  selectedNode: string;
  addItemInput: string;
  itemSearchInput: string;
};

const RootNode = {
  id: RootId,
  children: [],
  isCollapsed: false,
  isHighlighted: false,
  parent: "",
  title: "ROOT",
  indent: 0,
};

export const initialState: IState = {
  treeNodes: {
    [RootId]: RootNode,
  },
  tree: [RootNode],
  selectedNode: "",
  itemSearchInput: "",
  addItemInput: "",
};

EventSubject.subscribe((event) => {
  StateSubject.next(act(StateSubject.getValue())(event));
});

export const StateSubject = new BehaviorSubject<IState>(initialState);
