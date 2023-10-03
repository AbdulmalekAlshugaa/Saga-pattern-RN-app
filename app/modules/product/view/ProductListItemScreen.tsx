import { StatusBar } from "expo-status-bar";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import ProductListItem from "./ProductListItem";
import { useGetProducts } from "../hooks/useGetProductQuery";
import MainSafeAreaScreen from "../../main/view/MainSafeAreaScreen";

export default function ProductListItemScreen() {
  const { data = [], isLoading , isError, error } = useGetProducts();

  return (
    <MainSafeAreaScreen >
      <FlatList
       numColumns={2}
        data={data}
        renderItem={({ item }) => (
          <ProductListItem title={item.title} image={item.image} price={item.price} />
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
