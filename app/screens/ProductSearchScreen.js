import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from "react-native";
import { IconButton, Colors, FAB, TextInput, Icon } from "react-native-paper";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ArticleDetailsRow from "../components/article-search/ArticleDetailsRow";
import ArticleName from "../components/article-search/ArticleName";
import ArticlePrice from "../components/article-search/ArticlePrice";
import SvgUri from "expo-svg-uri";

import { loadProducts } from "../store/product";
import { productsSelector } from "../store/product";
import { loaderSelector } from "../store/loader";
import Screen from "../components/Screen";
import ListDetailToggle from "../components/grid/ListDetailToggle";
import SortHeader from "../components/grid/SortHeader";
import ProductListRow from "../components/ProductSearch/ProductListRow";
const ProductSearchScreen = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const [detailedSearch, setDetailedSearch] = useState(true);
    const [ascending, setAscending] = useState(true);
    const [text, setText] = useState("");
    const productsSelected = useSelector(productsSelector());
    const loading = useSelector(loaderSelector());

    useEffect(() => {
        dispatch(loadProducts());
        // return () => {
        //     setProducts([]);
        //     setDetailedSearch(true);
        //     setAscending(true);
        //     setText("");
        // }
    }, [])

    useEffect(() => {
        if (productsSelected && !loading) {
            setProducts(productsSelected);
            console.warn({ products });
        }
    }, [loading])



    if (loading) {
        return <Screen style={styles.container}><Text>Loading...</Text></Screen>
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
                        navigation.navigate("PriceCheck", {
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