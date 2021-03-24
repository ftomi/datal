import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from "react-native";
import { IconButton, Colors, TextInput, FAB, List, useTheme } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { loadInventories } from "../store/inventory";
import DropDown from "react-native-paper-dropdown";
import { loaderSelector } from "../store/loader";
import Screen from "../components/Screen";
import IconNavButton from "../components/IconNavButton";
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
import CircleWithLetter from "../components/CircleWithLetter";
const InventoryHeaderScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const [itemsCount, setItemsCount] = useState(0);
    const [code, setCode] = useState("");
    const [comment, setComment] = useState("");

    const [inventory, setInventory] = useState("");
    const [showInventoryDropdown, setShowInventoryDropdown] = useState(false);
    const inventoryList = [{
        code: "INV-001-1",
        name: "Belső raktár",
        warehouseId: 1,
        type: "E",
        value: "INV-001-1",
        label: "Belső raktár",
        startDate: "2021.05.11."
    }, {
        code: "INV-001-2",
        name: "Átfogó raktár",
        warehouseId: 1,
        type: "I",
        value: "INV-001-2",
        label: "Átfogó raktár",
        startDate: "2021.09.11."
    }]

    const [storage, setStorage] = useState("");
    const [showStorageDropdown, setShowStorageDropdown] = useState(false);
    const storageList = [{
        code: "RA-123312",
        name: "Csemege pult",
        value: "RA-123312",
        label: "Csemege pult",
    }, {
        code: "RA-122222",
        name: "Hús pult",
        value: "RA-122222",
        label: "Hús pult",
    }, {

        code: "BA-1222221322",
        name: "Barkács osztály",
        value: "BA-1222221322",
        label: "Barkács osztály",
    }, {
        code: "BA-1e322",
        name: "Barkács osztály 2",
        value: "BA-1e322",
        label: "Barkács osztály 2",
    }]

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
        <View style={[styles.header, { flexDirection: "row", paddingTop: 26, paddingBottom: 5, backgroundColor: "#D9E2E9", justifyContent: "space-between" }]}>
            <IconButton
                color={Colors.black}
                icon="chevron-left"
                size={30}
                onPress={() => navigation.goBack()}
            />
            <Text style={{
                fontSize: 20,
                alignSelf: "center"
            }}>Új leltár</Text>
            <TouchableOpacity style={{ alignSelf: "center", justifyContent: "center", marginRight: 20 }} onPress={() => console.log("Pressed")}>
                <View style={{ flexDirection: "row", backgroundColor: "rgba(31, 82, 152, 0.1)", paddingHorizontal: 15, paddingVertical: 5, borderRadius: 25 }}>
                    <SvgUri
                        width="25"
                        height="25"
                        source={require("../../assets/svg/check-circle.svg")}
                    />
                    <Text style={{
                        marginLeft: 10, fontSize: 16
                    }}>Lezár</Text>
                </View>
            </TouchableOpacity>
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
            <View style={[styles.box, { backgroundColor: "white", borderRadius: 25, marginBottom: 20 }]}>
                <List.Accordion
                    title={<View><Text style={{ fontSize: 20, fontWeight: "600" }}>Alapadatok</Text></View>}>
                    <List.Item title={
                        <View >
                            <TextInput
                                placeholder={'Azonosító'}
                                style={{ flex: 1, width: 340, marginBottom: 10 }}
                                value={code}
                                onChangeText={code => setCode(code)}
                            />
                            <View
                                style={{ marginBottom: 10 }}>
                                <DropDown
                                    label={"Leltár"}
                                    value={inventory}
                                    setValue={setInventory}
                                    list={inventoryList}
                                    visible={showInventoryDropdown}
                                    showDropDown={() => setShowInventoryDropdown(true)}
                                    onDismiss={() => setShowInventoryDropdown(false)}
                                    inputProps={{
                                        right: <TextInput.Icon name={"menu-down"} />,
                                    }}
                                />
                            </View>
                            <View
                                style={{ marginBottom: 10 }}>
                                <DropDown
                                    label={"Tárhely"}
                                    value={storage}
                                    setValue={setStorage}
                                    list={storageList}
                                    visible={showStorageDropdown}
                                    showDropDown={() => setShowStorageDropdown(true)}
                                    onDismiss={() => setShowStorageDropdown(false)}
                                    inputProps={{
                                        right: <TextInput.Icon name={"menu-down"} />,
                                    }}
                                />
                            </View>
                            <TextInput
                                placeholder={'Megjegyzés'}
                                style={{ flex: 1, width: 340, marginBottom: 15 }}
                                value={comment}
                                onChangeText={comment => setComment(comment)}
                            />
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={{ alignSelf: "center" }} > {storage}</Text>

                                <View style={{ flexDirection: "row" }}>
                                    {inventoryList.filter(x => x.code === inventory).map(x =>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Text style={{ marginRight: 10 }}>{x.startDate}</Text>
                                            <CircleWithLetter color={x.type && x.type === "I" ? colors.primary : colors.muted}>{x.type}</CircleWithLetter>
                                        </View>
                                    )}
                                </View>
                            </View>
                        </View>
                    } />
                </List.Accordion>
            </View>

            <View style={[{ height: 80, marginBottom: -15, backgroundColor: "#E4D9DE", borderTopLeftRadius: 25, borderTopRightRadius: 25, paddingHorizontal: 20, paddingVertical: 20 }]}>
                <Text style={{ color: colors.primary, fontSize: 16, fontWeight: "bold", alignSelf: "center" }}>Termékek száma: {itemsCount} db</Text>
            </View>
            <View style={[styles.box, { flex: 1, backgroundColor: "white", borderTopLeftRadius: 25, borderTopRightRadius: 25, paddingHorizontal: 20, paddingVertical: 20 }]}>
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

        {/* <View style={{ height: 50, width: "100%", backgroundColor: "#D9E2E9" }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around" }} >
                <IconNavButton title={"Termékkereső"} icon={require(`../../assets/svg/search_main.svg`)} navigation={navigation} route={"ProductSearch"} active />
                <IconNavButton title={"Termékkereső"} icon={require(`../../assets/svg/search_main.svg`)} navigation={navigation} route={"ProductSearch"} active />
            </View>
        </View> */}
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
    box: {
        borderRadius: 15,
        paddingHorizontal: 5,
        paddingVertical: 10,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }

});