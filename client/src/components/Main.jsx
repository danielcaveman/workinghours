import React from "react";
import styled from "styled-components";

const StyledContainer = styled.main`
  grid-area: main;
  background-color: #edf0f5;
  padding: 2rem;
  font-size: 1.4rem;
`;

function Main({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Main;
