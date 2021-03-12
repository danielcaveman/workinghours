import React from "react";
import { render, screen } from "@testing-library/react";
import TimeInput from "./TimeInput";

describe("<TimeInput />", () => {
  it("Should render the header component correctly", () => {
    render(<TimeInput />);
  });
});
