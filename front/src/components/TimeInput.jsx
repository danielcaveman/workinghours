import styled from "styled-components";

const Time = styled.input`
  border: 0;
  outline: 0;
  border-bottom: 2px solid;
  border-bottom: 2px solid #5eabf2;

  &:disabled {
    border-bottom: 2px solid #cccccc;
  }

  &::-webkit-calendar-picker-indicator {
    background: none;
    display: none;
  }
`;

function TimeInput({ value, onChange, name }) {
  return (
    <Time
      type="time"
      onChange={onChange}
      value={value || ""}
      id={name}
      name={name}
    />
  );
}

export default TimeInput;
