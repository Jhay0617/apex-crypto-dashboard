import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { selectCurrentCurrency } from "../store/preferencesSlice";

export const useFetchCoinDetails = (coinId) => {
  const currentCurrency = useSelector(selectCurrentCurrency);
  return useQuery({
    queryKey: ["coinDetails", coinId, currentCurrency],
    queryFn: async () => {
      const [details, chart] = await Promise.all([
        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`).then((res) =>
          res.json()
        ),
        fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currentCurrency}&days=7`
        ).then((res) => res.json()),
      ]);
      return {
        details,
        chart: chart?.prices?.map(([time, price]) => ({ time, price })),
      };
    },
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  });
};
