import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { IconButton, Colors, FAB } from "react-native-paper";

import Screen from "../components/Screen";
import NoteItem from "../components/NoteItem";

const NoteListScreen = ({ navigation }) => {
  const notes = [{
    id: 1,
    date: "01 Jan 2021",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat ex eu rhoncus malesuada. Mauris ut sollicitudin arcu.. ",
    theme: "ssyxcxy",
    isPrivate: true
  },
  {
    id: 2,
    date: "10 Jan 2021",
    message: "Lorem ipsum dolor sit amet, consec teturconsecte turcons ecteturconsectetur consectetur consectetur consectetur adipiscing elit. Mauris placerat ex eu rhoncus malesuada. Mauris ut sollicitudin arcu.. ",
    theme: "yxcyxc",
    private: true
  },
  {
    id: 3,
    date: "25 Febr 2021",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat ex eu rhoncus malesuada. Mauris ut sollicitudin arcu.. ",
    theme: "b vcfbd",
    private: false
  }, {
    id: 4,
    date: "01 Jan 2021",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat ex eu rhoncus malesuada. Mauris ut sollicitudin arcu.. ",
    theme: "ssyxcxy",
    isPrivate: true
  },
  {
    id: 5,
    date: "10 Jan 2021",
    message: "Lorem ipsum dolor sit amet, consec teturconsecte turcons ecteturconsectetur consectetur consectetur consectetur adipiscing elit. Mauris placerat ex eu rhoncus malesuada. Mauris ut sollicitudin arcu.. ",
    theme: "yxcyxc",
    private: true
  },
  {
    id: 6,
    date: "25 Febr 2021",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat ex eu rhoncus malesuada. Mauris ut sollicitudin arcu.. ",
    theme: "b vcfbd",
    private: false
  }];

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
