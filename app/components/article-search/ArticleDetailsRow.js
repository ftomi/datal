import React from "react";

import { StyleSheet, Image, View, ScrollView } from "react-native";
import { Text, IconButton, Colors } from "react-native-paper";

const ArticleDetailsRow = ({ title, content }) => {

    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
    </View>
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 20
    },
    title: {
        flex: 1,
        fontSize: 16,
        fontWeight: "bold"
    },
    content: {
        flex: 1,
        fontSize: 16
    }
});

export default ArticleDetailsRow;