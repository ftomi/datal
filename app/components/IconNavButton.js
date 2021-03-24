import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import SvgUri from "expo-svg-uri";

const IconNavButton = ({ title, icon, route, navigation, active = false, routeParam = null, back }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => active && navigation.navigate(route, { ...routeParam })}>
            <SvgUri
                width="25"
                height="25"
                fill={active ? "#7b034d" : "#AAAAAA"}
                style={{ paddingBottom: 10 }}
                source={icon}
            />
            <Text style={[styles.title, { color: active ? "#7b034d" : "#AAAAAA" }]}>{title}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    title: {
        fontSize: 16,
        marginLeft: 10
    }
});

export default IconNavButton;