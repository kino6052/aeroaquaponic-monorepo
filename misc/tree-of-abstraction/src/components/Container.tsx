import React from "react";
import { Id, IState } from "../bridge";
import { EventWrapper } from "../utils/EventWrapper";

export const Container = (props: { state: IState }) => (
  <>
    <EventWrapper id={Id.SearchItemsInput}>
      <input value={props.state.itemSearchInput} />
      <div></div>
    </EventWrapper>
  </>
);
