import { Star } from "lucide-react";
import {
  PriceChange,
  TableData,
  TableRow,
  WatchlistButton,
} from "../styles/HomeStyles";
import { useDispatch, useSelector } from "react-redux";
import { isCoinInWatchList, toggleWatchList } from "../store/watchListSlice";

function CoinTable({ coin }) {
  const isCoinAlreadyExist = useSelector(isCoinInWatchList(coin.id));
  const dispatch = useDispatch();
  return (
    <TableRow key={coin.id}>
      <TableData style={{ width: "50px", textAlign: "center" }}>
        <WatchlistButton onClick={() => dispatch(toggleWatchList(coin))}>
          <Star size={18} fill={isCoinAlreadyExist ? "red" : ""} />
        </WatchlistButton>
      </TableData>
      <TableData>{coin.market_cap_rank}</TableData>
      <TableData>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.2rem",
          }}
        >
          <img
            src={coin.image}
            alt=""
            style={{
              width: "2.4rem",
              height: "2.4rem",
              borderRadius: "50%",
            }}
            loading="lazy"
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: "600" }}>{coin.name}</span>
            <span style={{ opacity: 0.5, fontSize: "1.1rem" }}>
              {coin.symbol.toUpperCase()}
            </span>
          </div>
        </div>
      </TableData>

      <TableData className="price-font">
        ${coin.current_price.toLocaleString()}
      </TableData>

      <TableData className="mobile-hide">
        <PriceChange isPositive={coin.price_change_percentage_24h > 0}>
          {coin.price_change_percentage_24h > 0 ? "+" : ""}
          {coin.price_change_percentage_24h?.toFixed(2)}%
        </PriceChange>
      </TableData>

      <TableData className="tablet-hide price-font">
        ${coin.market_cap.toLocaleString()}
      </TableData>
    </TableRow>
  );
}

export default CoinTable;
