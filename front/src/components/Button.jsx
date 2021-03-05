import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  margin: 0 1rem;
  border: none;
  outline: none;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }
`;

function Button({ onClick, icon, disabled }) {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      <span className="material-icons">{icon}</span>
    </StyledButton>
  );
}

export default Button;
