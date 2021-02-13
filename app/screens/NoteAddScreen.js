import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { IconButton, Colors, FAB } from "react-native-paper";
import $t from "../i18n";
import * as Yup from "yup";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";

import Screen from "../components/Screen";

const NoteAddScreen = ({ navigation }) => {
  const handleSubmit = async ({ message, password }) => {
  };
  return <Screen styles={{
    backgroundColor: Colors.black
  }}>
    <View style={[styles.header, { flexDirection: "row", marginTop: 26, marginBottom: 20 }]}>
      <IconButton
        color={Colors.black}
        icon="chevron-left"
        size={30}
        onPress={() => navigation.goBack()}
      />
      <Text style={[styles.headerText, { flex: 1, marginLeft: -50 }]}>Jegyzetek</Text>

    </View>
    <View style={{
      borderRadius: 25,
      padding: 15,
      backgroundColor: Colors.white,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <Text style={[styles.headerText, { fontSize: 24 }]}>
          Új jegyzet
        </Text>
        <IconButton
          color={Colors.black}
          icon="lock-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
      </View>
      <Form
        initialValues={{ message: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          name="message"
          placeholder={$t("notes.message")}
          style={[styles.input]}
          numberOfLines={5}
          multiline
        />
        <View style={{ marginTop: 25, marginHorizontal: 15 }}>
          <SubmitButton>
            <Text style={{ textTransform: "capitalize", color: "white" }}>
              {$t("notes.send")}
            </Text>
          </SubmitButton>
        </View>
      </Form>
    </View>

  </Screen >

};


const styles = StyleSheet.create({

  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center"
  },

});

export default NoteAddScreen;
