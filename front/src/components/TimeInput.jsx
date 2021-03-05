import styled from "styled-components";

const TimeInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1.5rem;
`;

const Time = styled.input`
  border: 0;
  outline: 0;
  border-bottom: 2px solid;
  border-bottom: 2px solid #5eabf2;
  min-width: 8rem;

  &:disabled {
    border-bottom: 2px solid #cccccc;
  }

  &::-webkit-calendar-picker-indicator {
    background: none;
    display: none;
  }
`;

function TimeInput({ value, onChange, name, label }) {
  return (
    <TimeInputContainer>
      <Label htmlFor={name}>{label}</Label>
      <Time
        type="time"
        onChange={onChange}
        value={value || ""}
        id={name}
        name={name}
      />
    </TimeInputContainer>
  );
}

export default TimeInput;
