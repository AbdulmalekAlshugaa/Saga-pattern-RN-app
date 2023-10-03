import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Rating } from "react-native-ratings";

interface ClarkRattingProps {
  style?: any;
  rating: number;
}

const ClarkRatting = (props: ClarkRattingProps) => {

  return (
    <Rating
      style={styles.container}
      disabled={false}
      iconSet={"Ionicons"}
      ratingCount={5}
      startingValue={props.rating}
      imageSize={18}
      fullStarColor={"red"}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignSelf: "flex-start",
  },
});

export default ClarkRatting;
