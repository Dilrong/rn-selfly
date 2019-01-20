import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Directions } from 'react-native-gesture-handler';

const Header = () => (
    <View style={styles.container}>
        <Image source={{uri: 'https://s3.ap-northeast-2.amazonaws.com/selfly.dilrong.com/system/LOGO.png'}} style={{width: 85, height: 27, margin: 10}}/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        flexDirection: 'row',
        elevation: 5,
        backgroundColor: '#F9CA24',
        width: '100%',
        elevation: 5
    }
});

export default Header;