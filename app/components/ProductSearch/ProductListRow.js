import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
const ProductListRow = ({ detailedSearch, product, onPress }) => {
    return <TouchableOpacity onPress={onPress} style={{ marginHorizontal: 25, marginTop: 15 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#243443" }}>{product.name}</Text>
            <Text style={{ fontSize: 14, fontWeight: "500", color: "#7B034D" }}>{product.price}</Text>
        </View>
        {detailedSearch && <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 14, fontWeight: "400", color: "#58616A" }}>{product.barcode + ' | ' + product.supplierCode}</Text>
        </View>}
    </TouchableOpacity>
}

export default ProductListRow;