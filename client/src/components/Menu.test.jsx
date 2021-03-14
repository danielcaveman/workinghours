import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Menu from "./Menu";

describe("<Menu />", () => {
  it("Should render menu component correctly", () => {
    render(
      <MemoryRouter>
        <Menu />
      </MemoryRouter>
    );
  });

  it("Should match snapshot", () => {
    const { container } = render(
      <MemoryRouter>
        <Menu />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
