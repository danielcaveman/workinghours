import React, { useState } from "react";
import styled from "styled-components";
import { DatePicker } from "@material-ui/pickers";
import { Paper } from "@material-ui/core";

const DateContainer = styled(Paper)`
  margin: 1rem 0;
  padding: 2rem;
`;

function DatePanel() {
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <DateContainer>
      <DatePicker
        views={["year", "month"]}
        label="Date"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </DateContainer>
  );
}

export default DatePanel;
