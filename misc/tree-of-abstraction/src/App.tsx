import * as React from "react";
import { StateSubject } from "./bridge";
import { Container } from "./components/Container";
import { useSharedState } from "./utils/utils";

export default function App() {
  const [state] = useSharedState(StateSubject);
  return (
    <div className="App">
      <Container state={state} />
    </div>
  );
}
