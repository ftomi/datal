import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { IconButton, Colors, FAB, TextInput, Icon } from "react-native-paper";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ArticleDetailsRow from "../components/article-search/ArticleDetailsRow";
import ArticleName from "../components/article-search/ArticleName";
import ArticlePrice from "../components/article-search/ArticlePrice";
import SvgUri from "expo-svg-uri";

import { loaderSelector } from "../store/loader";
import Screen from "../components/Screen";
import IconNavButton from "../components/IconNavButton";

const PriceCheckScreen = ({ route, navigation }) => {

    const loading = useSelector(loaderSelector());
    const [text, setText] = useState("")
    const [article, setArticle] = useState(null);
    const { params } = route;
    /*
        const [article, setArticle] = useState({
            barcode: "1111"
            name: "Alumínium létra 4 fokos",
            range: "2021.01.15-2021.03.14",
            price: 1649,
            oldPrice: 1749,
            articleNumber: "PL638648",
            vat: "27%",
            stock: 323,
            salesUnitType: "db"
        });
    */
    useEffect(() => {
        if (text === "1111") {
            setArticle({
                barcode: "1111",
                name: "Alumínium létra 4 fokos",
                range: "2021.01.15-2021.03.14",
                price: 1649,
                oldPrice: 1749,
                articleNumber: "PL638648",
                vat: "27%",
                stock: 323,
                salesUnitType: "db"
            });
            setText("");
        }
        else if (text === "2222") {
            setArticle(null);
            setText("");
        }
    }, [text])

    useEffect(() => {
        if (params && params.barcode) {
            setText(params.barcode);
        }
    }, [params])


    if (loading) {
        return <Screen style={styles.container}><Text>Loading...</Text></Screen>
    }


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
                onPress={() => navigation.goBack()}
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
            {article && <View>
                <ArticleName articleName={article.name} />
                <ArticlePrice title={'Akciós ár'} subTitle={'régi ár'} range={article.range} price={article.price} oldPrice={article.oldPrice} />
                <ArticleDetailsRow title={'Cikkszám'} content={article.articleNumber} />
                <ArticleDetailsRow title={'Áfa'} content={article.vat} />
                <ArticleDetailsRow title={'Készlet'} content={`${article.stock}: ${article.salesUnitType}`} />
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
