import { StyleSheet, ViewStyle, TouchableOpacity, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { COLORS } from "../modules/main/src/mainConstants";

interface ClarkButtonProps {
  style?: ViewStyle;
  oPress?: () => void;
  loading?: boolean;
  label: string;
  icon?: string;
}

const ClarkButton = (props: ClarkButtonProps) => {
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

export default ClarkButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.black,
  },
});
