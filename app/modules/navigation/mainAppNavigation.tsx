import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductListItemScreen from '../product/view/ProductListItemScreen';
import ProductLisDetailsScreen from '../product/view/ProductItemDetailsScreen';
import { mainAppRoutes } from './mainScreenRoutes';

const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={mainAppRoutes.productList}>
        <Stack.Screen name={mainAppRoutes.productList} options={{ headerShown: false }} component={ProductListItemScreen} />
        <Stack.Screen name={mainAppRoutes.productDetail} options={{ headerShown: false }} component={ProductLisDetailsScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )

}