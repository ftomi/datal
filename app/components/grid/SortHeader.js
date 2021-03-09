import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
// import { Icon } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons';
import SvgUri from "expo-svg-uri";

const SortHeader = ({ setAscending, ascending, col1Text, col2Text }) => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", flex: 1 }}>
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => setAscending(!ascending)}>
                <Text style={[styles.sortColHeader, { marginRight: 5 }]}>{col1Text}</Text>
                <Ionicons name={`chevron-${!ascending ? 'up' : 'down'}-outline`} size={14} color="#243443" />
                {/* <Icon
                    style={{
                        color: "black"
                    }}
                    name={`chevron-${ascending ? 'up' : 'down'}`}
                    type="material-community"
                /> */}
            </TouchableOpacity>
            <Text style={styles.sortColHeader}>{col2Text}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    sortColHeader: {
        fontSize: 14,
        fontWeight: "600",
        color: "#F79E1B"
    }
});

export default SortHeader;