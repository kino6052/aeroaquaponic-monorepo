import React from "react";
import { Id, IState } from "../bridge";
import { EventWrapper } from "../utils/EventWrapper";

export const Container = (props: { state: IState }) => (
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
        opacity: props.state.scope === "tree" ? "100%" : "50%",
        display: "flex",
        flexDirection: "column",
        width: "50%",
        borderRight: "2px dashed black",
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
            value={props.state.itemSearchInput}
          />
        </EventWrapper>
      </div>
      <br />
      <ul>
        {props.state.tree.map((id) => {
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
        })}
      </ul>
    </div>
    <div
      style={{
        display: "flex",
        opacity: props.state.scope === "notes" ? "100%" : "50%",
        flexDirection: "column",
        width: "50%",
        borderRight: "2px dashed black",
        background: "#333",
        height: "100%",
      }}
    >
      <div style={{ display: "flex", position: "fixed", top: 0 }}>
        <EventWrapper id={Id.SearchItemsInput}>
          <input
            autoFocus
            placeholder="Search"
            value={props.state.noteSearchInput}
          />
        </EventWrapper>
      </div>
      <br />
      <ul>
        {props.state.notes.map((id) => {
          const note = props.state.noteNodes[id];
          return (
            <li key={id}>
              <EventWrapper
                key={id}
                id={`${Id.Item}-${id.replace(`${Id.Note}-`, "")}`}
              >
                <div>
                  {!note.isEditable && <p>{note.title}</p>}
                  {note.isEditable && (
                    <EventWrapper
                      id={`${Id.NoteTitle}-${id.replace(
                        `${Id.NoteTitle}-`,
                        ""
                      )}`}
                    >
                      <input value={note.title} />
                    </EventWrapper>
                  )}
                  {!note.isEditable && !note.isCollapsed && (
                    <p>{note.description}</p>
                  )}
                  {note.isEditable && (
                    <EventWrapper
                      id={`${Id.NoteDescription}-${id.replace(
                        `${Id.NoteDescription}-`,
                        ""
                      )}`}
                    >
                      <input value={note.title} />
                    </EventWrapper>
                  )}
                </div>
              </EventWrapper>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);
