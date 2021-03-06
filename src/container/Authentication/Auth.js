import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Image } from 'react-native-animatable';
import imgLogo from '../../assets/hotel.jpg';

class Auth extends Component {
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
                <Text />
            </View>
        );
    }
}

export default Auth;
