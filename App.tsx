import { PaperProvider } from 'react-native-paper';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import AppNavigation from './app/modules/main/navigation/mainAppNavigation';

export default function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
         <AppNavigation/>
      </PaperProvider>
    </QueryClientProvider>
  );
}
