import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import NoteListScreen from "../screens/NoteListScreen";
import NoteAddScreen from "../screens/NoteAddScreen";

const Stack = createStackNavigator();

const NotesNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="NoteList"
      component={NoteListScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="NoteAdd"
      component={NoteAddScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default NotesNavigator;
