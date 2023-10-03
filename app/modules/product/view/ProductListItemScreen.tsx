import { StyleSheet, FlatList } from "react-native";
import ProductListItem from "./ProductListItem";
import { useGetProducts } from "../hooks/useGetProductQuery";
import MainSafeAreaScreen from "../../main/view/MainSafeAreaScreen";
import { navigateTo } from "../../navigation/RootNavigation";
import { mainAppRoutes } from "../../navigation/mainScreenRoutes";
import { useEffect } from "react";
import { productActions } from "../src/productAction";
import { useAppDispatch } from "../../main/src/configureStore";

export default function ProductListItemScreen() {
  const { data = [], isLoading, isError, error } = useGetProducts();
  
  const dispatch = useAppDispatch();
  const exist = () =>  dispatch(productActions.exitProduct())
  const enterProductListItem = ()=>  dispatch(productActions.enterProductList())
  const enterProductDetails = (item:product.productResponse)=>  dispatch(productActions.enterProductDetail(item))


  useEffect(() => {   
    enterProductListItem();
    return () => {
        exist();
    };
  }, []);

  return (
    <MainSafeAreaScreen>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({ item }) => (
          <ProductListItem
            onPress={() => enterProductDetails(item)}
            title={item.title}
            image={item.image}
            price={item.price}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </MainSafeAreaScreen>
  );
}
