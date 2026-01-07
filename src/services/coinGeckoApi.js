import { useQuery } from "@tanstack/react-query";
import { useTransformData } from "../helpers/useTransformData";
import { useSelector } from "react-redux";
import { selectCurrentCurrency } from "../store/preferencesSlice";

const fetchCoins = async (currency = "usd") => {
  try {
    const params = new URLSearchParams({
      vs_currency: currency,
      order: "market_cap_desc",
      per_page: 100,
      page: 1,
      sparkline: true,
      price_change_percentage: "1h,24h,7d",
    });

    const url = `https://api.coingecko.com/api/v3/coins/markets?${params.toString()}`;

    const res = await fetch(url);

    if (!res.ok) throw new Error("failed to fetch data");

    return res.json();
  } catch (err) {
    throw new Error(err.message);
  }
};

export const useFetchCoins = () => {
  const currency = useSelector(selectCurrentCurrency);
  const transformData = useTransformData();
  const { data, isLoading, error } = useQuery({
    queryKey: ["coins", currency],
    queryFn: () => fetchCoins(currency),
    refetchInterval: 10000,
    staleTime: 30000,
    retry: 2,
  });
  const coins = transformData(data);
  return { coins, isLoading, error };
};
