import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { IconButton, Colors, FAB, TextInput, Icon } from "react-native-paper";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as _ from "lodash";
import { loadInventories, addTempItem } from "../store/inventory";

import ArticleDetailsRow from "../components/article-search/ArticleDetailsRow";
import ArticleName from "../components/article-search/ArticleName";
import ArticlePrice from "../components/article-search/ArticlePrice";
import SvgUri from "expo-svg-uri";
import { NavigationActions, StackActions } from 'react-navigation';
import { searchProductByBarcode } from "../store/product";
import { selectedProductSelector } from "../store/product";
import { loaderSelector } from "../store/loader";
import Screen from "../components/Screen";
import IconNavButton from "../components/IconNavButton";
import BarcodeReader from "../components/BarcodeReader";
import LoadingScreen from "../components/LoadingScreen";
import Btn from "../components/Btn";

const ProductAddToInventoryScreen = ({ route, navigation }) => {
    const [product, setProduct] = useState(null);
    const [quickSave, setQuickSave] = useState(false);
    const dispatch = useDispatch();
    const productSelector = useSelector(selectedProductSelector());
    const loading = useSelector(loaderSelector());
    const [text, setText] = useState("");
    const [quantity, setQuantity] = useState(0);
    const { params } = route;
    const [toggleVisibility, setToggleVisibility] = React.useState(false);
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [flash, setFlash] = useState("off");

    // useEffect(() => {
    //     return () => {
    //         setProduct(null);
    //         setText("");
    //     }
    // }, [])

    useEffect(() => {
        if (Object.entries(productSelector).length !== 0 && !loading) {
            setProduct(productSelector);
        }
    }, [loading])

    useEffect(() => {
        if (text) {
            // _.debounce((dispatch, text) => searchProductByBarcode(text)), 1000);
            dispatch(searchProductByBarcode(text));
        }
    }, [text])

    useEffect(() => {
        if (params && params.barcode) {
            setText(params.barcode);
        }
    }, [params])
    /*
        if (loading) {
            return <Screen style={styles.container}><Text>Loading...</Text></Screen>
        }
    */
    const cleanup = () => {
        setProduct(null);
        setText("");
    }

    const handleBarCodeScanned = ({ type, data }) => {
        setText(data);
        setScanned(true);
        setToggleVisibility(false);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };
    const handleToggleVisibility = (visible) => {
        setToggleVisibility(visible);
    };


    if (toggleVisibility) {
        return (
            <BarcodeReader
                scanned={scanned}
                displayText={"Kérem olvassa be a termék vonalkódját!"}
                handleBarCodeScanned={handleBarCodeScanned}
                flash={flash}
                setFlash={setFlash}
                handleToggleVisibility={handleToggleVisibility}
            />
        );
    }

    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "Dashboard" })],
    });

    /*
    if (loading) {
        return <LoadingScreen />
    }
    */
    return <Screen style={styles.container}>
        <View style={styles.header, { flexDirection: "row", justifyContent: "space-between", marginTop: 10, marginBottom: 20 }}>
            <IconButton
                color={Colors.black}
                icon="chevron-left"
                size={30}
                onPress={() => {
                    cleanup();
                    navigation.goBack();
                }}
            />
            <Text style={styles.headerText}>Olvassa le a termék vonalkódját</Text>
            <IconButton
                color={Colors.black}
                icon="camera-outline"
                size={30}
                onPress={() => {
                    setToggleVisibility(!toggleVisibility);
                    setScanned(false);
                    if (toggleVisibility) {
                        params.saveApiBase(connection);
                    }
                }}
            />
        </View>
        <View style={{ flex: 1 }}>
            <View style={[styles.searchBox, product ? styles.searchBoxFull : styles.searchBoxTextBox]}>
                <TextInput
                    placeholder={'Vonalkód'}
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
                {!loading && product && <View>
                    <ArticleName articleName={product.name} />
                    <ArticleDetailsRow title={'Ár'} content={product.normalGrossUnitPrice} />
                    <ArticleDetailsRow title={'Cikkszám'} content={product.code} />
                    <ArticleDetailsRow title={'Áfa'} content={product.vatPercentage} />
                    <ArticleDetailsRow title={'Készlet'} content={`100 ${product.unitOfMeasure}`} />
                    <TextInput
                        placeholder={'Mennyiség'}
                        style={{ width: '100%', marginVertical: 20 }}
                        value={quantity}
                        onChangeText={quantity => setQuantity(quantity)}

                    />
                    <Btn onPress={() => {
                        dispatch(addTempItem({
                            productId: product.id,
                            name: product.name,
                            foundQuantity: quantity
                        }));
                        setQuantity(0);
                    }} style={{ marginTop: 20 }}>Mennyiség hozzáadása</Btn>
                </View>}
            </View>

        </View>
        <View style={{ height: 50, width: "100%" }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around" }} >
                <IconNavButton title={"Termékkereső"} icon={require(`../../assets/svg/search_main.svg`)} navigation={navigation} route={"ProductSearch"} routeParam={{ back: "ProductAddToInventory" }} active />
                {/* <IconNavButton title={"Gyorsrogzítés"} icon={} onPress={() => { console.log(quickSave); setQuickSave(!quickSave); }} active={quickSave} /> */}
                <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => setQuickSave(!quickSave)}>
                    <SvgUri
                        width="25"
                        height="25"
                        fill={quickSave ? "#7b034d" : "#AAAAAA"}
                        style={{ paddingBottom: 10 }}
                        source={require(`../../assets/svg/alert-circle.svg`)}
                    />
                    <Text style={[styles.title, { color: quickSave ? "#7b034d" : "#AAAAAA" }]}>Gyorsrogzítés</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Screen >
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor: "#D9E2E9",
    },
    headerText: {
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: "center"
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        backgroundColor: "#7B034D",
        color: "white",
        bottom: 0,
    },
    searchBox: {
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: "column"
    },
    searchBoxFull: {
        flex: 1
    },
    searchBoxTextBox: {
    },
    title: {
        fontSize: 16,
        marginLeft: 10
    }
});

export default ProductAddToInventoryScreen;
