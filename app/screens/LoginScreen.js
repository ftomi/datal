import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ToastAndroid,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { TextInput, Title, Text, Button, useTheme } from "react-native-paper";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Camera } from "expo-camera";
import Btn from "../components/Btn";

import Screen from "../components/Screen";
import SvgUri from "expo-svg-uri";

// import useAuth from "../auth/useAuth";
import useParams from "../context/params/useParams";
const Circle = () => {
  return <View style={styles.circle} />;
};

const LoginScreen = (props) => {
  //   const auth = useAuth();
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
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setToggleVisibility(false);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  // useEffect(() => {
  //   if (params.store) setConnection(params.baseUrl);
  // }, []);
  const { colors } = useTheme();
  const handleSubmit = () => {
    //auth.logIn({ email, password });
    // auth.logIn({ email, password });
    ToastAndroid.show(email, ToastAndroid.SHORT);
  };

  if (toggleVisibility) {
    return (
      <Screen style={[styles.container]}>
        <Camera
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ flex: 1, padding: 0, margin: -70 }}
          flashMode={flash}
        />
        <View
          style={{
            position: "absolute",
            top: 20,
            width: "100%",
          }}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text
              style={{
                width: "10%",
                color: "white",
                marginLeft: 20,
                fontSize: 20,
                textAlign: "left",
              }}
              onPress={() => setToggleVisibility(false)}
            >
              &lt;
            </Text>
            <Text
              style={{
                width: "70%",
                color: "white",
                marginLeft: 20,
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Vonalkódolvasó
            </Text>
          </View>

          <Text
            style={{
              width: "100%",
              color: "white",
              marginLeft: 20,
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
            bottom: 30,
          }}
        >
          <Text
            style={{
              width: "100%",
              color: "white",
              fontSize: 16,
              textAlign: "center",
            }}
            onPress={() => {
              if (flash === "torch") {
                setFlash("off");
                console.warn("off");
              } else {
                setFlash("torch");
                console.warn("torch");
              }
            }}
          >
            Vaku be
          </Text>
        </View>
      </Screen>
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
        <Title style={[styles.subtitle]}>Belépés</Title>
        <TextInput
          label="Felhasználónév"
          value={email}
          style={[styles.input]}
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          label="Jelszó"
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
            Adatbázis kapcsolat
          </Text>
        </Button>
        <Btn mode="contained" onPress={() => handleSubmit}>
          <Text style={{ textTransform: "capitalize", color: "white" }}>
            Belépés
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

export default LoginScreen;
