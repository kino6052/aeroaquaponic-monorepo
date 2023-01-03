import React from "react";
import ReactDOM from "react-dom/client";
import { AppEventSubject, IState } from "../../bridge";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { EventSubject } from "./utils/EventWrapper";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export const presentationIO = (state: IState) => {
  root.render(
    <React.StrictMode>
      <App state={state} />
    </React.StrictMode>
  );
};

// NOTE: Mapping of UI Events to App Events
EventSubject.subscribe((event) => {
  const [type, id, value] = event;
  if (type === "load") {
    // TODO: Implement
    return;
  }
  if (type === "keyDown") {
    if (value === "Enter") {
      AppEventSubject.next(["enter", ""]);
      return;
    }
    if (value === "Tab") {
      AppEventSubject.next(["suggest", ""]);
      return;
    }
    return;
  }
  if (type === "change") {
    AppEventSubject.next([type, value]);
    return;
  }
});

window.addEventListener("popstate", (event) => {
  // TODO: Implement if needed
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
