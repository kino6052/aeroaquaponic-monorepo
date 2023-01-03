import { useEffect, useLayoutEffect, useState } from "react";
import { IState } from "../../bridge";
import { EventSubject } from "./utils/EventWrapper";
import "./App.css";
import { DecisionTree } from "./DecisionTree/DecisionTree";

function App(props: { state: IState }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useLayoutEffect(() => {
    EventSubject.next(["load", "", ""]);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const { state } = props;
    const _newSearch = `${[...state.history, state.currentId]
      .filter((v) => !!v)
      .join("&")}`;

    const newSearch = _newSearch ? `?${_newSearch}` : "";

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
