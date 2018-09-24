import React, { Component } from "react";
import { TextInput, View, Text, StyleSheet, Button } from "react-native";

class PlaceInput extends Component {
  state = {
    placename: ""
  };

  updatePlaceHandler = event => {
    this.setState({
      placename: event
    });
  };

  onPressSubmitHandler = placename => {
    if (this.state.placename.trim() === "") {
      return;
    }

    this.props.addPlace(this.state.placename);
  };

  render() {
    return (
      <View style={styles.InputComponent}>
        <TextInput
          style={styles.PlaceInput}
          onChangeText={this.updatePlaceHandler}
          placeholder="Enter something"
        />
        <Button
          style={styles.PlaceButton}
          onPress={this.onPressSubmitHandler}
          title="Add"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  InputComponent: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  PlaceInput: {
    width: "70%"
  },
  PlaceButton: {
    width: "30%"
  }
});

export default PlaceInput;
