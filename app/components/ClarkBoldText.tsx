import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import { VariantProp } from "react-native-paper/lib/typescript/components/Typography/types";

interface ClarkBoldTextProps {
  title: string;
  style?: any;
  variant?: VariantProp<string>;
  numberOfLines?: number;

}

const ClarkBoldText = (props: ClarkBoldTextProps) => {
  return <Text numberOfLines={props.numberOfLines}variant={props.variant} style={[styles.text, props.style]}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    color: "black",
  },
});

export default ClarkBoldText;

