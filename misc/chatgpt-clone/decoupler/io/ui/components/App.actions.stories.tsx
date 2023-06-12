import { Main } from "./App";
import { EModel, EUser } from "../../../enums";
import { EActionType, EControlId, TAction, TMainProps } from "../../../types";
import { ActionList } from "./ActionList";
import React from "react";
import { compose } from "../../../reducer";
import { initialState } from "../../../bridge";
import { mapStateToProps } from "..";

const MainWithActions: React.FC<
  TMainProps & { showActions?: boolean; actions?: TAction<any>[] }
> = ({ actions = [], showActions = false, ...mainProps }) => {
  return (
    <div>
      {showActions && <ActionList actions={actions} />}
      <Main {...mainProps} />
    </div>
  );
};

export default {
  title: "ChatGPT/App/Action Driven Example Scenarios",
  component: MainWithActions,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    // layout: "fullscreen",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const InitialState = {
  args: {
    ...mapStateToProps(initialState),
    showActions: false,
  },
};

// NOTE: This happens when you click on the side pannel button
const SidePanelCollapsedActions: TAction<any>[] = [
  {
    id: {
      id: EControlId.ExpandButton,
    },
    type: EActionType.Click,
  },
];
const SidePanelCollapsedProps = compose(initialState)(
  SidePanelCollapsedActions
);
export const SidePanelCollapsed = {
  args: {
    showActions: false,
    ...mapStateToProps(SidePanelCollapsedProps),
    actions: SidePanelCollapsedActions,
  },
};

const ContainsInputActions: TAction<any>[] = [
  {
    id: {
      id: EControlId.QueryInput,
    },
    type: EActionType.Change,
    payload: "This is the input...",
  },
];
const ContainsInputProps = compose(initialState)(ContainsInputActions);
export const ContainsInput = {
  args: {
    showActions: false,
    ...mapStateToProps(ContainsInputProps),
    actions: ContainsInputActions,
  },
};

const ToggleModelActions: TAction<any>[] = [
  {
    id: {
      id: EControlId.Toggle,
    },
    type: EActionType.Click,
  },
];
const ToggleModelProps = compose(initialState)(ToggleModelActions);
export const ToggleModel = {
  args: {
    showActions: false,
    ...ToggleModelProps,
    actions: ToggleModelActions,
  },
};

const ConversationAndMessagesActions: TAction<any>[] = [
  {
    id: {
      id: EControlId.QueryInput,
    },
    type: EActionType.Change,
    payload: "This is the input...",
  },
  {
    id: {
      id: EControlId.Submit,
    },
    type: EActionType.Click,
  },
];
const ConversationAndMessagesProps = compose(initialState)(
  ConversationAndMessagesActions
);
export const ConversationAndMessages = {
  args: {
    showActions: false,
    ...ConversationAndMessagesProps,
    actions: ConversationAndMessagesActions,
  } as TMainProps,
};

const ActiveMessageActions: TAction<any>[] = [
  {
    id: {
      id: EControlId.QueryInput,
    },
    type: EActionType.Change,
    payload: "This is the input...",
  },
  {
    id: {
      id: EControlId.Submit,
    },
    type: EActionType.Click,
  },
  {
    id: {
      id: EControlId.QueryResponse,
    },
    type: EActionType.IO,
    payload: {
      text: "This is the only message I can generate...",
      isDone: false,
    },
  },
];
const ActiveMessageProps = compose(initialState)(ActiveMessageActions);
export const ActiveMessage = {
  args: {
    showActions: false,
    ...ActiveMessageProps,
    actions: ActiveMessageActions,
  } as TMainProps,
};

const FinalActiveMessageActions: TAction<any>[] = [
  {
    id: {
      id: EControlId.QueryInput,
    },
    type: EActionType.Change,
    payload: "This is the input...",
  },
  {
    id: {
      id: EControlId.Submit,
    },
    type: EActionType.Click,
  },
  {
    id: {
      id: EControlId.QueryResponse,
    },
    type: EActionType.IO,
    payload: {
      text: "This is the only message I can generate...",
      isDone: true,
    },
  },
];
const FinalActiveMessageProps = compose(initialState)(
  FinalActiveMessageActions
);
export const FinalActiveMessage = {
  args: {
    showActions: false,
    ...FinalActiveMessageProps,
    actions: FinalActiveMessageActions,
  } as TMainProps,
};
