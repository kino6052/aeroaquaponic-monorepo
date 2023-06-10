import React from "react";
import ReactDOM from "react-dom/client";
import { Main as App } from "../../components/App";
import { TMainProps } from "@/components/types";

function mapStateToProps<PState>(state: PState): TMainProps {
  return {
    input: "",
    messages: [],
  };
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export function uiHandler<PState>(state: PState) {
  const props = mapStateToProps(state);
  root.render(
    <React.StrictMode>
      <App {...props} />
    </React.StrictMode>
  );
}
