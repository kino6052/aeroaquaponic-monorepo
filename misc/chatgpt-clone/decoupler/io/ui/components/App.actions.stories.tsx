import React from "react";
import { mapStateToProps } from "..";
import { initialState } from "../../../bridge";
import { compose } from "../../../reducer";
import { EActionType, EControlId, TAction, TMainProps } from "../../../types";
import { ActionList } from "./ActionList";
import { Main } from "./App";

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
const SidePanelCollapsedState = compose(initialState)(
  SidePanelCollapsedActions
);
export const SidePanelCollapsed = {
  args: {
    showActions: false,
    ...mapStateToProps(SidePanelCollapsedState),
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
const ContainsInputState = compose(initialState)(ContainsInputActions);
export const ContainsInput = {
  args: {
    showActions: false,
    ...mapStateToProps(ContainsInputState),
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
const ToggleModelState = compose(initialState)(ToggleModelActions);
export const ToggleModel = {
  args: {
    showActions: false,
    ...mapStateToProps(ToggleModelState),
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
const ConversationAndMessagesState = compose(initialState)(
  ConversationAndMessagesActions
);
export const ConversationAndMessages = {
  args: {
    showActions: false,
    ...mapStateToProps(ConversationAndMessagesState),
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
const ActiveMessageState = compose(initialState)(ActiveMessageActions);
export const ActiveMessage = {
  args: {
    showActions: false,
    ...mapStateToProps(ActiveMessageState),
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
const FinalActiveMessageState = compose(initialState)(
  FinalActiveMessageActions
);
export const FinalActiveMessage = {
  args: {
    showActions: false,
    ...mapStateToProps(FinalActiveMessageState),
    actions: FinalActiveMessageActions,
  } as TMainProps,
};

const LikeButtonActions: TAction<any>[] = [
  {
    id: {
      id: EControlId.LikeButton,
      uid: FinalActiveMessageState.messages?.at(-1)?.id,
    },
    type: EActionType.Click,
  },
];
const LikeButtonState = compose(FinalActiveMessageState)(LikeButtonActions);
export const LikeButton = {
  args: {
    showActions: false,
    ...mapStateToProps(LikeButtonState),
    actions: LikeButtonActions,
  } as TMainProps,
};

const DislikeButtonActions: TAction<any>[] = [
  {
    id: {
      id: EControlId.DislikeButton,
      uid: FinalActiveMessageState.messages?.at(-1)?.id,
    },
    type: EActionType.Click,
  },
];
const DislikeButtonState = compose(FinalActiveMessageState)(
  DislikeButtonActions
);
export const DislikeButton = {
  args: {
    showActions: false,
    ...mapStateToProps(DislikeButtonState),
    actions: DislikeButtonActions,
  } as TMainProps,
};

const NewChatClickActions: TAction<any>[] = [
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
  {
    id: {
      id: EControlId.NewChat,
    },
    type: EActionType.Click,
  },
];
const NewChatClickState = compose(initialState)(NewChatClickActions);
export const NewChatClick = {
  args: {
    showActions: false,
    ...mapStateToProps(NewChatClickState),
    actions: NewChatClickActions,
  } as TMainProps,
};

const SelectConversationActions: TAction<any>[] = [
  {
    id: {
      id: EControlId.Conversation,
      uid: NewChatClickState.conversations[0].conversations?.[0]?.id,
    },
    type: EActionType.Click,
  },
];
const SelectConversationState = compose(NewChatClickState)(
  SelectConversationActions
);
export const SelectConversation = {
  args: {
    showActions: false,
    ...mapStateToProps(SelectConversationState),
    actions: SelectConversationActions,
  } as TMainProps,
};

const RemoveConversationActions: TAction<any>[] = [
  {
    id: {
      id: EControlId.RemoveConversation,
      uid: NewChatClickState.conversations[0].conversations?.[0]?.id,
    },
    type: EActionType.Click,
  },
];
const RemoveConversationState = compose(SelectConversationState)(
  RemoveConversationActions
);
export const RemoveConversation = {
  args: {
    showActions: false,
    ...mapStateToProps(RemoveConversationState),
    actions: RemoveConversationActions,
  } as TMainProps,
};

const EditConversationActions: TAction<any>[] = [
  {
    id: {
      id: EControlId.EditConversation,
      uid: NewChatClickState.conversations[0].conversations?.[0]?.id,
    },
    type: EActionType.Click,
  },
];
const EditConversationState = compose(SelectConversationState)(
  EditConversationActions
);
export const EditConversation = {
  args: {
    showActions: false,
    ...mapStateToProps(EditConversationState),
    actions: EditConversationActions,
  } as TMainProps,
};

const ConversationEditInputActions: TAction<any>[] = [
  {
    id: {
      id: EControlId.ConversationEditInput,
      uid: NewChatClickState.conversations[0].conversations?.[0]?.id,
    },
    type: EActionType.Change,
    payload: "My cool conversation!",
  },
];
const ConversationEditInputState = compose(EditConversationState)(
  ConversationEditInputActions
);
export const ConversationEditInput = {
  args: {
    showActions: false,
    ...mapStateToProps(ConversationEditInputState),
    actions: ConversationEditInputActions,
  } as TMainProps,
};

const ConversationEditAcceptActions: TAction<any>[] = [
  {
    id: {
      id: EControlId.ConversationEditAccept,
      uid: NewChatClickState.conversations[0].conversations?.[0]?.id,
    },
    type: EActionType.Click,
  },
];
const ConversationEditAcceptState = compose(ConversationEditInputState)(
  ConversationEditAcceptActions
);
export const ConversationEditAccept = {
  args: {
    showActions: false,
    ...mapStateToProps(ConversationEditAcceptState),
    actions: ConversationEditAcceptActions,
  } as TMainProps,
};
