import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import CircleWithLetter from "./../CircleWithLetter";
import { useTheme } from "react-native-paper";
import Moment from "react-moment";
import moment from "moment";
const InventoryListRow = ({ row }) => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        marginVertical: 15,
        flex: 1,
        flexDirection: "row",
      }}
    >
      <View
        styles={{
          width: 40,
          height: 40,
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <CircleWithLetter
          styleParam={{ flex: 0, marginTop: 5 }}
          color={
            row.inventory.type && row.inventory.type === "I"
              ? colors.primary
              : colors.muted
          }
        >
          {row.inventory.type}
        </CircleWithLetter>
      </View>
      <View style={{ flex: 1, }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#243443",
              marginBottom: 5,
              paddingLeft: 10,
            }}
          >
            {row.inventory.code} | {row.inventory.name}
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontSize: 16,
              color: "#243443",
              marginBottom: 5,
              paddingLeft: 10,
            }}
          >
            {row.storage.code}
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#243443",
              marginBottom: 5,
              paddingLeft: 10,
            }}
          >
            {moment(row.inventory.startDate).format('YYYY.MM.DD.')}  </Text>
        </View>
      </View>
    </View>
  );
};

export default InventoryListRow;
