import * as React from "react";
import { InitSubject } from "./init.service";
import { IInput, Service } from "./service";
import { StateService } from "./state.service";
import "./styles.css";
import { useSharedState } from "./utils";
import './field01.service';
import './field02.service';
import './field03.service';
import { SubmitId } from "./submit.service";

const EventWrapper: React.FC<{ id: string }> = (props) => {
  const { children, id } = props;
  const childrenWithProps = React.Children.map<
    React.ReactNode,
    React.ReactNode
  >(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        id,
        onClick: (e: React.MouseEvent) => {
          e.preventDefault();
          Service.EventSubject.next(["click", id, ""]);
        },
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          e.preventDefault();
          Service.EventSubject.next([
            "change",
            id,
            e?.target?.value
          ]);
        },
        onFocus: (e: React.FocusEvent) => {
          e.preventDefault();
          Service.EventSubject.next(["focus", id, ""]);
        }
      });
    }
    return child;
  });
  return <>{childrenWithProps}</>;
};

const Form = (props: { inputs: IInput[] }) => {
  const { inputs } = props;
  React.useEffect(() => {
    InitSubject.next();
  }, []);
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
  const [state] = useSharedState(StateService.getInstance().StateSubject);
  return (
    <div className="App">
      <Form inputs={state} />
    </div>
  );
}
