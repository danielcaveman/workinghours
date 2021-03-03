import styled from "styled-components";
import logo from "../assets/logo.png";

const MenuContainer = styled.aside`
  grid-area: menu;
  background-color: #252d32;
  padding: 2rem 1rem;
`;

const Logo = styled.div`
  background-image: url(${logo});
  background-size: cover;
  height: 3rem;
  width: 20rem;
  margin: 0 auto;
`;

function Menu() {
  return (
    <MenuContainer>
      <Logo />
    </MenuContainer>
  );
}

export default Menu;
