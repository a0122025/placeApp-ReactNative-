import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Image } from 'react-native-animatable';
import imgLogo from '../../assets/hotel.jpg';

class Auth extends Component {
    loginHandler = () => {};

    render() {
        return (
            <View>
                <Image
                    animation={'bounceIn'}
                    duration={1200}
                    delay={200}
                    ref={ref => (this.logoImgRef = ref)}
                    source={imgLogo}
                />
                <Text>Auth Screen</Text>
                <Button title="Login" onPress={this.loginHandler} />
            </View>
        );
    }
}

export default Auth;
