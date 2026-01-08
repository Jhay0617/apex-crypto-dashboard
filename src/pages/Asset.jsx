import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { useFetchCoinDetails } from "../helpers/useFetchCoinDetails";
import { selectCurrentCurrency } from "../store/preferencesSlice";
import { AssetLayout, SectionCard, StatRow } from "../styles/AssetStyle";
import { useFormatCurrency } from "../helpers/useFormatCurrency";

function Asset() {
  const { coinId } = useParams();
  const currency = useSelector(selectCurrentCurrency);
  const { data, isLoading, error } = useFetchCoinDetails(coinId);
  const formatCurrency = useFormatCurrency();
  if (isLoading)
    return (
      <div style={{ textAlign: "center", padding: "5rem" }}>
        Loading {coinId} insights...
      </div>
    );
  if (error)
    return (
      <div style={{ textAlign: "center", padding: "5rem" }}>
        Failed to load asset details.
      </div>
    );

  const { details, chart } = data;

  return (
    <AssetLayout>
      <div>
        <header
          style={{
            marginBottom: "2.4rem",
            display: "flex",
            alignItems: "center",
            gap: "1.2rem",
          }}
        >
          <img
            src={details.image.large}
            alt=""
            style={{ width: "4.8rem", height: "4.8rem" }}
          />
          <div>
            <h1 style={{ fontSize: "2.8rem", fontWeight: "800" }}>
              {details.name}
            </h1>
            <p style={{ color: "#94A3B8", fontSize: "1.4rem" }}>
              {details.symbol.toUpperCase()} / {currency.toUpperCase()}
            </p>
          </div>
        </header>

        <SectionCard style={{ height: "450px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chart}>
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#38BDF8" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#38BDF8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#1E293B"
                vertical={false}
              />
              <XAxis dataKey="time" hide />
              <YAxis domain={["auto", "auto"]} hide />
              <Tooltip
                contentStyle={{
                  background: "#1E293B",
                  border: "none",
                  borderRadius: "12px",
                  color: "#F8FAFC",
                }}
              />
              <Area
                type="monotone"
                dataKey="price"
                stroke="#38BDF8"
                strokeWidth={3}
                fill="url(#chartGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </SectionCard>
      </div>

      <aside
        style={{ display: "flex", flexDirection: "column", gap: "2.4rem" }}
      >
        <SectionCard>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "1.6rem" }}>
            Market Intelligence
          </h2>
          <StatRow>
            <span style={{ color: "#94A3B8" }}>Current Price</span>
            <span className="price-font" style={{ fontWeight: "700" }}>
              {formatCurrency(
                details.market_data.current_price[currency],
                currency
              )}
            </span>
          </StatRow>
          <StatRow>
            <span style={{ color: "#94A3B8" }}>24h High</span>
            <span className="price-font">
              {formatCurrency(details.market_data.high_24h[currency], currency)}
            </span>
          </StatRow>
          <StatRow>
            <span style={{ color: "#94A3B8" }}>All-Time High</span>
            <span style={{ color: "#10B981", fontWeight: "600" }}>
              {formatCurrency(details.market_data.ath[currency], currency)}
            </span>
          </StatRow>
        </SectionCard>

        <SectionCard>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "1.2rem" }}>
            About {details.name}
          </h2>
          <p
            style={{ fontSize: "1.4rem", lineHeight: "1.6", color: "#94A3B8" }}
          >
            {details.description.en.split(". ")[0]}.{" "}
            {details.description.en.split(". ")[1]}.
          </p>
        </SectionCard>
      </aside>
    </AssetLayout>
  );
}

export default Asset;
