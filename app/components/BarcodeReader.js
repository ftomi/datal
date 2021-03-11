import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import Screen from "./Screen";
import { Text, IconButton, Colors } from "react-native-paper";
import SvgUri from "expo-svg-uri";

const BarcodeReader = ({
  scanned,
  displayText,
  handleBarCodeScanned,
  flash,
  setFlash,
  handleToggleVisibility,
}) => {
  return (
    <Screen style={[styles.container]}>
      <Camera
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ flex: 1, padding: 0, marginTop: -10 }}
        flashMode={flash}
        autoFocus={true}
      />
      <View
        style={{
          position: "absolute",
          top: 20,
          width: "100%",
        }}
      >
        <View style={{ flex: 1, flexDirection: "row" }}>
          <IconButton
            color={Colors.white}
            icon="chevron-left"
            size={30}
            onPress={() => handleToggleVisibility(false)}
          />

          <Text
            style={{
              width: "70%",
              color: "white",
              marginLeft: 20,
              fontSize: 20,
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            Vonalkódolvasó
          </Text>
        </View>

        <Text
          style={{
            width: "100%",
            color: "white",
            paddingHorizontal: 30,
            marginTop: 50,
            fontSize: 16,
            textAlign: "center",
          }}
        >
          Olvassa be a csatlakozáshoz szükséges QR kódot!
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          bottom: 80,
        }}
      >
        <View
          style={{
            width: "100%",
            color: "white",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              if (flash === "torch") {
                setFlash("off");
              } else {
                setFlash("torch");
              }
            }}
          >
            <SvgUri
              style={{ alignSelf: "center" }}
              source={require("../../assets/svg/zap.svg")}
              onLoad={_cacheResourcesAsync}
            />
            <Text
              style={{
                width: "100%",
                color: "white",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Vaku be
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center"
  },
  backgroundImage: {
    position: "absolute",
    zIndex: -1,
    top: 0,
    left: 0,
    right: 0,
    left: 0,
    marginLeft: -20,
    resizeMode: "cover", // or 'stretch'
  },
  loginButton: {
    paddingVertical: 10,
    width: "100%",
    borderRadius: 40,
  },
  input: {
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
  },
  subtitle: {
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 50,
    fontSize: 24,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: "#F79E1B",
    position: "absolute",
    top: -70,
  },
  logo: {
    position: "absolute",
    alignSelf: "center",
    bottom: 20,
  },
});

export default BarcodeReader;
