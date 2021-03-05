import styled from "styled-components";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Main from "../components/Main";
import GlobalStyles from "../styles/global";

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "menu header header header header header"
    "menu main main main main main";
  grid-template-rows: 7rem auto;
  grid-template-columns: 30rem auto;
  width: 100vw;
  height: 100vh;
`;

function MainPage() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Menu />
        <Main />
      </Container>
    </>
  );
}

export default MainPage;
