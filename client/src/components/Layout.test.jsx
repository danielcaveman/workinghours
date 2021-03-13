import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Layout from "./Layout";

describe("<Layout />", () => {
  it("Should render layout component correctly", () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();

    const aside = screen.getByRole("complementary");
    expect(aside).toBeInTheDocument();

    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();

    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });
});
