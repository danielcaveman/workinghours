import React from "react";
import { NavLink } from "react-router-dom";
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

const Nav = styled.nav`
  padding: 3rem 0;
  margin: 2rem 1rem;
  border-top: 1px solid #6e6a6a;
`;

const List = styled.ul`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  list-style: none;
  font-size: 1.7rem;
`;

const ListItem = styled.li``;

const Link = styled(NavLink)`
  padding: 1rem 2.5rem;
  color: #fff;
  cursor: pointer;
  display: block;
  border-left: 0.4rem solid #5eabf2;
  text-decoration: none;

  &:hover {
    background-color: #5eabf2;
  }
`;

function Menu() {
  return (
    <MenuContainer>
      <Logo />
      <Nav>
        <List>
          <ListItem>
            <Link to="/">Main Page</Link>
          </ListItem>
        </List>
      </Nav>
    </MenuContainer>
  );
}

export default Menu;
