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
import Barcode from "./app/models/Barcode";
import Partner from "./app/models/Partner";
import Product from "./app/models/Product";
import Stock from "./app/models/Stock";
import Store from "./app/models/Store";
import Storage from "./app/models/Storage";

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
        await Barcode.createTable();
        await Partner.createTable();
        await Product.createTable();
        await Stock.createTable();
        await Store.createTable();
        await Storage.createTable();
        // create dummy user
        const firstUser = await User.findBy({ username_eq: "1111" });
        if (!firstUser) {
          const props = {
            username: "1111",
            password: "1111",
            firstname: "Tomi",
            lastname: "Farkas",
          };
          await User.create(props);
        }

        const firstProduct = await Product.findBy({ code_eq: "TEST00001" });
        if (!firstProduct) {
          let props = {
            code: "TEST00001",
            name: "Kék kis lavór",
            unitOfMeasure: "db",
            packagingUnit: "db",
            vatPercentage: 27,
            vatCode: "C",
            status: true,
            normalNetUnitPrice: 1999,
            normalGrossUnitPrice: 3000,
            onSaleNetUnitPrice: 2500,
            onSaleGrossUnitPrice: 3500,
          };

          await Product.create(props);

          props = {
            code: "TEST00002",
            name: "Sárga bögre",
            unitOfMeasure: "db",
            packagingUnit: "db",
            vatPercentage: 27,
            vatCode: "C",
            status: true,
            normalNetUnitPrice: 2999,
            normalGrossUnitPrice: 4000,
            onSaleNetUnitPrice: 3500,
            onSaleGrossUnitPrice: 4500,
          };

          await Product.create(props);

          props = {
            code: "TEST00003",
            name: "Sárga bögre XL",
            unitOfMeasure: "db",
            packagingUnit: "db",
            vatPercentage: 27,
            vatCode: "C",
            status: true,
            normalNetUnitPrice: 19990,
            normalGrossUnitPrice: 30000,
            onSaleNetUnitPrice: 25000,
            onSaleGrossUnitPrice: 35000,
          };

          await Product.create(props);

          props = {
            code: "TEST00003",
            name: "Sárga bögre XXL",
            unitOfMeasure: "db",
            packagingUnit: "db",
            vatPercentage: 27,
            vatCode: "C",
            status: true,
            normalNetUnitPrice: 199900,
            normalGrossUnitPrice: 300000,
            onSaleNetUnitPrice: 250000,
            onSaleGrossUnitPrice: 350000,
          };

          await Product.create(props);

          const products = await Product.query();
          console.log({ products });
        }

        const firstBarcode = await Barcode.findBy({ code_eq: "1271031596" });
        if (!firstBarcode) {
          let product = await Product.findBy({ code_eq: "TEST00001" });
          let props = {
            code: "1271031596",
            productId: product.id,
            default: true,
          };

          await Barcode.create(props);

          props = {
            code: "1111",
            productId: product.id,
            default: false,
          };

          await Barcode.create(props);

          product = await Product.findBy({ code_eq: "TEST00002" });
          props = {
            code: "2222",
            productId: product.id,
            default: true,
          };

          await Barcode.create(props);

          product = await Product.findBy({ code_eq: "TEST00003" });
          props = {
            code: "3333",
            productId: product.id,
            default: true,
          };

          await Barcode.create(props);

          props = {
            code: "3443",
            productId: product.id,
            default: false,
          };

          await Barcode.create(props);

          props = {
            code: "3553",
            productId: product.id,
            default: false,
          };

          await Barcode.create(props);

          const barcodes = await Barcode.query();
          console.log({ barcodes });
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
