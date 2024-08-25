import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Card, Text } from "react-native-paper";
import AppBoldText from "../../../components/AppBoldText";
import AppBodyText from "../../../components/AppBodyText";

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
          <AppBodyText
            style={styles.text}
            numberOfLines={1}
            title={props.title}
          />
          <AppBoldText style={styles.text} title={`$${props.price}`} />
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    margin: 10,
    borderRadius: 10,
    elevation: 5,
    flex: 1,
    flexGrow: 1,
  },
  text: {
    marginTop: 10,
  },
  image: {
    backgroundColor: "white",
    marginTop: 10,
  },
});
