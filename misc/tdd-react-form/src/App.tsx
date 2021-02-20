import * as React from "react";
import { EventSubject, EventWrapper } from "./EventWrapper";
import { act, StateSubject } from "./new";
import { Service } from "./service";
import "./styles.css";
import { SubmitId } from "./submit.service";
import { useSharedState } from "./utils";

const Form = (props: { inputs: [string, { value: string, error: string}][] }) => {
  const { inputs } = props;
  console.warn(inputs);
  return (
    <form>
      {inputs.map((input) => (
        <div key={input[0]} style={{ flexDirection: "column" }}>
          <div>
            <EventWrapper id={input[0]}>
              <input
                value={input[1].value}
              />
            </EventWrapper>
          </div>
          {input[1].error && <p style={{ color: "red" }}>{input[1].error}</p>}
        </div>
      ))}
      <EventWrapper id={SubmitId}>
        <button>Submit</button>
      </EventWrapper>
    </form>
  );
};

EventSubject.subscribe((event) => {
  StateSubject.next(act(StateSubject.getValue())(event));
});

export default function App() {
  React.useEffect(() => {
    Service.InitSubject.next();
  }, []);
  const [state] = useSharedState(StateSubject);
  return (
    <div className="App">
      <Form inputs={Object.entries(state)} />
    </div>
  );
}
