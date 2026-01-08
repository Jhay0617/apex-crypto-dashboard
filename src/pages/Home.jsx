import { useFetchCoins } from "../services/coinGeckoApi";
import {
  GridHeader,
  HomePageContainer,
  TableWrapper,
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
      <h1
        style={{ fontSize: "2.4rem", fontWeight: "700", marginBottom: "2rem" }}
      >
        Market Overview
      </h1>

      <TableWrapper>
        <GridHeader role="rowgroup">
          <div role="columnheader"></div>
          <div role="columnheader">#</div>
          <div role="columnheader">Name</div>
          <div role="columnheader">Price</div>
          <div role="columnheader" className="mobile-hide">
            24h Change
          </div>
          <div role="columnheader" className="tablet-hide">
            Market Cap
          </div>
        </GridHeader>

        <div role="rowgroup">
          {coins?.map((coin) => (
            <CoinTable coin={coin} key={coin.id} />
          ))}
        </div>
      </TableWrapper>
    </HomePageContainer>
  );
}

export default Home;
