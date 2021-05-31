import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CollectionStateSubject, TreeStateSubject } from "./bridge";
import { CollectionContainer } from "./components/CollectionContainer";
import { TreeContainer } from "./components/TreeContainer";
import { useSharedState } from "./utils/utils";

export default function App() {
  const [treeState] = useSharedState(TreeStateSubject);
  const [collectionState] = useSharedState(CollectionStateSubject);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <CollectionContainer state={collectionState} />
          </Route>
          <Route path="/:treeId">
            <TreeContainer state={treeState} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
