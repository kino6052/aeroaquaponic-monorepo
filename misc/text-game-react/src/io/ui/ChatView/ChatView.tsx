import { Id, IState } from "../../../bridge";
import { EventWrapper } from "../utils/EventWrapper";
import "./index.css";

export const ChatView = (props: IState) => {
  const { input, history, output } = props;
  return (
    <div className="container">
      <div className="feed">
        {history.map((v) => (
          <p>{v}</p>
        ))}
        <p>{output}</p>
      </div>
      <div className="input">
        <EventWrapper id={Id.Input}>
          <input value={input} />
        </EventWrapper>
      </div>
    </div>
  );
};
