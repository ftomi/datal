import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import SvgUri from "expo-svg-uri";

const ListDetailToggle = ({ detailedSearch, setDetailedSearch }) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={{ marginRight: 15 }} onPress={() => setDetailedSearch(true)}>
                <SvgUri
                    width="25"
                    height="25"
                    fill={detailedSearch ? "#7b034d" : "#AAAAAA"}
                    style={{ paddingBottom: 10 }}
                    source={require(`../../assets/svg/list.svg`)}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setDetailedSearch(false)}>
                <SvgUri
                    width="25"
                    height="25"
                    fill={!detailedSearch ? "#7b034d" : "#AAAAAA"}
                    style={{ paddingBottom: 10 }}
                    source={require(`../../assets/svg/list-detailed.svg`)}
                />
            </TouchableOpacity>
        </View>
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

export default ListDetailToggle;