import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TimeInput from "./TimeInput";

describe("<TimeInput />", () => {
  it("Should have a value", () => {
    const fn = jest.fn();
    render(<TimeInput onChange={fn} inputValue="13:58" label={"Date"} />);
    const input = screen.getByLabelText("Date");

    expect(input.value).toBe("13:58");
  });

  it("Should call onChange function on each key pressed", () => {
    const fn = jest.fn();
    render(<TimeInput onChange={fn} label={"Date"} />);
    const input = screen.getByLabelText("Date");

    const value = "13:58";
    userEvent.type(input, value);
    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
