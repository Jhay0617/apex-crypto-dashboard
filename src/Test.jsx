import { useFetchCoins } from "./services/coinGeckoApi";

function Test() {
  const { coins, isLoading, error } = useFetchCoins();

  if (isLoading) return <p>Loading</p>;
  if (error) return <p>error</p>;

  console.log(coins);
  return <div></div>;
}

export default Test;
