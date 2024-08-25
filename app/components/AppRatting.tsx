import { StyleSheet, ViewStyle } from "react-native";
import React from "react";
import { Rating } from "react-native-ratings";

interface AppRattingProps {
  style?: ViewStyle;
  rating: number;
}

const AppRatting = (props: AppRattingProps) => {
  return (
    <Rating
      style={styles.container}
      ratingCount={5}
      startingValue={props.rating}
      imageSize={18}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignSelf: "flex-start",
  },
});

export default AppRatting;
