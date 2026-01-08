import { ExternalLink } from "lucide-react";
import { useFetchNews } from "../helpers/useFetchNews";
import { NewsCard, NewsGrid } from "../ui/NewsStyle";

// pages/Market.jsx
function Market() {
  const { data: news, isLoading, error } = useFetchNews();

  if (isLoading) return <h2>Scanning the markets...</h2>;
  if (error) return <h2>News feed temporarily unavailable.</h2>;

  return (
    <div>
      <div style={{ marginBottom: "3.2rem" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "800" }}>
          Live Market Pulse
        </h1>
        <p style={{ color: "#94A3B8" }}>
          Trending insights aggregated from 100+ sources
        </p>
      </div>

      <NewsGrid>
        {news?.map((item) => (
          <NewsCard
            key={item.id}
            onClick={() => window.open(item.url, "_blank")}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#38BDF8",
              }}
            >
              <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                {item.source}
              </span>
              <ExternalLink size={18} />
            </div>
            <h2 style={{ fontSize: "1.8rem", lineHeight: "1.4" }}>
              {item.title}
            </h2>
            <div
              style={{
                marginTop: "auto",
                display: "flex",
                gap: "1rem",
                fontSize: "1.2rem",
                color: "#94A3B8",
              }}
            >
              <span>{new Date(item.date).toLocaleTimeString()}</span>
              {item.votes && <span>• {item.votes.positive} Likes</span>}
            </div>
          </NewsCard>
        ))}
      </NewsGrid>
    </div>
  );
}

export default Market;
