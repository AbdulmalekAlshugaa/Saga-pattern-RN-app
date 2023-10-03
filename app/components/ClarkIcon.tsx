import { TouchableOpacity, View, ViewStyle } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../modules/main/src/mainConstants";

interface ClarkIconProps {
  name: string;
  size: number;
  color: string;
  style?: ViewStyle;
  onPress?: () => void;
}

const ClarkIcon = (props: ClarkIconProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      <Icon name={props.name} size={props.size} color={props.color} />
    </TouchableOpacity>
  );
};

export default ClarkIcon;
