import { useQuery } from "@tanstack/react-query";

const AUTH_TOKEN = "2eda1e37d2038c7050fa7a41af63c1477de4aa56";

export const useFetchNews = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["marketNews"],
    queryFn: async () => {
      const response = await fetch(
        `https://cryptopanic.com/api/developer/v2/posts/?auth_token=${AUTH_TOKEN}&public=true&filter=hot`
      );

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error(
            "Rate limit exceeded on CryptoPanic API. Please try again in a minute."
          );
        }
        throw new Error("Failed to fetch news data.");
      }

      const data = await response.json();

      return data.results.map((post) => ({
        id: post.id,
        title: post.title,
        source: post.domain,
        date: post.published_at,
        url: post.url,
        votes: post.votes,
      }));
    },
    staleTime: 1000 * 60 * 15,
  });

  return { data, isLoading, error };
};
