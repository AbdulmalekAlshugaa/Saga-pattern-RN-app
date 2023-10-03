import React from "react";
import { ColorValue, SafeAreaView, StatusBar, StyleSheet, ViewStyle } from "react-native";
import { COLORS } from "../src/mainConstants";

interface MainSafeAreaScreenOwnProps {
  backgroundColor?: ColorValue;
  style?: ViewStyle;
}

const MainSafeAreaScreen: React.FC< React.PropsWithChildren<MainSafeAreaScreenOwnProps>> = (props) => {
  return (
    <>
      <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
      <SafeAreaView
        style={[styles.containerView, props.style]}
      >
        {props.children}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  containerView: {
    backgroundColor: COLORS.white,
  },
});

export default MainSafeAreaScreen;
