import React from "react";
import styled from "styled-components";

const MainContainer = styled.main`
  grid-area: main;
  background-color: #edf0f5;
  padding: 2rem;
  font-size: 1.4rem;
`;

function Main({ children }) {
  return <MainContainer>{children}</MainContainer>;
}

export default Main;
