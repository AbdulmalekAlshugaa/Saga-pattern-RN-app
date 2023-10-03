import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import AppNavigation from "./app/modules/navigation/mainAppNavigation";
import store from "./app/modules/main/src/configureStore";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <PaperProvider>
          <AppNavigation />
        </PaperProvider>
      </QueryClientProvider>
    </Provider>
  );
}
