// SignIn.js
import React from 'react';
import { View, StyleSheet, TextInput, Button, AsyncStorage } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { goMainTab } from '../../navigation/navigation';
import { USER_KEY } from '../../helper/config';

export default class SignIn extends React.Component {
    state = {
        username: '',
        password: ''
    };
    onChangeText = (key, value) => {
        this.setState({ [key]: value });
    };
    signIn = async () => {
        const { username, password } = this.state;
        try {
            // login with provider
            const user = await AsyncStorage.setItem(USER_KEY, username);
            console.log('user successfully signed in!', user);
            goMainTab();
        } catch (err) {
            console.log('error:', err);
        }
    };

    moveToComponent = () => {
        console.log('trigger movesssss', this.props.componentId);
        Navigation.push(this.props.componentId, {
            component: {
                name: 'Navigation.HomeSetting',
                passProps: {
                    text: 'Pushed screen'
                }
            }
        });
    };
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor="white"
                    onChangeText={val => this.onChangeText('username', val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    autoCapitalize="none"
                    secureTextEntry
                    placeholderTextColor="white"
                    onChangeText={val => this.onChangeText('password', val)}
                />
                <Button title="Sign In" onPress={this.signIn} />
                <Button onPress={this.moveToComponent} title="View next screen" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        width: 350,
        fontSize: 18,
        fontWeight: '500',
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        color: 'white',
        padding: 8,
        borderRadius: 14
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
