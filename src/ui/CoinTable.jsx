import { Star } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { isCoinInWatchList, toggleWatchList } from "../store/watchListSlice";
import {
  Cell,
  GridRow,
  PriceChange,
  WatchlistButton,
} from "../styles/HomeStyles";
import { useNavigate } from "react-router-dom";
import { selectCurrentCurrency } from "../store/preferencesSlice";
import { useFormatCurrency } from "../helpers/useFormatCurrency";

function CoinTable({ coin }) {
  const navigate = useNavigate();
  const currency = useSelector(selectCurrentCurrency);
  const formatCurrency = useFormatCurrency();
  const isCoinAlreadyExist = useSelector(isCoinInWatchList(coin.id));
  const dispatch = useDispatch();
  return (
    <GridRow onClick={() => navigate(`/asset/${coin.id}`)}>
      <Cell style={{ textAlign: "center" }}>
        <WatchlistButton
          onClick={(e) => {
            e.stopPropagation();
            dispatch(toggleWatchList(coin));
          }}
          isWatchlisted={isCoinAlreadyExist}
          aria-label={
            isCoinAlreadyExist ? "Remove from watchlist" : "Add to watchlist"
          }
        >
          <Star size={18} fill={isCoinAlreadyExist ? "#38BDF8" : "none"} />
        </WatchlistButton>
      </Cell>

      <Cell style={{ textAlign: "center" }}>{coin.market_cap_rank}</Cell>

      <Cell>
        <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
          <img
            src={coin.image}
            alt=""
            style={{ width: "2.4rem", height: "2.4rem", borderRadius: "50%" }}
            loading="lazy"
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: "600" }}>{coin.name}</span>
            <span style={{ opacity: 0.5, fontSize: "1.1rem" }}>
              {coin.symbol.toUpperCase()}
            </span>
          </div>
        </div>
      </Cell>

      <Cell type="number">{formatCurrency(coin.current_price, currency)}</Cell>

      <Cell type="number" className="mobile-hide">
        <PriceChange isPositive={coin.price_change_percentage_24h > 0}>
          {coin.price_change_percentage_24h > 0 ? "+" : ""}
          {coin.price_change_percentage_24h?.toFixed(2)}%
        </PriceChange>
      </Cell>

      <Cell type="number" className="tablet-hide">
        {formatCurrency(coin.market_cap, currency)}
      </Cell>
    </GridRow>
  );
}

export default CoinTable;
