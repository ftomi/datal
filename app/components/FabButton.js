import React from "react";
import { Button as Btn } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";

const FabButton = ({
  onSubmit,
  content = "",
  mode = "contained",
  icon = null,
}) => {
  return (
    <Btn
      style={[styles.loginButton]}
      mode={mode}
      onPress={() => console.log("Pressed")}
    >
      <Text style={{ fontSize: 20 }}>{content}</Text>
    </Btn>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    paddingVertical: 10,

    borderRadius: 50,
  },
});

export default FabButton;
