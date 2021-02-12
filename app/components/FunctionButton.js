import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import SvgUri from "expo-svg-uri";

const FunctionButton = ({ title, icon, route, navigation, children }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.inner} onPress={() => navigation.navigate(route)}>
                <SvgUri
                    width="50"
                    height="50"
                    style={{ paddingBottom: 10 }}
                    source={icon}
                    onLoad={_cacheResourcesAsync}
                />
                <Text style={styles.title}>{title}</Text>
                <Text>{children}</Text>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    inner: {
        borderRadius: 25,
        height: 186,
        width: 155,
        paddingTop: 30,
        paddingHorizontal: 10,
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
    title: {
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default FunctionButton;
