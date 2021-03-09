import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from "react-native";
import { IconButton, Colors, FAB, TextInput, Icon } from "react-native-paper";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ArticleDetailsRow from "../components/article-search/ArticleDetailsRow";
import ArticleName from "../components/article-search/ArticleName";
import ArticlePrice from "../components/article-search/ArticlePrice";
import SvgUri from "expo-svg-uri";

import { loaderSelector } from "../store/loader";
import Screen from "../components/Screen";
import ListDetailToggle from "../components/ListDetailToggle";
import SortHeader from "../components/SortHeader";
import ProductListRow from "../components/ProductSearch/ProductListRow";
const ProductSearchScreen = ({ navigation }) => {
    const [detailedSearch, setDetailedSearch] = useState(true)
    const [ascending, setAscending] = useState(true)
    const [text, setText] = useState("")

    const products = [{
        id: 1,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 2,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 3,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 4,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 5,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 6,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 7,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 8,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 9,
        name: "Zfficia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 10,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 11,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 12,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 13,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 14,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 15,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 16,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 17,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 18,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 19,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 20,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 21,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 22,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 23,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 24,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 25,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 26,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 27,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 28,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 29,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 30,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 31,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 32,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 33,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 34,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 35,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 36,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 37,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 38,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }, {
        id: 39,
        name: "Officia ullamco quis",
        price: 1999,
        barcode: "1846454989",
        supplierCode: "44654545646"
    }]

    return <Screen styles={{
        flex: 1,
        paddingTop: 20,
    }}>
        <View style={[styles.header, { flexDirection: "row", marginTop: 26, marginBottom: 20 }]}>
            <IconButton
                color={Colors.black}
                icon="chevron-left"
                size={30}
                onPress={() => navigation.goBack()}
            />
            <Text style={[styles.headerText, { flex: 1, marginLeft: -50 }]}>Termék kereső</Text>
        </View>
        <View style={[{ flexDirection: "row", marginVertical: 15, marginHorizontal: 25, justifyContent: "space-between", alignContent: "center" }]}>
            <Text style={{ fontSize: 17, fontWeight: "700" }}>VÁLASSZON TERMÉKET!</Text>
            <ListDetailToggle detailedSearch={detailedSearch} setDetailedSearch={setDetailedSearch} />
        </View>
        <View style={{ flexDirection: "row", marginHorizontal: 25 }}>
            <TextInput
                placeholder={'Terméknév, cikkszám, vonalkód'}
                style={{ width: '100%' }}
                value={text}
                onChangeText={text => setText(text)}
                right={
                    <TextInput.Icon
                        name="magnify" // where <Icon /> is any component from vector-icons or anything else
                        onPress={() => { }}
                    />
                }
            />
        </View>
        <View style={{ flexDirection: "row", marginHorizontal: 25, marginTop: 15 }}>
            <SortHeader ascending={ascending} setAscending={setAscending} col1Text="Termékek" col2Text="Ár" />
        </View>
        <ScrollView>
            {products && products.sort((a, b) =>
                ascending ? ((a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)) : ((b.name > a.name) ? 1 : ((a.name > b.name) ? -1 : 0))
            ).map(product =>
                <ProductListRow onPress={() => navigation.navigate("PriceCheck", {
                    barcode: "1111"
                })} key={product.id} product={product} detailedSearch={detailedSearch} />)}
        </ScrollView>
    </Screen>
}

export default ProductSearchScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: "#D9E2E9",
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
        textAlign: "center"
    },

});