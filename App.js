import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import SvgUri from "expo-svg-uri";
import * as SplashScreen from "expo-splash-screen";
import AppLoading from "expo-app-loading";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthContext from "./app/auth/context";
import {
  DefaultTheme,
  Provider as PaperProvider,
  TextInput,
} from "react-native-paper";

// STATE RELATED STUFF
import { Provider as StoreProvider } from "react-redux";
import store from "./app/store";
import ParamsContext from "./app/context/params/context";
import paramsStorage from "./app/context/params/storage";
import Constants from "expo-constants";
import Note from "./app/models/Note";
import User from "./app/models/User";

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
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(
    () => {
      (async () => {
        await Note.createTable();
        await User.createTable();
        // create dummy user
        const firstUser = await User.findBy({ username_eq: "1111" });
        if (!firstUser) {
          const props = {
            username: "1111",
            password: "1111",
            firstname: "Tomi",
            lastname: "Farkas"
          }
          await User.create(props);
        }
      })();
      SplashScreen.preventAutoHideAsync();
    },
    [isReady]
  );
  const restoreData = async () => {
    // todo: check if tables exists (create them if they not)
    const user = await authStorage.getUser();
    const baseUrl = await paramsStorage.getBaseUrl();
    if (baseUrl) {
      setBaseUrl(baseUrl);
    }
    if (user) setUser(user);
  };
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
      // <AppLoading
      //   startAsync={restoreData}
      //   onFinish={() => setIsReady(true)}
      //   onError={console.warn}
      // />
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
          {Constants.nativeBuildVersion}
        </Text>
      </View>
    );
  }

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <ParamsContext.Provider value={{ baseUrl, setBaseUrl }}>
          <AuthContext.Provider value={{ user, setUser }}>
            <NavigationContainer>
              {user ? <AppNavigator /> : <AuthNavigator />}
              {/* <AppNavigator />*/}
            </NavigationContainer>
          </AuthContext.Provider>
        </ParamsContext.Provider>
      </PaperProvider>
    </StoreProvider>
  );
};
const timeout = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
