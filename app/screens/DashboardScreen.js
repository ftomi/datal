import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Text, IconButton, Colors } from "react-native-paper";
import SvgUri from "expo-svg-uri";

import Screen from "../components/Screen";
import Btn from "../components/Btn";

const DashboardScreen = ({ navigation }) => {
  return (
    <Screen
      style={[
        styles.container,
        {
          backgroundColor: "#D9E2E9",
        },
      ]}
    >
      <View>
        <IconButton
          color={Colors.white}
          icon="menu"
          size={30}
          style={{ position: "absolute", top: 10, left: -30 }}
          onPress={() => navigation.toggleDrawer()}
        />
        <SvgUri
          width="100"
          height="60"
          style={{
            position: "absolute",
            top: 10,
            alignSelf: "center",
          }}
          source={require("../../assets/svg/Logo.svg")}
          onLoad={_cacheResourcesAsync}
        />
        <Image
          source={require("../../assets/bg.png")}
          style={styles.backgroundImage}
        />
        <View
          style={{
            position: "absolute",
            top: 80,
            zIndex: 999,
            borderEndColor: "red",
          }}
        >
          <Text
            style={{
              fontSize: 18,

              color: Colors.white,
            }}
          >
            Üdvözöljük{" "}
            <Text
              style={{
                fontSize: 18,

                color: Colors.white,
                fontWeight: "bold",
              }}
            >
              Alex
            </Text>
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            position: "absolute",
            borderRadius: 20,
            paddingTop: 10,
            bottom: -20,
            paddingHorizontal: 20,
            height: 80,
            zIndex: 999,
            backgroundColor: Colors.white,
          }}
        >
          <Text>tabnotifications</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          borderRadius: 15,
          marginTop: -25,
          marginHorizontal: -40,
          paddingHorizontal: 40,
          paddingTop: 70,
          backgroundColor: "#D9E2E9",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          <Btn onPress={() => navigation.navigate("NoteList")}>Notes</Btn>
        </Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    flex: 1,
  },
  backgroundImage: {
    zIndex: -1,
    height: 200,
    marginLeft: -50,
    marginTop: -20,
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

export default DashboardScreen;
