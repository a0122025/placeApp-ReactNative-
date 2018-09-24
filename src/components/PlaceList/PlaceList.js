import React from "react";
import { FlatList, StyleSheet, ScrollView } from "react-native";
import ListItem from "../ListItem/ListItem";

const PlaceList = props => {
  return (
    <FlatList
      style={styles.LabelComponent}
      data={props.listPlace}
      renderItem={info => (
        <ListItem
          item={info.item.name}
          image={info.item.image}
          onItemPressed={() => props.onItemSelected(info.item.key)}
        />
      )}
    />
  );
};
const styles = StyleSheet.create({
  LabelComponent: {
    width: "100%"
  }
});

export default PlaceList;
