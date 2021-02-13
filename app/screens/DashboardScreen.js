import React from "react";
import { StyleSheet, Image, View, ScrollView } from "react-native";
import { Text, IconButton, Colors } from "react-native-paper";
import SvgUri from "expo-svg-uri";
import $t from "../i18n";

import Screen from "../components/Screen";
import FunctionButton from "../components/FunctionButton";

const DashboardScreen = ({ navigation }) => {

  //<FunctionButton navigation={navigation} icon={require(`../../assets/svg/notes.svg`)} title={"Jegyzetek"} route="NoteList" ></FunctionButton>
  // const functions = [{
  //   icon: require(`../../assets/svg/notes.svg`),
  //   title: "Jegyzetek",
  //   route: "NoteList"
  // }];
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
          style={{ position: "absolute", top: 10 }}
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
            paddingLeft: 20,
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
            width: "90%",
            position: "absolute",
            borderRadius: 20,
            paddingTop: 10,
            bottom: -20,
            marginHorizontal: 20,
            paddingHorizontal: 20,
            height: 80,
            zIndex: 999,
            backgroundColor: Colors.white,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <Text>tabnotifications</Text>
        </View>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{
          borderRadius: 15,
          marginTop: -25,
          paddingTop: 70,
          backgroundColor: "#D9E2E9"
        }}
      >
        <View style={{
          marginBottom: 70,
          flexDirection: "row",
          justifyContent: "center"
        }}>

          {/* <Btn onPress={() => navigation.navigate("NoteList")}>Notes</Btn> */}
          <View style={{
            flexDirection: "column"
          }}>
            <Text style={{
              paddingLeft: 10,
              fontSize: 18,
              fontWeight: "bold",
              paddingBottom: 10
            }}>Válassz funkciót!</Text>
            <FunctionButton navigation={navigation} icon={require(`../../assets/svg/notes.svg`)} title={"Jegyzetek"} route="NoteList" ></FunctionButton>
            <FunctionButton navigation={navigation} icon={require(`../../assets/svg/notes.svg`)} title={"Jegyzetek"} route="NoteList" ></FunctionButton>
            <FunctionButton navigation={navigation} icon={require(`../../assets/svg/notes.svg`)} title={$t("functions.notes")} route="NoteList" ></FunctionButton>
          </View>
          <View style={{
            flexDirection: "column"
          }}>
            <FunctionButton navigation={navigation} icon={require(`../../assets/svg/notes.svg`)} title={$t("functions.notes")} route="NoteList" ></FunctionButton>
            <FunctionButton navigation={navigation} icon={require(`../../assets/svg/notes.svg`)} title={$t("functions.notes")} route="NoteList" ></FunctionButton>
            <FunctionButton navigation={navigation} icon={require(`../../assets/svg/notes.svg`)} title={$t("functions.notes")} route="NoteList" ></FunctionButton>
            {/* <FunctionButton navigation={navigation} icon={require(`../../assets/svg/notes.svg`)} title={$t("functions.notes")} route="NoteList" ></FunctionButton> */}
          </View>
        </View>
      </ScrollView>
    </Screen >
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 20,

    flex: 1,
  },
  backgroundImage: {
    zIndex: -1,
    height: 200,
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
