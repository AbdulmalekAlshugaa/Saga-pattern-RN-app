import { StyleSheet, ViewStyle, TouchableOpacity, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { COLORS } from "../modules/main/src/mainConstants";

interface AppButtonProps {
  style?: ViewStyle;
  oPress?: () => void;
  loading?: boolean;
  label: string;
  icon?: string;
}

const AppButton = (props: AppButtonProps) => {
  return (
    <TouchableOpacity onPress={props.oPress} style={props.style}>
      <Button
        icon={props.icon}
        style={styles.button}
        loading={props.loading}
        mode="contained"
        onPress={props.oPress}
      >
        {props.label}
      </Button>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.black,
  },
});
