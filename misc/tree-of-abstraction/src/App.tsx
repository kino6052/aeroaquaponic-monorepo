import * as React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ERoute, StateSubject } from "./bridge";
import { CollectionContainer } from "./components/CollectionContainer";
import { Loader } from "./components/Loader";
import { TreeContainer } from "./components/TreeContainer";
import { useSharedState } from "./utils/utils";

export default function App() {
  const [state] = useSharedState(StateSubject);
  return (
    <div className="App">
      <Router>
        {state.isLoading && <Loader />}
        {state.route === ERoute.Collection ? (
          <CollectionContainer state={state} />
        ) : (
          <TreeContainer state={state} />
        )}
      </Router>
    </div>
  );
}
