export const useTransformData = () => {
  const transformData = (arr) => {
    return arr?.map((data) => {
      const newObj = {
        id: data.id,
        symbol: data.symbol,
        name: data.name,
        image: data.image,
        current_price: data.current_price,
        price_change_percentage_24h: data.price_change_percentage_24h,
        market_cap: data.market_cap,
        total_volume: data.total_volume,
        sparkline_in_7d: data.sparkline_in_7d,
      };

      return newObj;
    });
  };

  return transformData;
};
