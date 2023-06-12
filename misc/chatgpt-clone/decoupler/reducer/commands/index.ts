import { EControlId } from "../../types";
import { ConversationCommand } from "./ConversationCommand";
import { ConversationEditAcceptCommand } from "./ConversationEditAcceptCommand";
import { ConversationEditCancelCommand } from "./ConversationEditCancelCommand";
import { ConversationEditInputCommand } from "./ConversationEditInpuCommand";
import { DislikeButtonCommand } from "./DislikeButtonCommand";
import { EditConversationCommand } from "./EditConversationCommand";
import { ExpandButtonCommand } from "./ExpandButtonCommand";
import { LikeButtonCommand } from "./LikeButtonCommand";
import { NewChatCommand } from "./NewChatCommand";
import { QueryInputCommand } from "./QueryInputCommand";
import { QueryResponseCommand } from "./QueryResponseCommand";
import { RemoveConversationCommand } from "./RemoveConversationCommand";
import { SubmitCommand } from "./SubmitCommand";
import { ToggleCommand } from "./ToggleCommand";

export const commandMap = new Map();

commandMap.set(EControlId.Conversation, ConversationCommand);
commandMap.set(
  EControlId.ConversationEditAccept,
  ConversationEditAcceptCommand
);
commandMap.set(
  EControlId.ConversationEditCancel,
  ConversationEditCancelCommand
);
commandMap.set(EControlId.ConversationEditInput, ConversationEditInputCommand);
commandMap.set(EControlId.DislikeButton, DislikeButtonCommand);
commandMap.set(EControlId.EditConversation, EditConversationCommand);
commandMap.set(EControlId.ExpandButton, ExpandButtonCommand);
commandMap.set(EControlId.LikeButton, LikeButtonCommand);
commandMap.set(EControlId.NewChat, NewChatCommand);
commandMap.set(EControlId.QueryInput, QueryInputCommand);
commandMap.set(EControlId.QueryResponse, QueryResponseCommand);
commandMap.set(EControlId.RemoveConversation, RemoveConversationCommand);
commandMap.set(EControlId.Submit, SubmitCommand);
commandMap.set(EControlId.Toggle, ToggleCommand);
