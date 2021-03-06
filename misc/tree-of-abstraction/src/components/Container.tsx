import React from "react";
import { Id, IState } from "../bridge";
import { EventWrapper } from "../utils/EventWrapper";

export const Container = (props: { state: IState }) => (
  <>
    <EventWrapper id={Id.SearchItemsInput}>
      <input placeholder="Search" value={props.state.itemSearchInput} />
    </EventWrapper>
    <br />
    <EventWrapper id={Id.AddItemInput}>
      <input placeholder="Add Item" value={props.state.addItemInput} />
    </EventWrapper>
    <EventWrapper id={Id.AddItemButton}>
      <button>Add Item</button>
    </EventWrapper>
    <ul>
      {props.state.tree.map((id) => {
        const node = props.state.treeNodes[id];
        return (
          <li
            style={{
              marginLeft: node.indent * 32,
              backgroundColor: node.isHighlighted ? "yellow" : "unset",
            }}
          >
            <EventWrapper
              key={id}
              id={`${Id.Item}-${id.replace(`${Id.Item}-`, "")}`}
            >
              <span>{node.title}</span>
            </EventWrapper>
            <EventWrapper
              id={`${Id.CollapseItemButton}-${id.replace(`${Id.Item}-`, "")}`}
            >
              <button>_</button>
            </EventWrapper>
          </li>
        );
      })}
    </ul>
  </>
);
