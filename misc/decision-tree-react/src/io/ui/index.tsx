import React from "react";
import ReactDOM from "react-dom/client";
import { AppEventSubject, IState, StateSubject } from "../../bridge";
import { EventSubject } from "./utils/EventWrapper";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

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
EventSubject.subscribe(([type, id]) => {
  if (type === "click") {
    AppEventSubject.next(["select", id]);
  }
  if (type === "load") {
    AppEventSubject.next(["restore", document.location.search]);
    console.warn(document.location.search);
  }
});

window.addEventListener("popstate", (event) => {
  AppEventSubject.next(["restore", event.state.path.split("?")[1]]);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
