import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
const SupplierListRow = ({ supplier }) => {
    return <TouchableOpacity style={{ marginHorizontal: 25, marginTop: 15 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#243443" }}>{supplier.name}</Text>
            <Text style={{ fontSize: 14, fontWeight: "500", color: "#7B034D" }}>{supplier.code}</Text>
        </View>

    </TouchableOpacity>
}

export default SupplierListRow;