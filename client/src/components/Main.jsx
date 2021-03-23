import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledContainer = styled.main`
  grid-area: main;
  background-color: #edf0f5;
  padding: 2rem;
  font-size: 1.4rem;
`;

function Main({ child }) {
  return <StyledContainer>{child}</StyledContainer>;
}

Main.propTypes = {
  child: PropTypes.array,
};

export default Main;
