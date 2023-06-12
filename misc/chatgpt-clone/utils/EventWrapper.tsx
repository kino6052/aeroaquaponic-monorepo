import React from "react";
import { Decoupler, TAction } from "./Decoupler";

export function getEventWrapper<PState, PAction, PControlId, PPayload>(
  decoupler: Decoupler<PState, PAction, PControlId, PPayload>
) {
  const EventWrapper: React.FC<
    React.PropsWithChildren<{
      id: React.PropsWithChildren<TAction<PAction, PControlId, PPayload>>["id"];
    }>
  > = (props) => {
    const { children, id } = props;
    const childrenWithProps = React.Children.map<
      React.ReactNode,
      React.ReactNode
    >(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          // @ts-ignore
          id,
          onClick: (e: React.MouseEvent) => {
            e.preventDefault();
            decoupler.sendAction({
              id,
              type: "click" as PAction,
            });
          },
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();
            decoupler.sendAction({
              id,
              type: "change" as PAction,
              payload: e?.target?.value as PPayload,
            });
          },
          onFocus: (e: React.FocusEvent) => {
            e.preventDefault();
            decoupler.sendAction({
              id,
              type: "focus" as PAction,
            });
          },
        });
      }
      return child;
    });
    return childrenWithProps;
  };
  return EventWrapper;
}
