import { IState } from "../../bridge";
import "./App.css";
import { DecisionTree } from "./DecisionTree/DecisionTree";

function App(props: { state: IState }) {
  return <DecisionTree {...props.state} />;
}

export default App;
