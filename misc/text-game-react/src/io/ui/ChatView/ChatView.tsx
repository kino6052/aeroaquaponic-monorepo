import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { BehaviorSubject } from "rxjs";
import { Id, IState } from "../../../bridge";
import { EventWrapper } from "../utils/EventWrapper";
import { useSharedState } from "../utils/SharedState";
import "./index.css";

const TypeWriterSubject = new BehaviorSubject(0);

window.setInterval(() => {
  TypeWriterSubject.next(TypeWriterSubject.getValue() + 1);
}, 10);

const TypeWriter: React.FC<{ input: string }> = (props) => {
  const [count, setCount] = useSharedState(TypeWriterSubject);

  useLayoutEffect(() => {
    setCount(0);
  }, []);

  return (
    <span
      dangerouslySetInnerHTML={{ __html: props.input.substring(0, count) }}
    ></span>
  );
};

export const ChatView = (props: IState) => {
  const { input, history, output } = props;
  const [key, setKey] = useState(Math.random());
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    setKey(Math.random());
  }, [props.output]);

  useEffect(() => {
    ref.current?.scrollIntoView();
  }, [ref, history]);

  return (
    <div className="container">
      <div className="feed">
        {history.map((v) => (
          <span
            className="history"
            key={btoa(v)}
            dangerouslySetInnerHTML={{ __html: v }}
          ></span>
        ))}
        {/* 
        //@ts-ignore */}
        {/* <span ref={ref} dangerouslySetInnerHTML={{ __html: output }}></span> */}
        <TypeWriter key={key} input={output} />
        <span ref={ref} />
      </div>
      <div className="input">
        <EventWrapper id={Id.Input}>
          <input autoFocus value={input} />
        </EventWrapper>
      </div>
    </div>
  );
};
