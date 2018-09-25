import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TabNavigator, createBottomTabNavigator  } from 'react-navigation'; 
import LoginComponent from './Auth/Auth';
import MainComponent from './main';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <MainComponent /> 
      </View>
      
    )
  }
}

class LoginScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <LoginComponent /> 
      </View>
    )
  }
}

export default createBottomTabNavigator (
    {
      Home: { screen: HomeScreen },
      Settings: { screen: LoginScreen },
    }
);
  