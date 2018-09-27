import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import FindPlace from '../FindPlace/FindPlace';
import SharePlace from '../SharePlace/SharePlace';

export default createBottomTabNavigator({
    Home: { screen: FindPlace },
    Settings: { screen: SharePlace }
});
