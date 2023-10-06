import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import MainAppNavigation from "./app/modules/navigation/MainAppNavigation";
import store from "./app/modules/main/src/configureStore";

if(__DEV__) {
  import("./ReactotronConfig")
}

const App = ()=> {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <PaperProvider>
          <MainAppNavigation />
        </PaperProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
