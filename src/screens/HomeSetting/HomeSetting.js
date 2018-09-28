import { View, Text, StyleSheet } from 'react-native';
import React, { Component } from 'react';

class HomeSetting extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>I am at Home Setting Page</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default HomeSetting;
