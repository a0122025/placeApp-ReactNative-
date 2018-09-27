import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/screens/screen';
import App from './App';
import configureStore from './src/store/config';

const store = configureStore();

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'navigation.place.AuthScreen'
            }
        }
    });
});
