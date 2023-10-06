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
import MainErrorsScreen from "../../main/view/MainErrorsScreen";

export default function ProductListItemScreen() {
  const { data, isLoading,  isSuccess, isRefetching, refetch,error} = useGetProducts();
  const [products, setProducts] = useState<product.productResponse[]>([]);
  const dispatch = useAppDispatch();
  const exist = () => dispatch(productActions.exitProduct());
  const enterProductListItem = () => dispatch(productActions.enterProductList());
  const enterProductDetails = (item: product.productResponse) => dispatch(productActions.enterProductDetail(item));

  useEffect(() => {
    enterProductListItem();
    setProducts(data as product.productResponse[]);
    return () => {
      exist();
    };
  }, [isLoading]);
  console.log(error) 

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
      ) : isSuccess && data !== 'error'? (
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
            keyExtractor={(item) => item.id.toString()}
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
      ) : 
      <MainErrorsScreen/>
      }
    </>
  );
}
