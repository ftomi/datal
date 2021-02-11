import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, ToastAndroid } from "react-native";
import { TextInput, Title, Text, Button, useTheme } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import Btn from "../components/Btn";
import Circle from "../components/Circle";
import StoreSelector from "../components/StoreSelector";
import { storeSelector } from "../store/store";
import { setStore } from "../store/store";

import Screen from "../components/Screen";
import SvgUri from "expo-svg-uri";

import useAuth from "../auth/useAuth";
import useParams from "../context/params/useParams";
import $t from "../i18n";

const LoginScreen = (props) => {
  const auth = useAuth();
  const dispatch = useDispatch();
  const store = useSelector(storeSelector());

  const params = useParams();
  const [email, setEmail] = React.useState("");
  // const [connection, setConnection] = React.useState("");
  const [toggleVisibility, setToggleVisibility] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [flash, setFlash] = useState("off");

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    dispatch(setStore(`${data}`));
    setScanned(true);
    setToggleVisibility(false);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  const { colors } = useTheme();

  const handleSubmit = () => {
    auth.logIn({ email, password });
    ToastAndroid.show(email, ToastAndroid.SHORT);
  };

  const handleToggleVisibility = (visible) => {
    setToggleVisibility(visible);
  };

  if (toggleVisibility) {
    return (
      <StoreSelector
        scanned={scanned}
        handleBarCodeScanned={handleBarCodeScanned}
        flash={flash}
        setFlash={setFlash}
        handleToggleVisibility={handleToggleVisibility}
      />
    );
  }

  return (
    <Screen style={styles.container}>
      <Circle />
      <Image
        source={require("../../assets/bg.png")}
        style={styles.backgroundImage}
      />
      <View style={{ marginTop: -90, marginBottom: 90, alignItems: "center" }}>
        <SvgUri
          style={{ textAlign: "center" }}
          source={require("../../assets/svg/Logo.svg")}
          onLoad={_cacheResourcesAsync}
        />
      </View>
      <View
        style={{
          zIndex: 1,
          backgroundColor: "white",
          marginHorizontal: -40,
          paddingHorizontal: 40,
          borderRadius: 25,
        }}
      >
        <Title style={[styles.subtitle]}>{$t("auth.signIn")}</Title>
        <TextInput
          label={$t("auth.userName")}
          value={email}
          style={[styles.input]}
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          label={$t("auth.password")}
          secureTextEntry={true}
          value={password}
          style={[styles.input]}
          onChangeText={(password) => setPassword(password)}
        />
        <Button
          style={styles.loginButton}
          onPress={() => {
            setToggleVisibility(!toggleVisibility);
            setScanned(false);
            if (toggleVisibility) {
              params.saveApiBase(connection);
            }
          }}
        >
          <Text
            style={{
              textDecorationLine: "underline",
              textTransform: "capitalize",
              color: colors.primary,
            }}
          >
            {$t("auth.storeSelector")}
          </Text>
        </Button>
        <Text
          style={{
            color: "#AAAAAA",
            fontSize: 12,
            alignSelf: "center",
            paddingBottom: 20,
          }}
        >
          {store && store}
        </Text>
        <Btn mode="contained" onPress={handleSubmit}>
          <Text style={{ textTransform: "capitalize", color: "white" }}>
            {$t("auth.signIn")}
          </Text>
        </Btn>
      </View>

      <SvgUri
        style={{
          textAlign: "center",
          position: "absolute",
          bottom: 50,
          alignSelf: "center",
        }}
        source={require("../../assets/svg/szlogoGray.svg")}
        onLoad={_cacheResourcesAsync}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
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
  logo: {
    position: "absolute",
    alignSelf: "center",
    bottom: 20,
  },
});

export default LoginScreen;
