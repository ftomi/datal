import React from "react";
import { Button } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";

const Btn = ({ children, onPress, mode = "contained" }) => {
  return (
    <Button style={[styles.loginButton]} mode={mode} onPress={onPress}>
      {children}
    </Button>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    paddingVertical: 10,
    width: "100%",
    borderRadius: 30,
  },
});

export default Btn;
