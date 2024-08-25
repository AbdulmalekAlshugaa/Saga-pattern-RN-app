import { StyleSheet, ViewStyle } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import { VariantProp } from "react-native-paper/lib/typescript/components/Typography/types";

interface AppBoldTextProps {
  title: string;
  style?: ViewStyle;
  variant?: VariantProp<string>;
  numberOfLines?: number;
}

const AppBoldText = (props: AppBoldTextProps) => {
  return (
    <Text
      numberOfLines={props.numberOfLines}
      variant={props.variant}
      style={[styles.text, props.style]}
    >
      {props.title}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    color: "black",
  },
});

export default AppBoldText;
