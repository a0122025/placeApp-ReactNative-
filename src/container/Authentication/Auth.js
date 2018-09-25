import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Auth extends Components {
    render() {
        return (
            <View>
                <Image
                    animation={'bounceIn'}
                    duration={1200}
                    delay={200}
                    ref={(ref) => this.logoImgRef = ref}
                    style={styles.logoImg}
                    source={imgLogo}
                />
                <Text></Text>
            </View>   
        )
    }
}

export default Auth;