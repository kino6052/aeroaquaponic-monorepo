import { useEffect } from "react";
import { IState } from "../../bridge";
import { EventSubject } from "./utils/EventWrapper";
import "./App.css";
import { DecisionTree } from "./DecisionTree/DecisionTree";

function App(props: { state: IState }) {
  useEffect(() => {
    EventSubject.next(["load", "", ""]);
  }, []);
  return <DecisionTree {...props.state} />;
}

export default App;
