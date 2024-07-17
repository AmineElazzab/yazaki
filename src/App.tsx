import { BrowserRouter } from "react-router-dom";
import { LayoutStyleContextProvider } from "./context/layout-style-context";
import Routes from "./router/routes";
import { I18nProvider } from "./i18n/I18nProvider";
import I18nContextProvider from "./i18n/i18n-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 20,
      retry: 0,
    },
  },
});
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <LayoutStyleContextProvider>
        <I18nContextProvider>
          <I18nProvider>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </I18nProvider>
        </I18nContextProvider>
      </LayoutStyleContextProvider>
    </QueryClientProvider>
  );
}
