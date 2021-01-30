import * as React from "react";
import { EventWrapper } from "./EventWrapper";
import './field01.service';
import './field02.service';
import './field03.service';
import { IInput, Service } from "./service";
import { StateService } from "./state.service";
import "./styles.css";
import { SubmitId } from "./submit.service";
import { useSharedState } from "./utils";

const Form = (props: { inputs: IInput[] }) => {
  const { inputs } = props;
  return (
    <form>
      {inputs.map((input) => (
        <div key={input.id} style={{ flexDirection: "column" }}>
          <div>
            <EventWrapper id={input.id}>
              <input
                disabled={input.isDisabled}
                value={input.value}
              />
            </EventWrapper>
            <EventWrapper id={`${input.id}-button`}>
              <button>Validate</button>
            </EventWrapper>
          </div>
          {input.error && <p style={{ color: "red" }}>{input.error}</p>}
        </div>
      ))}
      <EventWrapper id={SubmitId}>
        <button>Submit</button>
      </EventWrapper>
    </form>
  );
};

export default function App() {
  React.useEffect(() => {
    Service.InitSubject.next();
  }, []);
  const [state] = useSharedState(StateService.getInstance().StateSubject);
  return (
    <div className="App">
      <Form inputs={state} />
    </div>
  );
}
