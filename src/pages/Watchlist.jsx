import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Search } from "lucide-react";
import CoinTable from "../ui/CoinTable";
import {
  HomePageContainer,
  TableWrapper,
  GridHeader,
} from "../styles/HomeStyles";

const EmptyStateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8rem 2rem;
  background: ${(props) => props.theme.colors.surface};
  border-radius: 1.6rem;
  border: 1px dashed ${(props) => props.theme.colors.border};
  text-align: center;

  & h2 {
    font-size: 2.2rem;
    color: ${(props) => props.theme.colors.textPrimary};
    margin-top: 1.6rem;
  }
  & p {
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.textSecondary};
    margin-bottom: 2.4rem;
  }
`;

const ActionButton = styled(Link)`
  padding: 1.2rem 2.4rem;
  background: ${(props) => props.theme.colors.accent};
  color: #0f172a;
  font-weight: 700;
  border-radius: 0.8rem;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.02);
  }
`;

function Watchlist() {
  const watchlistItems = useSelector((state) => state.watchlist.items);

  if (watchlistItems.length === 0) {
    return (
      <HomePageContainer>
        <EmptyStateWrapper>
          <Search size={48} color="#94A3B8" strokeWidth={1} />
          <h2>Your Watchlist is Silent</h2>
          <p>Start tracking assets to see real-time price movements here.</p>
          <ActionButton to="/">Discover Markets</ActionButton>
        </EmptyStateWrapper>
      </HomePageContainer>
    );
  }

  return (
    <HomePageContainer>
      <header style={{ marginBottom: "2rem" }}>
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "800",
            letterSpacing: "-1px",
          }}
        >
          My Portfolio Watch
        </h1>
        <p style={{ color: "#94A3B8", fontSize: "1.4rem" }}>
          {watchlistItems.length} assets tracked
        </p>
      </header>

      <TableWrapper>
        <GridHeader>
          <div></div>
          <div>#</div>
          <div>Name</div>
          <div>Price</div>
          <div className="mobile-hide">24h Change</div>
          <div className="tablet-hide">Market Cap</div>
        </GridHeader>

        {watchlistItems.map((coin) => (
          <CoinTable coin={coin} key={coin.id} />
        ))}
      </TableWrapper>
    </HomePageContainer>
  );
}

export default Watchlist;
