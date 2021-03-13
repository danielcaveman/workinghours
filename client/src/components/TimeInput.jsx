import React from "react";
import styled from "styled-components";

const Time = styled.input`
  border: 0;
  outline: 0;
  border-bottom: 2px solid;
  border-bottom: 2px solid #5eabf2;

  &::-webkit-calendar-picker-indicator {
    background: none;
    display: none;
  }
`;

function TimeInput({ inputValue, onChange, label }) {
  return (
    <Time
      type="time"
      aria-label={label}
      onChange={onChange}
      value={inputValue}
    />
  );
}

export default TimeInput;
