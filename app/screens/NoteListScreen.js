import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { IconButton, Colors, FAB } from "react-native-paper";
import { useSelector } from "react-redux";

import { notesSelector } from "../store/note";
import Screen from "../components/Screen";
import NoteItem from "../components/NoteItem";

const NoteListScreen = ({ navigation }) => {
  const notes = useSelector(notesSelector());

  return <Screen style={styles.container}>
    <View style={styles.header, { flexDirection: "row", justifyContent: "space-between", marginTop: 26, marginBottom: 20 }}>
      <IconButton
        color={Colors.black}
        icon="chevron-left"
        size={30}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.headerText}>Jegyzetek</Text>
      <IconButton
        color={Colors.black}
        icon="lock-outline"
        size={30}
        onPress={() => navigation.goBack()}
      />
    </View>
    <ScrollView>
      {notes.map((note, index) =>
        <View key={note.id} style={{ marginTop: 5, marginBottom: index === notes.length ? 0 : 10 }}><NoteItem date={note.date} message={note.message} theme={note.theme} isPrivate={note.isPrivate} /></View>
      )}
    </ScrollView>
    <FAB
      style={styles.fab}
      icon="plus"
      onPress={() => navigation.navigate("NoteAdd")}
    />
  </Screen>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#D9E2E9"
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center"
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    backgroundColor: "#7B034D",
    color: "white",
    bottom: 0,
  }
});

export default NoteListScreen;
