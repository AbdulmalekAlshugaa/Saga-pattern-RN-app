import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Card, Text } from "react-native-paper";
import ClarkBoldText from "../../../components/ClarkBoldText";

interface ProductListItemProps {
  title: string;
  image: string;
  price: string;
  onPress?: () => void;
}

export default function ProductListItem(props: ProductListItemProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Card>
        <Card.Cover
          style={styles.image}
          resizeMode={"contain"}
          source={{ uri: props.image }}
        />
        <Card.Content>
          <Text numberOfLines={1} style={styles.text}> {props.title}</Text>
          <ClarkBoldText style={styles.text} title={`$${props.price}`} />
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    elevation: 5,
    flexGrow: 1,
    flex: 1,
  },
  text: {
    marginTop: 10,
  },
  image: {
    backgroundColor: "white",
    marginTop: 10,
  },
});
