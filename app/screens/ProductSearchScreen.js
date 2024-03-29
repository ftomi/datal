import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { IconButton, Colors, TextInput } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "../store/product";
import { productsSelector } from "../store/product";
import { loaderSelector } from "../store/loader";
import Screen from "../components/Screen";
import ListDetailToggle from "../components/grid/ListDetailToggle";
import SortHeader from "../components/grid/SortHeader";
import ProductListRow from "../components/product-search/ProductListRow";
import LoadingScreen from "../components/LoadingScreen";
const ProductSearchScreen = ({ route, navigation }) => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const [detailedSearch, setDetailedSearch] = useState(true);
    const [ascending, setAscending] = useState(true);
    const [text, setText] = useState("");
    const productsSelected = useSelector(productsSelector());
    const loading = useSelector(loaderSelector());

    useEffect(() => {
        dispatch(loadProducts());
    }, [])

    useEffect(() => {
        if (productsSelected && !loading) {
            setProducts(productsSelected);
        }
    }, [loading])



    if (loading) {
        return <LoadingScreen />
    }


    const cleanup = () => {
        setProducts([]);
        setDetailedSearch(true);
        setAscending(true);
        setText("");
    }


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
            )
                .filter(x => x.name.toUpperCase().includes(text.toUpperCase()))
                .map(product =>
                    <ProductListRow onPress={() => {
                        cleanup();
                        navigation.navigate((route && route.params && route.params.back) ? route.params.back : "PriceCheck", {
                            barcode: product.barcodes.filter(x => x.defaultBarcode)[0].code
                        });
                    }} key={product.id} product={product} detailedSearch={detailedSearch} />)}
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