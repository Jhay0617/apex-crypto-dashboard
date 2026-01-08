import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import BottomNav from "./BottomNav";

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100dvh;
  background-color: ${(props) => props.theme.colors.background};
`;
const Main = styled.main`
  overflow-y: auto;
  padding: 2rem 1.6rem;

  @media (max-width: 768px) {
    padding-bottom: 9rem;
  }

  @media (min-width: 768px) {
    padding: 4rem 4.8rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 100%;
`;

function Applayout() {
  return (
    <StyledLayout>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <BottomNav />
    </StyledLayout>
  );
}

export default Applayout;
