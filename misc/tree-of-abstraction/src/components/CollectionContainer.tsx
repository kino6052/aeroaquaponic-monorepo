import React from "react";
import { IAppState, Id, IState } from "../bridge";
import { EventWrapper } from "../utils/EventWrapper";

export const CollectionContainer: React.FC<{ state: IAppState }> = (props) => {
  const state = props.state.collection;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
        background: "black",
      }}
      className="container"
    >
      <div>
        <EventWrapper id={Id.SearchCollectionsInput}>
          <input
            autoFocus
            placeholder="Search"
            value={state.collectionSearchInput}
          />
        </EventWrapper>
      </div>
      <ul>
        {state.collections.map((id) => {
          const entity = state.collectionNodes[id];
          return (
            <li
              key={id}
              style={{
                marginLeft: "32px",
                backgroundColor: (entity.isHighlighted && "grey") || "unset",
              }}
            >
              <EventWrapper
                key={id}
                id={`${Id.Collection}-${id.replace(`${Id.Collection}-`, "")}`}
              >
                {!entity.isEditable && <span>{entity.title}</span>}
                {entity.isEditable && <input autoFocus value={entity.title} />}
              </EventWrapper>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
