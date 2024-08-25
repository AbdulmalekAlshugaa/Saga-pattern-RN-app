import { StyleSheet, View } from "react-native";
import React from "react";
import AppBodyText from "../../../components/AppBodyText";

const MainErrorsScreen = () => {
  return (
    <View style={styles.container}>
      <AppBodyText title="Something went wrong. Please try again later." />
    </View>
  );
};

export default MainErrorsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
