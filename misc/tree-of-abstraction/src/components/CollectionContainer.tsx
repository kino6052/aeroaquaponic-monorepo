import React from "react";
import { ICollectionState, Id } from "../bridge";
import { EventWrapper } from "../utils/EventWrapper";

export const CollectionContainer = (props: { state: ICollectionState }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      height: "100vh",
      overflow: "hidden",
      background: "black",
    }}
    className="container"
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderRight: "2px dashed black",
        width: "100%",
        height: "100%",
        background: "#333",
        overflow: "scroll",
      }}
    >
      <div style={{ display: "flex", position: "fixed", top: 0 }}>
        <EventWrapper id={Id.SearchItemsInput}>
          <input
            autoFocus
            placeholder="Search"
            // value={props.state.itemSearchInput}
          />
        </EventWrapper>
      </div>
      <br />
      <ul>
        Test
        {/* {props.state.tree.map((id) => {
          const node = props.state.treeNodes[id];
          return (
            <li
              key={id}
              style={{
                marginLeft: node.indent * 32,
                backgroundColor:
                  (node.isHighlighted && "orange") ||
                  (node.id === props.state.selectedNode && "grey") ||
                  "unset",
              }}
            >
              <EventWrapper
                key={id}
                id={`${Id.Item}-${id.replace(`${Id.Item}-`, "")}`}
              >
                {!node.isEditable && <span>{node.title}</span>}
                {node.isEditable && <input autoFocus value={node.title} />}
              </EventWrapper>{" "}
              <span>{node.isCollapsed ? "(...)" : ""}</span>
            </li>
          );
        })} */}
      </ul>
    </div>
  </div>
);
