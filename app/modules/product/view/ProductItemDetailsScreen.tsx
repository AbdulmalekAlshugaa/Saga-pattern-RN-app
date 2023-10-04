import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import MainSafeAreaScreen from "../../main/view/MainSafeAreaScreen";
import { COLORS, SIZES, } from "../../main/src/mainConstants";
import ClarkBoldText from "../../../components/ClarkBoldText";
import ClarkIcon from "../../../components/ClarkIcon";
import ClarkBodyText from "../../../components/ClarkBodyText";
import ClarkRatting from "../../../components/ClarkRatting";
import ClarkButton from "../../../components/ClarkButton";
import { useAppDispatch } from "../../main/src/configureStore";
import { productActions } from "../src/productAction";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { increment } from "../src/counterSlice";
import { Badge } from "react-native-paper";
import { useSelector } from "react-redux";
import { productValue } from "../src/productSelectos";

type parameters = {
  ProductLisDetails: {
    product: product.productResponse | {};
  }
}
type Product = {
  product: product.productResponse | {};
};

type ProductLisDetailsNavProps = NativeStackScreenProps<parameters, 'ProductLisDetails'> & {
  route: {
    params: Product;
  };
};

const ProductLisDetailsScreen = (props: NativeStackScreenProps<ProductLisDetailsNavProps>) => {

  const product = props.route.params?.product 
  const dispatch = useAppDispatch();
  const dropOff = () => dispatch(productActions.dropOffProduct());

  const incrementAction = () => dispatch(increment());
  const count = useSelector(productValue);

  const renderProductListItem = () => (
    <MainSafeAreaScreen style={styles.imageBackground}>
      <ImageBackground progressiveRenderingEnabled={true}  resizeMode={"contain"} imageStyle={styles.image} source={{ uri: product.image }}style={styles.imageBackground} >
        <View style={styles.subViewContainer}> 
        <ClarkIcon name={"cards-heart"} color={COLORS.black} size={24} />
        <View>
        {count > 0 && <Badge  style={styles.badge} size={15}  theme={{ colors: { primary: 'green' } }}>{count}</Badge>}
        <ClarkIcon style={styles.icon} name={"cart"} color={COLORS.black} size={24} />
        </View>
        </View>
        <ClarkIcon style={styles.backButton} name={"arrow-left"}color={COLORS.black} size={24} onPress={() => dropOff()}/>
      </ImageBackground>
    </MainSafeAreaScreen>
  );

  const renderProductRatting = () => (
    <View style={styles.productRattingView}>
      <ClarkRatting rating={product.rating.rate} />
      <ClarkBodyText
        style={{
          marginHorizontal: SIZES.S_7,
        }}
        variant={"bodySmall"}
        title={`(${product.rating.count} Reviews)`}
      />
    </View>
  );

  const renderProductDescription = () => (
    <View style={styles.productDescriptionView}>
      <ClarkBoldText variant={"titleMedium"} title={product.title} />
      <ClarkBodyText
        style={styles.body}
        variant={"bodyMedium"}
        title={product.category}
      />
      {renderProductRatting()}
      <ClarkBoldText style={styles.descriptionTitle} title={"Description"} />
      <ClarkBodyText
        style={styles.description}
        variant={"bodyMedium"}
        title={product.description}
      />
    </View>
  );

  const renderButton = () => (
    <View style={styles.buttonView}>
      <View>
        <ClarkBodyText
          style={styles.body}
          variant={"bodySmall"}
          title={"Total Price"}
        />
        <ClarkBoldText title={`$${product.price}`} variant={"titleMedium"} />
      </View>
      <ClarkButton label={"Add to Cart"} icon="cart" oPress={() => incrementAction()} />
    </View>
  );

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {renderProductListItem()}
        {renderProductDescription()}
      </ScrollView>
      {renderButton()}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imageBackground: {
    backgroundColor: COLORS.white,
    height: SIZES.height / 2,
    width: SIZES.width,
  },
  subViewContainer: {
    bottom: 50,
    position: "absolute",
    alignSelf: "flex-end",
    padding: SIZES.S_10,
  },
  image: {
    width: "100%",
    height: "90%",
    justifyContent: "center",
    alignSelf: "center",
  },
  icon: {
    marginVertical: SIZES.S_5,
  },
  productDescriptionView: {
    flex: 1,
    borderTopRightRadius: SIZES.S_8,
    borderTopLeftRadius: SIZES.S_8,
    shadowColor: COLORS.gray,
    backgroundColor: COLORS.white,
    elevation: 5,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    padding: SIZES.S_8,
  },
  descriptionTitle: {
    marginTop: SIZES.S_8,
  },
  description: {
    marginTop: SIZES.S_2,
    color: COLORS.gray,
  },
  body: {
    color: COLORS.gray,
  },
  productRattingView: {
    alignItems: "center",
    flexDirection: "row",
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: SIZES.S_8,
    margin: SIZES.S_10,
    flex: 0.1,
  },
  backButton: {
    marginVertical: SIZES.S_5,
    marginHorizontal: SIZES.S_5,
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 15,
    zIndex: 10,
    
  },
});

export default ProductLisDetailsScreen;
