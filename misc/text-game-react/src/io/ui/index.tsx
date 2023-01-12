import React from "react";
import ReactDOM from "react-dom/client";
import { BehaviorSubject, Subject } from "rxjs";
import { AppEventSubject, IState } from "../../bridge";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { EventSubject } from "./utils/EventWrapper";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const SpeechSubject = new BehaviorSubject<string>("");

export const presentationIO = (state: IState) => {
  SpeechSubject.next(state.output);
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
    SpeechSubject.subscribe((output) => {
      speechSynthesis.cancel();
      let speakData = new SpeechSynthesisUtterance();
      speakData.text = output;
      speakData.lang = "en";
      speakData.volume = 1; // From 0 to 1
      speakData.rate = 5; // From 0.1 to 10
      speakData.pitch = 2; // From 0 to 2
      speechSynthesis.speak(speakData);
    });
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
