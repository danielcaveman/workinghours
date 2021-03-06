import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  margin: 0 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${(props) => (props.color ? props.color : "#333")};

  &:disabled {
    cursor: default;
  }
`;

function Button({ onClick, icon, disabled, color }) {
  return (
    <StyledButton color={color} disabled={disabled} onClick={onClick}>
      <span className="material-icons">{icon}</span>
    </StyledButton>
  );
}

export default Button;
