import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import { SIZES } from "../modules/main/src/mainConstants";

interface ClarkBoldTextProps {
  title: string;
  style?: any;
}

const ClarkBoldText = (props: ClarkBoldTextProps) => {
  return <Text style={[styles.text, props.style]}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: SIZES.S_8,
    fontWeight: "bold",
    color: "black",
  },
});

export default ClarkBoldText;

