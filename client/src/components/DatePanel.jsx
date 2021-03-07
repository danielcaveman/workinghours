import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { DatePicker } from "@material-ui/pickers";
import { Paper } from "@material-ui/core";
import { changeDate } from "../actions/DatePanel.actions";

const DateContainer = styled(Paper)`
  margin: 1rem 0;
  padding: 2rem;
`;

function DatePanel() {
  const datePanel = useSelector((state) => state.datePanel);
  const dispatch = useDispatch();
  return (
    <DateContainer>
      <DatePicker
        views={["year", "month"]}
        label="Date"
        value={datePanel.date}
        onChange={(e) => dispatch(changeDate(e._d))}
        minDate={new Date("1990-02-01")}
        maxDate={new Date("2100-02-01")}
      />
    </DateContainer>
  );
}

export default DatePanel;
