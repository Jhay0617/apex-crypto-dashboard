import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CoinTable from "../ui/CoinTable";
import {
  HomePageContainer,
  StyledTable,
  TableWrapper,
  THead,
  TBody,
  TableRow,
} from "../styles/HomeStyles";

const EmptyState = styled.div`
  text-align: center;
  padding: 8rem 2rem;
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 1.2rem;

  & h2 {
    font-size: 2.4rem;
    margin-bottom: 1.6rem;
    color: ${(props) => props.theme.colors.textPrimary};
  }

  & a {
    color: ${(props) => props.theme.colors.accent};
    text-decoration: underline;
    font-size: 1.6rem;
  }
`;

function Watchlist() {
  const watchlistItems = useSelector((state) => state.watchlist.items);

  if (watchlistItems.length === 0) {
    return (
      <HomePageContainer>
        <h1 style={{ fontSize: "2.4rem", fontWeight: "700" }}>My Watchlist</h1>
        <EmptyState>
          <h2>Your watchlist is currently empty.</h2>
          <Link to="/">Go back to Market to add coins</Link>
        </EmptyState>
      </HomePageContainer>
    );
  }

  return (
    <HomePageContainer>
      <h1 style={{ fontSize: "2.4rem", fontWeight: "700" }}>My Watchlist</h1>

      <TableWrapper>
        <StyledTable aria-label="Watchlist Coins">
          <THead>
            <TableRow>
              <th scope="col"></th>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col" className="mobile-hide">
                24h Change
              </th>
              <th scope="col" className="tablet-hide">
                Market Cap
              </th>
            </TableRow>
          </THead>
          <TBody>
            {watchlistItems.map((coin) => (
              <CoinTable key={coin.id} coin={coin} />
            ))}
          </TBody>
        </StyledTable>
      </TableWrapper>
    </HomePageContainer>
  );
}

export default Watchlist;
