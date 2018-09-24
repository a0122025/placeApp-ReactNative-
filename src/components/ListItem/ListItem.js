import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
const ListItem = props => {
  return (
    <TouchableOpacity onPress={props.onItemPressed}>
      <View style={styles.LabelItem}>
        <Image
          source={props.image}
          resizeMode="contain"
          style={styles.placeImage}
        />
        <Text>{props.item}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  LabelItem: {
    width: "100%",
    backgroundColor: "#eee",
    marginBottom: 5,
    padding: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30
  }
});

export default ListItem;
