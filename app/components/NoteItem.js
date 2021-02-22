import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FunctionButton = ({ date, message, theme, isPrivate }) => {
    // const [day, month, year] = date.split(" ");
    return (
        <View style={styles.container}>
            <View style={{ marginLeft: 30, marginRight: 5, flex: 15 }}>
                {/* <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}>{day}</Text>
                <Text style={styles.message, { textAlign: "center" }}>{month}</Text>
                <Text style={styles.message, { textAlign: "center" }}>{year}</Text> */}

                <Text style={styles.message, { textAlign: "center" }}>{date}</Text>
            </View>
            <View style={{ flex: 1, borderLeftColor: "#7B034D", borderLeftWidth: 1, height: 39, marginHorizontal: 10, marginTop: 5 }}>

            </View>
            <View style={{ marginLeft: 5, marginRight: 30, flex: 90 }}>
                <Text style={styles.message}>{message}</Text>
                <View>
                    <Text style={[styles.message, styles.theme]}># {theme}</Text>
                </View>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderRadius: 15,
        paddingVertical: 20,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    message: {
        fontSize: 16,
    },
    theme: {
        marginTop: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        borderWidth: 1,
        alignSelf: 'flex-start'
    }
});

export default FunctionButton;
