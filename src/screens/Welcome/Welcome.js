import React from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { goMainTab, goAuth, showOverlay } from '../../navigation/navigation';
import { USER_KEY } from '../../helper/config';

class Welcome extends React.Component {
    componentDidMount() {
        console.log('start');
        try {
            //const user = await AsyncStorage.getItem(USER_KEY);
            //console.log('user is here: ', user);
            if (false) {
                goMainTab();
            } else {
                goAuth();
            }
        } catch (err) {
            console.log('error: ', err);
            showOverlay();
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome User</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 28
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Welcome;
