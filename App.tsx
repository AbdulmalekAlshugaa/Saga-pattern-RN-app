import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import ProductListItem from './app/modules/product/view/ProductListItem';
import ProductListItemScreen from './app/modules/product/view/ProductListItemScreen';
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
