import { useFetchCoins } from "../services/coinGeckoApi";
import {
  HomePageContainer,
  StyledTable,
  TableWrapper,
  THead,
  TBody,
  TableRow,
} from "../styles/HomeStyles";

import CoinTable from "../ui/CoinTable";

function Home() {
  const { coins, isLoading, error } = useFetchCoins();

  if (isLoading)
    return (
      <HomePageContainer>
        <h2>Loading...</h2>
      </HomePageContainer>
    );
  if (error)
    return (
      <HomePageContainer>
        <h2>Error.</h2>
      </HomePageContainer>
    );

  return (
    <HomePageContainer>
      <h1 style={{ fontSize: "2.4rem", fontWeight: "700" }}>Market Overview</h1>

      <TableWrapper>
        <StyledTable aria-label="Cryptocurrency Market Prices">
          <THead>
            <TableRow>
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
            {coins?.map((coin) => (
              <CoinTable coin={coin} key={coin.id} />
            ))}
          </TBody>
        </StyledTable>
      </TableWrapper>
    </HomePageContainer>
  );
}

export default Home;
