import React from "react";
import { StyleSheet, View, Text } from "react-native";

const CircleWithLetter = ({ children, color = "#c4c4c4" }) => {
  return <View style={[styles.circle, { backgroundColor: color }]} >
    <Text style={styles.text}>{children}</Text>
  </View>;
};

const styles = StyleSheet.create({
  circle: {
    flex: 1,
    borderRadius: 25,
    width: 40,
    height: 40,
    justifyContent: "center"

  },
  text: {
    alignSelf: "center",
    color: "white",
    justifyContent: "center"
  }
});

export default CircleWithLetter;
