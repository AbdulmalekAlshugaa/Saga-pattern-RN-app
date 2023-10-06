import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductListItemScreen from '../product/view/ProductListItemScreen';
import ProductLisDetailsScreen from '../product/view/ProductItemDetailsScreen';
import { mainAppRoutes ,mainAppRouteOptions} from './mainScreenRoutes';
import { navigationRef } from './RootNavigation';
const Stack = createNativeStackNavigator();

export default function MainAppNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={mainAppRoutes.productList}>
        <Stack.Screen name={mainAppRoutes.productList} options={mainAppRouteOptions.ProductList} component={ProductListItemScreen} />
        <Stack.Screen name={mainAppRoutes.productDetail} options={mainAppRouteOptions.ProductDetail} component={ProductLisDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
