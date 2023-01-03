import { useEffect, useRef } from "react";
import { Id, IState } from "../../../bridge";
import { EventWrapper } from "../utils/EventWrapper";
import "./index.css";

export const ChatView = (props: IState) => {
  const { input, history, output } = props;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    ref.current!.scrollIntoView();
  }, [ref, history]);

  return (
    <div className="container">
      <div className="feed">
        {history.map((v) => (
          <span dangerouslySetInnerHTML={{ __html: v }}></span>
        ))}
        {/* 
        //@ts-ignore */}
        <span ref={ref} dangerouslySetInnerHTML={{ __html: output }}></span>
      </div>
      <div className="input">
        <EventWrapper id={Id.Input}>
          <input value={input} />
        </EventWrapper>
      </div>
    </div>
  );
};
