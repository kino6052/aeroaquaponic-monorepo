import { useEffect, useLayoutEffect } from "react";
import { IState } from "../../bridge";
import "./App.css";
import { ChatView } from "./ChatView/ChatView";
import { EventSubject } from "./utils/EventWrapper";

function App(props: { state: IState }) {
  useLayoutEffect(() => {
    EventSubject.next(["load", "", ""]);
  }, []);

  return <ChatView {...props.state} />;
}

export default App;
