import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
const InventoryListRow = ({ inventory }) => {
    return <TouchableOpacity style={{ marginVertical: 15, flex: 1 }}>
        {/* <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#243443", marginBottom: 5, paddingLeft: 10 }}>{product.name}</Text>
            <Text style={{ fontSize: 14, fontWeight: "500", color: "#7B034D", marginBottom: 5 }}>{product.foundQuantity} db</Text>
        </View> */}
    </TouchableOpacity >
}

export default InventoryListRow;