import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./Table";

const props = {
  data: [],
  columns: [],
  title: "title 1",
  subTitle: "subTitle 1",
  updateById: jest.fn(),
  deleteById: jest.fn(),
};

describe("<Table />", () => {
  it("Should render table component correctly", () => {
    const { debug } = render(<Table {...props} />);
    // debug();
  });
});
