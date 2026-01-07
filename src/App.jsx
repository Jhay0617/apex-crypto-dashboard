import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Asset from "./pages/Asset";
import Watchlist from "./pages/Watchlist";
import Market from "./pages/Market";
import Applayout from "./ui/Applayout";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { themeMode } from "./store/themeSlice";
import { darkTheme, lightTheme } from "./styles/Theme";
import { Toaster } from "sonner";
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
  const mode = useSelector(themeMode);
  const activeTheme = mode === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={activeTheme}>
      <Toaster
        position="top-center"
        richColors
        closeButton
        expand={false}
        duration={2000}
      />
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
