import React from 'react';
import { View, Text, Button, StyleSheet, AsyncStorage } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { goAuth } from '../../navigation/navigation';
import { USER_KEY } from '../../helper/config';

export default class Home extends React.Component {
    logout = async () => {
        try {
            await AsyncStorage.removeItem(USER_KEY);
            goAuth();
        } catch (err) {
            console.log('error signing out...: ', err);
        }
    };

    moveToComponent = () => {
        console.log('trigger ad', this.props.componentId);
        Navigation.push(this.props.componentId, {
            component: {
                name: 'Navigation.HomeSetting',
                passProps: {
                    text: 'Pushed screen'
                },
                options: {
                    bottomTabs: {
                        visible: false
                    }
                }
            }
        });
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello Page from Home screen page.</Text>
                <Button onPress={this.logout} title="Sign Out" />
                <Button onPress={this.moveToComponent} title="View next screen" />
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
