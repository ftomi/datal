import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { useTheme } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

function Screen({ children, style }) {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <StatusBar hidden={true} style="hidden" />
      <View style={{ ...styles.statusBar, backgroundColor: colors.statusOk }} />
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
  statusBar: {
    height: 14,
    zIndex: 999,
    marginTop: -Constants.statusBarHeight,
    marginHorizontal: -20,
  },
});

export default Screen;
