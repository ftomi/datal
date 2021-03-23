import React, { useState } from "react";
import { StyleSheet, Image, View, ScrollView } from "react-native";
import { Text, IconButton, Colors } from "react-native-paper";
import SvgUri from "expo-svg-uri";
import $t from "../i18n";

import Screen from "../components/Screen";
import FunctionButton from "../components/FunctionButton";
import { useSelector } from "react-redux";
import { activeUserSelector } from "../store/auth";
import {
  Tabs,
  TabScreen,
  useTabIndex,
  useTabNavigation,
} from 'react-native-paper-tabs';
const DashboardScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const user = useSelector(activeUserSelector());

  /*
  useEffect(() => {
    if (user && Object.keys(user).length !== 0) {
      console.warn(user);
      auth.logIn(user);
    }
  }, [user])
*/

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
            top: 70,
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
            {user && <Text
              style={{
                fontSize: 18,

                color: Colors.white,
                fontWeight: "bold",
              }}
            >
              {user.firstname}
            </Text>}
          </Text>
        </View>
        <View
          style={{
            width: "90%",
            position: "absolute",
            borderRadius: 20,
            paddingTop: 10,
            bottom: -30,
            marginHorizontal: 20,
            paddingHorizontal: 10,
            height: 100,
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
          <Tabs
            // defaultIndex={0} // default = 0
            uppercase={false} // true/false | default=true | labels are uppercase
            // showTextLabel={false} // true/false | default=false (KEEP PROVIDING LABEL WE USE IT AS KEY INTERNALLY + SCREEN READERS)
            // iconPosition // leading, top | default=leading
            style={{
              backgroundColor: "white",
              color: "black",
              fontSize: 14,
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowColor: "#fff",
              shadowOpacity: 0,
              elevation: 0
            }} // works the same as AppBar in react-native-paper
            // dark={false} // works the same as AppBar in react-native-paper
            // theme={} // works the same as AppBar in react-native-paper
            // mode="scrollable" // fixed, scrollable | default=fixed
            onChangeIndex={(newIndex) => {
              setSelectedTab(newIndex);
            }}

          // showLeadingSpace={true} //  (default=true) show leading space in scrollable tabs inside the header
          >
            <TabScreen label={$t("dashboard.tab.lastFunction")}>
              <View>{selectedTab === 0 && <Text>...</Text>}</View>
            </TabScreen>
            <TabScreen label={$t("dashboard.tab.actualWarehouse")}>
              <View>{selectedTab === 1 && <Text>...</Text>}</View>
            </TabScreen>
            <TabScreen label={$t("dashboard.tab.error")}>
              <View>{selectedTab === 2 && <Text>...</Text>}</View>
            </TabScreen>
          </Tabs>
        </View>
      </View >
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
            <FunctionButton navigation={navigation} icon={require(`../../assets/svg/price-check.svg`)} title={$t("functions.priceCheck")} route="PriceCheck" ></FunctionButton>
            <FunctionButton navigation={navigation} icon={require(`../../assets/svg/notes.svg`)} title={"Jegyzetek"} route="NoteList" ></FunctionButton>
            <FunctionButton navigation={navigation} icon={require(`../../assets/svg/notes.svg`)} title={$t("functions.notes")} route="NoteList" ></FunctionButton>
          </View>
          <View style={{
            flexDirection: "column"
          }}>
            <FunctionButton navigation={navigation} icon={require(`../../assets/svg/notes.svg`)} title={$t("functions.notes")} route="NoteList" ></FunctionButton>
            <FunctionButton navigation={navigation} icon={require(`../../assets/svg/inventory.svg`)} title={$t("functions.inventory")} route="InventoryList" ></FunctionButton>
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
