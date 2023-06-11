import { EModel, EUser } from "../../../enums";
import { TMainProps } from "../../../../types";

export const data: TMainProps = {
  input: "Test!",
  activeMessage: "I am a really smart intelligent robot and I will destroy",
  isOpen: true,
  conversations: [
    {
      id: "1",
      category: "Today",
      conversations: [
        {
          isActive: true,
          id: "1",
          name: "ConversationConversationConversationConversation 001",
        },
        {
          id: "1",
          name: "Conversation 002",
        },
      ],
    },
    {
      id: "1",
      category: "Previous Week",
      conversations: [
        {
          id: "1",
          name: "Conversation 001",
        },
        {
          id: "1",
          name: "Conversation 002",
        },
      ],
    },
    {
      id: "1",
      category: "Previous Week",
      conversations: [
        {
          id: "1",
          name: "Conversation 001",
        },
        {
          id: "1",
          name: "Conversation 002",
        },
      ],
    },
    {
      id: "1",
      category: "Previous Week",
      conversations: [
        {
          id: "1",
          name: "Conversation 001",
        },
        {
          id: "1",
          name: "Conversation 002",
        },
        {
          id: "1",
          name: "Conversation 002",
        },
        {
          id: "1",
          name: "Conversation 002",
        },
        {
          id: "1",
          name: "Conversation 001",
        },
        {
          id: "1",
          name: "Conversation 002",
        },
        {
          id: "1",
          name: "Conversation 002",
        },
        {
          id: "1",
          name: "Conversation 002",
        },
        {
          id: "1",
          name: "Conversation 001",
        },
        {
          id: "1",
          name: "Conversation 002",
        },
        {
          id: "1",
          name: "Conversation 002",
        },
        {
          id: "1",
          name: "Conversation 002",
        },
      ],
    },
  ],
  selectedModel: EModel.GPT4,
  messages: [
    {
      user: EUser.User,
      text: "Test",
    },
    {
      user: EUser.ChatGPT,
      text: `Using Icons via Global Use
      You probably want to use our icons in more than one component in your project, right? Importing icons into each of your project's components can be really tedious and prone to display errors - especially over time.
      
      Instead, you can add them once in your React application and reference them in any component. We recommend importing them via a "library" in the initializing module of your React application. Here's an example...
      
      Let's say you have a React Application, "Coffee Checker", that alerts users when recently brewed coffee has been sitting around too long and freshness is compromised.
      
      We use Coffee Checker's App.js to initialize our app and library. Our app's UI wants to use two individual icons, faCheckSquare and faCoffee. We also add all of the brands in @fortawesome/free-brands-svg-icons to build the showcase of the big companies that fictitiously use "Coffee Checker" over time.`,
    },
  ],
};
