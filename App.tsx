import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import ProductListItem from './app/modules/product/view/ProductListItem';

export default function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on ddyour app!</Text>
          <ProductListItem />
          <StatusBar style="auto" />
        </View>
      </PaperProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
