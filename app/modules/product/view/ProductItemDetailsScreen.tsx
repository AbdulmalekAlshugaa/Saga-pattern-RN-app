import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import ProductListItem from "./ProductListItem";
import { useGetProducts } from "../hooks/useGetProductQuery";
import MainSafeAreaScreen from "../../main/view/MainSafeAreaScreen";

export default function ProductLisDetailsScreen() {
  const { data, isLoading, isError, error } = useGetProducts();

  const renderProductListItem = () => (
    <Text>ProductLisDetailsScreen</Text>
  );

  return <MainSafeAreaScreen>{renderProductListItem()}</MainSafeAreaScreen>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
