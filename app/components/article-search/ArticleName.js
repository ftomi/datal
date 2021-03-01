import React from "react";

import { StyleSheet, Image, View, ScrollView } from "react-native";
import { Text, IconButton, Colors } from "react-native-paper";

const ArticleName = ({ articleName }) => {

    return <View style={styles.container}>
        <Text style={styles.title}>{articleName}</Text>
    </View>
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 20
    },
    title: {
        flex: 1,
        fontSize: 18,
        fontWeight: "bold",
        color: "#7B034D",
        textAlign: "center"
    }
});

export default ArticleName;