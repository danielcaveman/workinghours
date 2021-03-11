import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./Table";

const mock = {
  data: [],
  columns: [],
  title: "title 1",
  subTitle: "subTitle 1",
  updateById: jest.fn(),
  deleteById: jest.fn(),
};

describe("<Table />", () => {
  it("Should render table component", () => {
    render(<Table {...mock} />);
  });
});
