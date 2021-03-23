import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { IconButton, Colors, TextInput, FAB, List } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { loadInventories } from "../store/inventory";
import { loaderSelector } from "../store/loader";
import Screen from "../components/Screen";
import ListDetailToggle from "../components/grid/ListDetailToggle";
import SortHeader from "../components/grid/SortHeader";
import ProductListRow from "../components/product-search/ProductListRow";
import $t from "../i18n";
import {
    Tabs,
    TabScreen,
    useTabIndex,
    useTabNavigation,
} from 'react-native-paper-tabs';
import LoadingScreen from "../components/LoadingScreen";
import SvgUri from "expo-svg-uri";
const InventoryHeaderScreen = ({ navigation }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [inventories, setInventories] = useState([]);
    const dispatch = useDispatch();
    const [ascending, setAscending] = useState(true);
    const [text, setText] = useState("");
    const loading = useSelector(loaderSelector());

    useEffect(() => {

    }, [])

    useEffect(() => {
        // if (productsSelected && !loading) {
        //     setProducts(productsSelected);
        //     console.warn({ products });
        // }
    }, [loading])



    if (loading) {
        return <LoadingScreen />
    }


    const cleanup = () => {
        setInventories([]);
        setAscending(true);
        setText("");
    }


    return <Screen styles={{
        flex: 1,
        backgroundColor: "#D9E2E9",
    }}>
        <View style={[styles.header, { flexDirection: "row", paddingTop: 26, paddingBottom: 5, backgroundColor: "#D9E2E9" }]}>
            <IconButton
                color={Colors.black}
                icon="chevron-left"
                size={30}
                onPress={() => navigation.goBack()}
            />
            <Text style={{
                fontSize: 20,
                alignSelf: "center",
                marginLeft: 90
            }}>Új leltár</Text>
            {/* <SvgUri
                width="100"
                height="60"
                style={{
                    alignSelf: "center",
                    marginLeft: 80
                }}
                source={require("../../assets/svg/logo-dark.svg")}
                onLoad={_cacheResourcesAsync}
            /> */}
        </View>
        <View style={{ flex: 1, backgroundColor: "#D9E2E9" }}>
            <View style={{ backgroundColor: "white", borderRadius: 25, paddingHorizontal: 10, paddingVertical: 15, marginBottom: 20 }}>
                <List.Accordion
                    title={<View><Text style={{ fontSize: 20, fontWeight: "600" }}>Alapadatok</Text></View>}>
                    <List.Item title="Form here... " />
                </List.Accordion>
            </View>
            <View style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 25, borderTopRightRadius: 25, paddingHorizontal: 25, paddingVertical: 30 }}>
                <Text style={{ fontSize: 20, fontWeight: "600" }}>Leltározott tételek</Text>
            </View>
        </View>
        {/* 
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
        </ScrollView> */}
        <FAB
            style={styles.fab}
            icon="plus"
            onPress={() => console.log('Pressed')}
        />
    </Screen >
}

export default InventoryHeaderScreen;


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
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        color: "white",
        backgroundColor: "#7B034D"
    },

});