import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { IconButton, Colors, FAB } from "react-native-paper";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { loadNotes } from "../store/note";
import { notesSelector } from "../store/note";
import { loaderSelector } from "../store/loader";
import Screen from "../components/Screen";
import NoteItem from "../components/NoteItem";

const NoteListScreen = ({ navigation }) => {

  const [noteList, setNoteList] = useState([]);
  const dispatch = useDispatch();
  const notes = useSelector(notesSelector());
  const loading = useSelector(loaderSelector());

  useEffect(() => {
    dispatch(loadNotes());
  }, [])

  useEffect(() => {
    if (notes && !loading) {
      setNoteList(notes);
    }
  }, [loading])


  if (loading) {
    return <Screen style={styles.container}><Text>Loading...</Text></Screen>
  }

  return <Screen style={styles.container}>
    <View style={styles.header, { flexDirection: "row", justifyContent: "space-between", marginTop: 10, marginBottom: 20 }}>
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
      {noteList && noteList.map((note, index) =>
        <View key={note.id} style={{ marginTop: 5, marginBottom: index === note.length ? 0 : 10 }}><NoteItem date={note.date} message={note.message} theme={note.theme} isPrivate={note.isPrivate} /></View>
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
    fontSize: 16,
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
