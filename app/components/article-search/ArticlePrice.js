import React from "react";

import { StyleSheet, Image, View, ScrollView } from "react-native";
import { Text, IconButton, Colors } from "react-native-paper";

const ArticlePrice = ({ title, range, price, subTitle, oldPrice }) => {

    return <View style={{ flexDirection: "column" }}>
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.range}>{range}</Text>
        </View>
        <View style={styles.container}>
            <Text style={[styles.price, { textAlign: "center" }]}>{price}</Text>
        </View>
        {oldPrice && <View style={styles.container}>
            <Text style={[styles.oldPrice, { textAlign: "center" }]}>{`${subTitle}: `}<Text style={[styles.oldPrice, { textDecorationLine: 'line-through' }]}>{oldPrice}</Text></Text>
        </View>}
    </View>
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 20
    },
    title: {
        flex: 1,
        fontSize: 20,
        fontWeight: "bold",
    },
    range: {
        flex: 1,
        fontSize: 15,
        textAlign: "right"
    },
    price: {
        flex: 1,
        color: "#EB001B",
        fontSize: 34,
        fontWeight: "bold"
    },
    oldPrice: {
        flex: 1,
        fontSize: 16
    }
});

export default ArticlePrice;