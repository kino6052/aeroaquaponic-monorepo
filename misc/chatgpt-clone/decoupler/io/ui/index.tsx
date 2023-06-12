import React from "react";
import { BehaviorSubject } from "rxjs";
import { useSharedState } from "../../../utils/useSharedState";
import { initialState } from "../../bridge";
import { IState, TMainProps } from "../../types";
import { Main } from "./components/App";
import { selectMainProps } from "../../selectors";

const PropsSubject = new BehaviorSubject<TMainProps>(
  selectMainProps(initialState)
);

export function uiHandler(state: IState) {
  const props = selectMainProps(state);

  PropsSubject.next(props);
}

export const App: React.FC = () => {
  const [props] = useSharedState(PropsSubject);

  if (typeof window === undefined) return null;
  return <Main {...props} />;
};
