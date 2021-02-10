import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import SvgUri from "expo-svg-uri";
import * as SplashScreen from "expo-splash-screen";
import LoginScreen from "./app/screens/LoginScreen";
import {
  DefaultTheme,
  Provider as PaperProvider,
  TextInput,
} from "react-native-paper";

// STATE RELATED STUFF
import { Provider as StoreProvider } from "react-redux";
import ParamsContext from "./app/context/params/context";
import paramsStorage from "./app/context/params/storage";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#7B034D",
    accent: "#F79E1B",
    statusOk: "#00CB05",
  },
};

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(
    () => {
      SplashScreen.preventAutoHideAsync();
    },
    [isReady]
  );

  _cacheResourcesAsync = async () => {
    SplashScreen.hideAsync();
    // FOR DEMO PURPOSES
    await timeout(3000);
    const images = [];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });

    await Promise.all(cacheImages);
    setIsReady(true);
  };

  if (!isReady) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#7B034D",
        }}
      >
        <SvgUri
          source={require("./assets/svg/Logo.svg")}
          onLoad={_cacheResourcesAsync}
        />
        <SvgUri
          style={{
            position: "absolute",
            bottom: 90,
          }}
          source={require("./assets/svg/Szint.svg")}
          onLoad={_cacheResourcesAsync}
        />
        <Text
          style={{
            position: "absolute",
            bottom: 40,
            color: "white",
          }}
        >
          1.0.0.1555
        </Text>
      </View>
    );
  }

  return (
    // <StoreProvider store={store}>
    <PaperProvider theme={theme}>
      <ParamsContext.Provider value={{ baseUrl, setBaseUrl }}>
        <LoginScreen />
      </ParamsContext.Provider>
    </PaperProvider>
    // </StoreProvider>
  );
};
const timeout = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
