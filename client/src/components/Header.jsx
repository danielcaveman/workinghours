import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  grid-area: header;
  background-color: #5eabf2;
`;

function Header() {
  return <HeaderContainer></HeaderContainer>;
}

export default Header;
