import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TextInput, Text, useTheme } from "react-native-paper";
import { StyleSheet, View } from "react-native";

import DashboardScreen from "../screens/DashboardScreen";
import DropDown from "react-native-paper-dropdown";
import useAuth from "../auth/useAuth";
import Constants from "expo-constants";
import NoteListScreen from "./../screens/NoteListScreen";
import PriceCheckScreen from "./../screens/PriceCheckScreen";
import NoteAddScreen from "./../screens/NoteAddScreen";
import ProductSearchScreen from "../screens/ProductSearchScreen";

const Circle = () => {
  return <View style={styles.circle} />;
};
const Drawer = createDrawerNavigator();
function CustomDrawerContent({ navigation }) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [store, setStore] = useState();
  const { colors } = useTheme();
  const auth = useAuth();
  const storeList = [
    { label: "Tiszacsécse", value: "101" },
    { label: "Budapest", value: "102" },
    { label: "Szeged", value: "103" },
  ];

  return (
    <View style={styles.container}>
      <Circle />
      <Text style={[styles.title]}>
        Rendel
        <Text style={[styles.title, { color: colors.accent }]}>.</Text>
      </Text>
      <DropDown
        label={"Válasszon raktárt..."}
        value={store}
        setValue={setStore}
        list={storeList}
        visible={showDropDown}
        showDropDown={() => setShowDropDown(true)}
        onDismiss={() => setShowDropDown(false)}
        inputProps={{
          right: <TextInput.Icon name={"menu-down"} />,
        }}
        style={{ zIndex: 111 }}
      />

      <Text
        style={{
          color: "black",
          textAlign: "left",
          fontSize: 20,
          margin: 20,
          fontWeight: "bold",
        }}
        onPress={() => {
          navigation.navigate("Dashboard");
        }}
      >
        Partnerek
      </Text>

      <Text
        style={{
          color: "black",
          textAlign: "left",
          fontSize: 20,
          margin: 20,
          marginTop: 0,
          fontWeight: "bold",
        }}
        onPress={() => auth.logOut()}
      >
        Kilépés
      </Text>
      <View
        style={{
          position: "absolute",
          bottom: 20,
          marginLeft: 20,
          width: "100%",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#AAAAAA",
            fontWeight: "bold",
          }}
        >
          {Constants.nativeBuildVersion}
        </Text>
      </View>
    </View>
  );
}
const AppNavigator = () => (
  <Drawer.Navigator
    initialRouteName="Dashboard"
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen name="Dashboard" component={DashboardScreen} />
    <Drawer.Screen name="NoteList" component={NoteListScreen} />
    <Drawer.Screen name="PriceCheck" component={PriceCheckScreen} />
    <Drawer.Screen name="ProductSearch" component={ProductSearchScreen} />
    <Drawer.Screen name="NoteAdd" component={NoteAddScreen} />
  </Drawer.Navigator>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: "#F79E1B",
    position: "absolute",
    top: -70,
  },
  title: {
    fontSize: 40,
    margin: 20,
    marginTop: 70,
    fontWeight: "bold",
    marginBottom: 50,
  },
  subtitle: {
    fontWeight: "bold",
    marginBottom: 50,
  },
});
export default AppNavigator;
