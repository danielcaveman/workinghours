import React from "react";
import styled from "styled-components";

const StyledContainer = styled.header`
  grid-area: header;
  background-color: #5eabf2;
`;

function Header() {
  return <StyledContainer></StyledContainer>;
}

export default Header;
