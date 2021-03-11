import React from "react";
import { render, screen } from "@testing-library/react";
import Main from "./Main";

describe("<Main />", () => {
  it("Should render main component", () => {
    render(<Main />);
    const main = screen.getByRole("main");

    expect(main).toBeInTheDocument();
  });

  it("Should render main component's children", () => {
    render(
      <Main>
        <div data-testid="children-component"></div>
      </Main>
    );

    const childrenComponent = screen.getByTestId("children-component");
    expect(childrenComponent).toBeInTheDocument();
  });
});
