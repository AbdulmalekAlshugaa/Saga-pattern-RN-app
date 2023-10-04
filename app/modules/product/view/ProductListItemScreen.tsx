import { useEffect } from "react";
import { RefreshControl, FlatList } from "react-native";
import ProductListItem from "./ProductListItem";
import { useGetProducts } from "../hooks/useGetProductQuery";
import MainSafeAreaScreen from "../../main/view/MainSafeAreaScreen";
import { productActions } from "../src/productAction";
import { useAppDispatch } from "../../main/src/configureStore";
import MainLoadingScreen from "../../main/view/MainLoadingScreen";

export default function ProductListItemScreen() {
  const {
    data = [],
    isLoading,
    isError,
    error,
    isSuccess,
    isRefetching,
    refetch
  } = useGetProducts();


  const dispatch = useAppDispatch();
  const exist = () => dispatch(productActions.exitProduct());
  const enterProductListItem = () => dispatch(productActions.enterProductList());
  const enterProductDetails = (item: product.productResponse) => dispatch(productActions.enterProductDetail(item));

  useEffect(() => {
    enterProductListItem();
    return () => {
      exist();
    };
  }, []);

  const renderProduct = (item: product.productResponse) => (
    <ProductListItem
      onPress={() => enterProductDetails(item)}
      title={item.title}
      image={item.image}
      price={Number(item.price).toFixed(2)}
    />
  );

  return (
    <>
      {isLoading ? (
        <MainLoadingScreen />
      ) : isSuccess ? (
        <MainSafeAreaScreen>
          <FlatList
            numColumns={2}
            data={data}
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}
            renderItem={({ item }) => renderProduct(item)}
            keyExtractor={(item) => item.id}
            refreshControl={
              <RefreshControl
                refreshing={isRefetching}
                onRefresh={() => {
                  refetch()
                }}
              />
            }
          />
        </MainSafeAreaScreen>
      ) : null}
    </>
  );
}
