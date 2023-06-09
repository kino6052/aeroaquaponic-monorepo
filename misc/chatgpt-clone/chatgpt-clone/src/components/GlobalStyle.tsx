import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  color: rgb(217, 217, 227);
  font-family: Söhne, ui-sans-serif, system-ui, -apple-system, "Segoe UI",
    Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, "Helvetica Neue", Arial,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }

  textarea {
    font-family: Söhne, ui-sans-serif, system-ui, -apple-system, "Segoe UI",
      Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, "Helvetica Neue", Arial,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }

  button {
    margin: unset;
    background: unset;
    border: unset;
    cursor: pointer;
  }

  /* This will change the width and the background color of the scrollbar */
  ::-webkit-scrollbar {
    width: 4px; /* Change width of scroll bar */
    background-color: black; /* Change background color */
  }

  /* This will change the color of the scrollbar thumb (the moving part) */
  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2); /* Change thumb color */
    border-radius: 10px; /* Make it round */
  }

  /* This will change the color of the scrollbar track (the stationary part) */
  ::-webkit-scrollbar-track {
    background-color: transparent; /* Change track color */
    border-radius: 8px; /* Make it round */
  }
`;
