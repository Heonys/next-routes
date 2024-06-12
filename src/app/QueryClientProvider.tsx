"use client";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider as TanstackQeuryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {},
  }),
});

const QueryClientProvider = ({ children }: React.PropsWithChildren) => {
  return <TanstackQeuryClientProvider client={queryClient}>{children}</TanstackQeuryClientProvider>;
};

export default QueryClientProvider;
