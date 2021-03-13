import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./Table";

const props = {
  data: [
    {
      day: "2021-03-04T03:00:00.000Z",
      begin: "09:10",
      end: "18:00",
      lunchBegin: "12:00",
      lunchEnd: "13:00",
      total: "0:25",
      id: 1,
    },
    {
      day: "2021-02-02T03:00:00.000Z",
      begin: "08:15",
      end: "18:00",
      lunchBegin: "12:00",
      lunchEnd: "12:47",
      total: "1:03",
      id: 2,
    },
  ],
  columns: [
    {
      title: "Begin",
      field: "begin",
      editComponent: jest.fn(),
    },
    {
      title: "Lunch Begin",
      field: "lunchBegin",
      editComponent: jest.fn(),
    },
    {
      title: "End",
      field: "end",
      editComponent: jest.fn(),
    },
  ],
  title: "title 1",
  subTitle: "subTitle 1",
  updateById: jest.fn(),
  deleteById: jest.fn(),
};

describe("<Table />", () => {
  it("Should render table component correctly", () => {
    render(<Table {...props} />);

    expect(screen.getAllByText("09:10")).toHaveLength(1);
    expect(screen.getAllByText("18:00")).toHaveLength(2);
    const Title = screen.getByRole("heading", { name: /title 1/i });
    expect(Title).toBeInTheDocument();
  });
});
