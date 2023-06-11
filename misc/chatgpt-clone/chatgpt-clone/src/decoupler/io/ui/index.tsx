import { BehaviorSubject } from "rxjs";
import { useSharedState } from "../../../../utils/useSharedState";
import { initialState } from "../../bridge";
import { IState, TMainProps } from "../../types";
import { Main } from "./components/App";

function mapStateToProps(state: IState): TMainProps {
  return state;
}

const PropsSubject = new BehaviorSubject<TMainProps>(
  mapStateToProps(initialState)
);

export function uiHandler(state: IState) {
  const props = mapStateToProps(state);

  PropsSubject.next(props);
}

export const App: React.FC = () => {
  const [props] = useSharedState(PropsSubject);

  console.warn(props);

  if (typeof window === undefined) return null;
  return <Main {...props} />;
};
