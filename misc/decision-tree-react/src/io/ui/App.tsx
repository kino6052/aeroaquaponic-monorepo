import { useEffect, useLayoutEffect } from "react";
import { IState } from "../../bridge";
import { EventSubject } from "./utils/EventWrapper";
import "./App.css";
import { DecisionTree } from "./DecisionTree/DecisionTree";

function App(props: { state: IState }) {
  useLayoutEffect(() => {
    EventSubject.next(["load", "", ""]);
  }, []);

  useEffect(() => {
    const { state } = props;
    const newSearch = `?${[...state.history, state.currentId]
      .filter((v) => !!v)
      .join("&")}`;

    if (window.location.search === newSearch) return;

    var newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      newSearch;
    window.history.pushState({ path: newurl }, "", newurl);
  }, [props]);
  return <DecisionTree {...props.state} />;
}

export default App;
