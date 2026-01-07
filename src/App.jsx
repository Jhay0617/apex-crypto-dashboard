import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Asset from "./pages/Asset";
import Watchlist from "./pages/Watchlist";
import Market from "./pages/Market";
import Applayout from "./ui/Applayout";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/asset/:coinId",
        element: <Asset />,
      },
      {
        path: "/watchlist",
        element: <Watchlist />,
      },
      {
        path: "/market",
        element: <Market />,
      },
    ],
  },
]);
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
