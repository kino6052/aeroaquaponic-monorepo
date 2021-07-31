import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  useParams,
} from "react-router-dom";
import { ERoute, Id, StateSubject } from "./bridge";
import { CollectionContainer } from "./components/CollectionContainer";
import { Loader } from "./components/Loader";
import { TreeContainer } from "./components/TreeContainer";
import { EventSubject } from "./utils/EventWrapper";
import { useSharedState } from "./utils/utils";

const RouteHelper: React.FC<{}> = () => {
  const [state] = useSharedState(StateSubject);
  const history = useHistory();
  const pathname = history.location.pathname;
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    console.warn("Collection", pathname);
    if (pathname) {
      const route = pathname === "/" ? ERoute.Collection : ERoute.Tree;
      document.dispatchEvent(new CustomEvent("route"));
      EventSubject.next(["io", Id.Load, "true"]);
      EventSubject.next(["io", Id.Route, route]);
    }
  }, [pathname]);

  React.useEffect(() => {
    history.push(
      state.route === ERoute.Collection || !state.collection.selectedCollection
        ? "/"
        : `/tree/${state.collection.selectedCollection}`
    );
  }, [state.route]);

  return null;
};

export default function App() {
  const [state] = useSharedState(StateSubject);
  return (
    <div className="App">
      <Router>
        {state.isLoading && <Loader />}
        <RouteHelper />
        <Switch>
          <Route exact path="/">
            <CollectionContainer state={state} />
          </Route>
          <Route path="/tree/:id">
            <TreeContainer state={state} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
