import styled from "styled-components";
import Table from "../components/Table";

const MainContainer = styled.main`
  grid-area: main;
  background-color: #edf0f5;
  padding: 2rem;
  font-size: 1.4rem;
`;

function Main() {
  return (
    <MainContainer>
      <Table />
    </MainContainer>
  );
}

export default Main;
