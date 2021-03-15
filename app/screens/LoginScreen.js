import React, { useEffect, useState } from "react";
import { StyleSheet, View, ImageBackground, ToastAndroid, Image } from "react-native";
import { TextInput, Title, Text, Button, useTheme } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import Btn from "../components/Btn";
import Circle from "../components/Circle";
import StoreSelector from "../components/StoreSelector";
import { Camera } from "expo-camera";
import { storeSelector } from "../store/store";
import { activeUserSelector } from "../store/auth";
import { setStore } from "../store/store";
import { login } from "../store/auth";
import AuthContext from "../auth/context";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import SvgUri from "expo-svg-uri";

import useAuth from "../auth/useAuth";
import useParams from "../context/params/useParams";
import $t from "../i18n";
import * as Yup from "yup";
import Note from "../models/Note";
import BarcodeReader from "../components/BarcodeReader";

const validationSchema = Yup.object().shape({
  username: Yup.string().required($t("auth.usernameRequired")).min(4).label("Username"),
  password: Yup.string().required($t("auth.usernameRequired")).min(4).label("Password"),
});

import LoadingScreen from "../components/LoadingScreen";

const LoginScreen = (props) => {
  const auth = useAuth();
  const dispatch = useDispatch();
  const store = useSelector(storeSelector());
  const user = useSelector(activeUserSelector());

  const params = useParams();
  // const [connection, setConnection] = React.useState("");
  const [toggleVisibility, setToggleVisibility] = React.useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [flash, setFlash] = useState("off");

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
    // Note.destroyAll();

  }, []);

  useEffect(() => {
    if (user && Object.keys(user).length !== 0) {
      auth.logIn(user);
    }
    else if (!user) {
      ToastAndroid.show("Email vagy jelszó nem helyes...", ToastAndroid.SHORT);
    }
  }, [user])

  const handleBarCodeScanned = ({ type, data }) => {
    dispatch(setStore(`${data}`));
    setScanned(true);
    setToggleVisibility(false);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  const { colors } = useTheme();

  // const handleSubmit = () => {
  //   auth.logIn({ email, password });
  //   ToastAndroid.show(email, ToastAndroid.SHORT);
  // };
  const handleSubmit = async ({ username, password }) => {
    // auth.logIn({ username, password });
    dispatch(login({ username, password }));
  };

  const handleToggleVisibility = (visible) => {
    setToggleVisibility(visible);
  };

  if (toggleVisibility) {
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <BarcodeReader
        displayText={'Olvassa be a csatlakozáshoz szükséges QR kódot!'}
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
      {/* <Image
        source={require("../../assets/bg.png")}
        style={styles.backgroundImage}
      /> */}
      <ImageBackground source={require("../../assets/bg.png")} style={{
        flex: 2,
        zIndex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -20,
        marginHorizontal: -40,
      }}>
        <SvgUri
          source={require("../../assets/svg/Logo.svg")}
          onLoad={_cacheResourcesAsync}
        />
      </ImageBackground>
      <View
        style={{
          flex: 5,
          zIndex: 1,
          backgroundColor: "white",
          marginHorizontal: -40,
          marginTop: -20,
          paddingHorizontal: 40,
          borderRadius: 25,
        }}
      >
        <Title style={[styles.subtitle]}>{$t("auth.signIn")}</Title>

        <Form
          initialValues={{ username: "1111", password: "1111" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            error={$t("auth.invalidUsernameOrPwd")}
            visible={loginFailed}
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            name="username"
            placeholder={$t("auth.userName")}
            style={[styles.input]}
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            name="password"
            placeholder={$t("auth.password")}
            secureTextEntry
            style={[styles.input]}
            textContentType="password"
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
          <SubmitButton >
            <Text style={{ textTransform: "capitalize", color: "white" }}>
              {$t("auth.signIn")}
            </Text>
          </SubmitButton>
        </Form>
      </View>

      {/* <SvgUri
        style={{
          position: "absolute",
          bottom: 30,
          zIndex: 2,
          alignSelf: "center",
        }}
        source={require("../../assets/svg/szlogoGray.svg")}
        onLoad={_cacheResourcesAsync}
      /> */}
      <Image
        style={{
          position: "absolute",
          bottom: 30,
          zIndex: 2,
          alignSelf: "center",
        }}
        source={require("../../assets/szlogo_gray.png")}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white"
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
