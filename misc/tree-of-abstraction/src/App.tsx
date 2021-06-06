import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StateSubject } from "./bridge";
import { CollectionContainer } from "./components/CollectionContainer";
import { TreeContainer } from "./components/TreeContainer";
import { useSharedState } from "./utils/utils";

export default function App() {
  const [state] = useSharedState(StateSubject);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <CollectionContainer state={state} />
          </Route>
          <Route path="/:tree">
            <TreeContainer state={state} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
