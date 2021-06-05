import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StateSubject } from "./bridge";
import { TreeContainer as Container } from "./components/Container";
import { useSharedState } from "./utils/utils";

export default function App() {
  const [state] = useSharedState(StateSubject);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Container state={state.tree} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
