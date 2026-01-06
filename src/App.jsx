import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Test from "./Test";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Test />
    </QueryClientProvider>
  );
}

export default App;
