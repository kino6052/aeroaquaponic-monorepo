import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { initialState } from "../../bridge";

test("renders learn react link", () => {
  render(<App state={initialState} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
