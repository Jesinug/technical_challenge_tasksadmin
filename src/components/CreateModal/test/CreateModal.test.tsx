import React from "react";
import { render, screen } from "@testing-library/react";
import { CreateModal } from "../CreateModal";

test("render New Task in OperationalModel", () => {
  // @ts-ignore
  render(<CreateModal closeFunction={false} />);
  const linkElement = screen.getByText(/New Task/i);
  expect(linkElement).toBeInTheDocument();
});
