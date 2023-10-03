import { StyleSheet, FlatList } from "react-native";
import ProductListItem from "./ProductListItem";
import { useGetProducts } from "../hooks/useGetProductQuery";
import MainSafeAreaScreen from "../../main/view/MainSafeAreaScreen";
import {navigateTo}  from '../../navigation/RootNavigation';
import { mainAppRoutes } from "../../navigation/mainScreenRoutes";

export default function ProductListItemScreen() {
  const { data = [], isLoading , isError, error } = useGetProducts();

  return (
    <MainSafeAreaScreen >
      <FlatList
       numColumns={2}
        data={data}
        renderItem={({ item }) => (
          <ProductListItem
           onPress={
            ()=> navigateTo(mainAppRoutes.productDetail, {item: item}) }
           title={item.title} image={item.image} price={item.price} />
        )}
        keyExtractor={(item) => item.id}
      />
    </MainSafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
