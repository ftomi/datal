import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { IconButton, Colors, FAB, TextInput, Icon } from "react-native-paper";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

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

const PriceCheckScreen = ({ route, navigation }) => {
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();
    const productSelector = useSelector(selectedProductSelector());
    const loading = useSelector(loaderSelector());
    const [text, setText] = useState("")
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
        if (text)
            dispatch(searchProductByBarcode(text));
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

    return <Screen style={styles.container}>
        <View style={styles.header, { flexDirection: "row", justifyContent: "space-between", marginTop: 10, marginBottom: 20 }}>
            <IconButton
                color={Colors.black}
                icon="chevron-left"
                size={30}
                onPress={() => navigation.goBack()}
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
        <View style={styles.searchBox}>
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
                <ArticlePrice title={'Akciós ár'} subTitle={'régi ár'} range={'2021. 03. 10. - 2021. 12. 12.'} price={product.onSaleGrossUnitPrice} oldPrice={product.normalGrossUnitPrice} />
                <ArticleDetailsRow title={'Cikkszám'} content={product.code} />
                <ArticleDetailsRow title={'Áfa'} content={product.vatPercentage} />
                <ArticleDetailsRow title={'Készlet'} content={`100 ${product.unitOfMeasure}`} />
            </View>}
        </View>
        <View style={{ position: "absolute", bottom: 0, height: 50, width: "100%" }}>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around" }} >
                <IconNavButton title={"Termékkereső"} icon={require(`../../assets/svg/search_main.svg`)} navigation={navigation} route={"ProductSearch"} active />
                <IconNavButton title={"Cikkszállító"} icon={require(`../../assets/svg/truck.svg`)} navigation={navigation} route={"ProductSearch"} />
            </View>
        </View>
    </Screen>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    }
});

export default PriceCheckScreen;
