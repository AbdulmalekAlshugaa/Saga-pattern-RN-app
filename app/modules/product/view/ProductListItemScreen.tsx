import { useEffect ,useState} from "react";
import { RefreshControl, FlatList } from "react-native";
import ProductListItem from "./ProductListItem";
import { useGetProducts } from "../hooks/useGetProductQuery";
import MainSafeAreaScreen from "../../main/view/MainSafeAreaScreen";
import { productActions } from "../src/productAction";
import { useAppDispatch } from "../../main/src/configureStore";
import MainLoadingScreen from "../../main/view/MainLoadingScreen";
import ProductSearch from "./ProductSearch";
import { useDebounce } from "../hooks/useDebounce";

export default function ProductListItemScreen() {
  const { data, isLoading,  isSuccess, isRefetching, refetch } = useGetProducts();
  const [products, setProducts] = useState<product.productResponse[]>(data as product.productResponse[]);
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

  const applySearch = useDebounce((value: string) => {
    const finalProducts : product.productResponse[] = data as product.productResponse[];
    setProducts(finalProducts.filter((item:product.productResponse) => item.title.toLowerCase().includes(value.toLowerCase())));
  }, 700); // Debounce time in milliseconds

  return (
    <>
      {isLoading ? (
        <MainLoadingScreen />
      ) : isSuccess ? (
        <MainSafeAreaScreen>
          <ProductSearch
            onChangeText={applySearch}
           />
          <FlatList
            numColumns={2}
            data={products}
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}
            renderItem={({ item }) => renderProduct(item)}
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
