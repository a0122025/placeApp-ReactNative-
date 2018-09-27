import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class App extends Component {
    loginHandler = () => {};

    render() {
        console.log('Taking');
        return (
            <View>
                <Text>App Screen</Text>
                <Button title="Login" onPress={this.loginHandler} />
            </View>
        );
    }
}

export default App;
