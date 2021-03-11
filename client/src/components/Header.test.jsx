import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("<Header />", () => {
  it("Should render the header component correctly", () => {
    render(<Header />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });
});
