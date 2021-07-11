import React, { useEffect } from "react";
import { IAppState, Id, IState } from "../bridge";
import { EventWrapper } from "../utils/EventWrapper";

export const TreeContainer: React.FC<{ state: IAppState }> = (props) => {
  const state = props.state.tree;
  useEffect(() => {
    const selectedNode =
      state.selectedNode && document.querySelector(`#${state.selectedNode}`);
    const selectedNote =
      state.selectedNote && document.querySelector(`#${state.selectedNote}`);
    selectedNode && selectedNode.scrollIntoView();
    selectedNote && selectedNote.scrollIntoView();
  }, [state.selectedNode, state.selectedNote]);
  return (
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
          opacity: state.scope === "tree" ? "100%" : "50%",
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
              value={state.itemSearchInput}
            />
          </EventWrapper>
        </div>
        <br />
        <ul>
          {state.tree.map((id) => {
            const node = state.treeNodes[id];
            return (
              <li
                id={id}
                key={id}
                style={{
                  marginLeft: node.indent * 32,
                  backgroundColor:
                    (node.isHighlighted && "orange") ||
                    (node.id === state.selectedNode && "black") ||
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
          opacity: state.scope === "notes" ? "100%" : "50%",
          flexDirection: "column",
          width: "50%",
          borderRight: "2px dashed black",
          background: "#333",
          height: "100%",
          overflow: "scroll",
        }}
      >
        <div style={{ display: "flex", position: "fixed", top: 0 }}>
          <EventWrapper id={Id.SearchNotesInput}>
            <input
              autoFocus
              placeholder="Search"
              value={state.noteSearchInput}
            />
          </EventWrapper>
        </div>
        <br />
        <ul>
          {state.notes?.map((id) => {
            const note = state.noteNodes?.[id];
            if (!note) return null;
            return (
              <li
                id={id}
                key={id}
                style={{
                  padding: "8px",
                  background: id === state.selectedNote ? "black" : "unset",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <EventWrapper
                    key={id}
                    id={`${Id.Note}-${id.replace(`${Id.Note}-`, "")}`}
                  >
                    {!note.isEditable && <p>{note.title}</p>}
                    {note.parents.map((id) => (
                      <i key={id}>{state.treeNodes[id].title}</i>
                    ))}
                    {!note.isEditable && !note.isCollapsed && (
                      <p
                        dangerouslySetInnerHTML={{ __html: note.description }}
                      ></p>
                    )}
                  </EventWrapper>
                  {note.isEditable && (
                    <EventWrapper
                      id={`${Id.NoteTitle}-${id.replace(`${Id.Note}-`, "")}`}
                    >
                      <input value={note.title} />
                    </EventWrapper>
                  )}
                  {note.isEditable && (
                    <EventWrapper
                      id={`${Id.NoteDescription}-${id.replace(
                        `${Id.Note}-`,
                        ""
                      )}`}
                    >
                      <textarea rows={4} cols={50} value={note.description} />
                    </EventWrapper>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
