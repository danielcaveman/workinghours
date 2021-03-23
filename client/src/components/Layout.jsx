import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Main from "../components/Main";
import GlobalStyles from "../styles/global";

const StyledContainer = styled.div`
  display: grid;
  grid-template-areas:
    "menu header header header header header"
    "menu main main main main main";
  grid-template-rows: 7rem auto;
  grid-template-columns: 30rem auto;
  width: 100vw;
  height: 100vh;
`;

function MainPage({ children }) {
  return (
    <>
      <GlobalStyles />
      <StyledContainer>
        <Header />
        <Menu />
        <Main child={children} />
      </StyledContainer>
    </>
  );
}

MainPage.propTypes = {
  children: PropTypes.array,
};

export default MainPage;
