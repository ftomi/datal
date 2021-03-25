import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  RefreshControl,
} from "react-native";
import { IconButton, Colors, TextInput, FAB } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import {
  inventoryHeadsSelector,
  loadInventories,
  loadInventoryHeads,
} from "../store/inventory";
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
} from "react-native-paper-tabs";
import LoadingScreen from "../components/LoadingScreen";
import SvgUri from "expo-svg-uri";
import InventoryListRow from "../components/inventory/InventoryListRow";
const InventoryListScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [inventories, setInventories] = useState([]);
  const dispatch = useDispatch();
  const [ascending, setAscending] = useState(true);
  const [text, setText] = useState("");
  const loading = useSelector(loaderSelector());
  const [refreshing, setRefreshing] = useState(false);
  const inventoryHeads = useSelector(inventoryHeadsSelector());

  useEffect(() => {
    dispatch(loadInventories());
  }, []);


  useEffect(() => {
    // if (productsSelected && !loading) {
    //     setProducts(productsSelected);
    //     console.warn({ products });
    // }
    // if (loading)
    //     setRefreshing(true);
    // else
    //     setRefreshing(false);

    dispatch(loadInventoryHeads());
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  const onRefresh = () => {
    dispatch(loadInventoryHeads());
  };

  const cleanup = () => {
    setInventories([]);
    setAscending(true);
    setText("");
  };

  return (
    <Screen
      styles={{
        flex: 1,
        paddingTop: 20,
        backgroundColor: "#D9E2E9",
      }}
    >
      <View
        style={[
          styles.header,
          {
            flexDirection: "row",
            paddingTop: 26,
            paddingBottom: 5,
            backgroundColor: "#D9E2E9",
          },
        ]}
      >
        <IconButton
          color={Colors.black}
          icon="chevron-left"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <SvgUri
          width="100"
          height="60"
          style={{
            alignSelf: "center",
            marginLeft: 80,
          }}
          source={require("../../assets/svg/logo-dark.svg")}
          onLoad={_cacheResourcesAsync}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: "#D9E2E9", borderRadius: 25 }}>
        <Tabs
          // defaultIndex={0} // default = 0
          uppercase={false} // true/false | default=true | labels are uppercase
          // showTextLabel={false} // true/false | default=false (KEEP PROVIDING LABEL WE USE IT AS KEY INTERNALLY + SCREEN READERS)
          // iconPosition // leading, top | default=leading
          style={{
            backgroundColor: "#D9E2E9",
            color: "black",
            fontSize: 14,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowColor: "#fff",
            shadowOpacity: 0,
            elevation: 0,
            paddingHorizontal: 8,
          }} // works the same as AppBar in react-native-paper
          // dark={false} // works the same as AppBar in react-native-paper
          // theme={} // works the same as AppBar in react-native-paper
          // mode="scrollable" // fixed, scrollable | default=fixed
          onChangeIndex={(newIndex) => {
            setSelectedTab(newIndex);
          }}

        // showLeadingSpace={true} //  (default=true) show leading space in scrollable tabs inside the header
        >
          <TabScreen label={$t("inventory.tab.open")}>
            <View
              style={{
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                backgroundColor: "#fff",
                flex: 1,
                paddingTop: 20,
              }}
            >
              {selectedTab === 0 && (
                <View style={{
                  flex: 1
                }}>
                  <View
                    style={[
                      {
                        flexDirection: "row",
                        alignContent: "center",
                        paddingLeft: 25,
                        marginBottom: 10,
                      },
                    ]}
                  >
                    <Text style={{ fontSize: 17, fontWeight: "700" }}>
                      Leltárak
                    </Text>
                    <Text style={{ marginLeft: 5, alignSelf: "center" }}>
                      - {$t("inventory.tab.open")}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", marginHorizontal: 25 }}>
                    <TextInput
                      placeholder={"Leltár kód, név, biz. szám, dátum"}
                      style={{ width: "100%" }}
                      value={text}
                      onChangeText={(text) => setText(text)}
                      right={
                        <TextInput.Icon
                          name="magnify" // where <Icon /> is any component from vector-icons or anything else
                          onPress={() => { }}
                        />
                      }
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginHorizontal: 25,
                      marginTop: 15,
                    }}
                  >
                    <SortHeader
                      ascending={ascending}
                      setAscending={setAscending}
                      col1Text="Leltárak"
                      col2Text="Dátum"
                    />
                  </View>
                  <ScrollView
                    style={{
                      flex: 1,
                      width: "100%",
                      height: "100%",
                      paddingHorizontal: 25,
                      marginTop: 10,
                    }}
                    refreshControl={
                      <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                      />
                    }
                  >
                    {inventoryHeads &&
                      inventoryHeads.sort((a, b) =>
                        ascending ? ((a.inventory.code > b.inventory.code) ? 1 : ((b.inventory.code > a.inventory.code) ? -1 : 0)) : ((b.inventory.code > a.inventory.code) ? 1 : ((a.inventory.code > b.inventory.code) ? -1 : 0))
                      )
                        .filter(
                          (x) => x.inventoryId !== "" && x.closed === false
                        )
                        .map((x) => <InventoryListRow row={x} />)}
                  </ScrollView>
                </View>
              )}
            </View>
          </TabScreen>
          <TabScreen label={$t("inventory.tab.closed")}>
            <View
              style={{
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                backgroundColor: "#fff",
                flex: 1,
                paddingTop: 20,
              }}
            >
              {selectedTab === 1 && (
                <View style={{
                  flex: 1
                }}>
                  <View
                    style={[
                      {
                        flexDirection: "row",
                        alignContent: "center",
                        paddingLeft: 25,
                        marginBottom: 10,
                      },
                    ]}
                  >
                    <Text style={{ fontSize: 17, fontWeight: "700" }}>
                      Leltárak
                    </Text>
                    <Text style={{ marginLeft: 5, alignSelf: "center" }}>
                      - {$t("inventory.tab.closed")}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", marginHorizontal: 25 }}>
                    <TextInput
                      placeholder={"Leltár kód, név, biz. szám, dátum"}
                      style={{ width: "100%" }}
                      value={text}
                      onChangeText={(text) => setText(text)}
                      right={
                        <TextInput.Icon
                          name="magnify" // where <Icon /> is any component from vector-icons or anything else
                          onPress={() => { }}
                        />
                      }
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginHorizontal: 25,
                      marginTop: 15,
                    }}
                  >
                    <SortHeader
                      ascending={ascending}
                      setAscending={setAscending}
                      col1Text="Leltárak"
                      col2Text="Dátum"
                    />
                  </View>

                  <ScrollView
                    style={{
                      flex: 1,
                      width: "100%",
                      height: "100%",
                      paddingHorizontal: 25,
                      marginTop: 10,
                    }}
                    refreshControl={
                      <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                      />
                    }
                  >
                    {inventoryHeads &&
                      inventoryHeads.sort((a, b) =>
                        ascending ? ((a.inventory.code > b.inventory.code) ? 1 : ((b.inventory.code > a.inventory.code) ? -1 : 0)) : ((b.inventory.code > a.inventory.code) ? 1 : ((a.inventory.code > b.inventory.code) ? -1 : 0))
                      )
                        .filter(
                          (x) => x.inventoryId !== "" && x.closed === true && x.inventory.code.toUpperCase().includes(text.toUpperCase())
                        )
                        .map((x) => <InventoryListRow row={x} />)}
                  </ScrollView>
                </View>
              )}
            </View>
          </TabScreen>
          <TabScreen label={$t("inventory.tab.all")}>
            <View
              style={{
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                backgroundColor: "#fff",
                flex: 1,
                paddingTop: 20,
              }}
            >
              {selectedTab === 2 && (
                <View style={{
                  flex: 1
                }}>
                  <View
                    style={[
                      {
                        flexDirection: "row",
                        alignContent: "center",
                        paddingLeft: 25,
                        marginBottom: 10,
                      },
                    ]}
                  >
                    <Text style={{ fontSize: 17, fontWeight: "700" }}>
                      Leltárak
                    </Text>
                    <Text style={{ marginLeft: 5, alignSelf: "center" }}>
                      - {$t("inventory.tab.all")}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", marginHorizontal: 25 }}>
                    <TextInput
                      placeholder={"Leltár kód, név, biz. szám, dátum"}
                      style={{ width: "100%" }}
                      value={text}
                      onChangeText={(text) => setText(text)}
                      right={
                        <TextInput.Icon
                          name="magnify" // where <Icon /> is any component from vector-icons or anything else
                          onPress={() => { }}
                        />
                      }
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginHorizontal: 25,
                      marginTop: 15,
                    }}
                  >
                    <SortHeader
                      ascending={ascending}
                      setAscending={setAscending}
                      col1Text="Leltárak"
                      col2Text="Dátum"
                    />
                  </View>

                  <ScrollView
                    style={{
                      flex: 1,
                      width: "100%",
                      height: "100%",
                      paddingHorizontal: 25,
                      marginTop: 10,
                    }}
                    refreshControl={
                      <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                      />
                    }
                  >
                    {inventoryHeads && inventoryHeads.sort((a, b) =>
                      ascending ? ((a.inventory.code > b.inventory.code) ? 1 : ((b.inventory.code > a.inventory.code) ? -1 : 0)) : ((b.inventory.code > a.inventory.code) ? 1 : ((a.inventory.code > b.inventory.code) ? -1 : 0))
                    )
                      .filter((x) => x.inventoryId !== "")
                      .map((x) => <InventoryListRow row={x} />)}
                  </ScrollView>
                </View>
              )}
            </View>
          </TabScreen>
        </Tabs>
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
        onPress={() => navigation.navigate("InventoryHeader")}
      />
    </Screen>
  );
};

export default InventoryListScreen;

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
    textAlign: "center",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    color: "white",
    backgroundColor: "#7B034D",
  },
});
