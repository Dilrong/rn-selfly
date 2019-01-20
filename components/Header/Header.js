import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Directions } from 'react-native-gesture-handler';

const Header = () => (
    <View style={styles.container}>
        <Image source={{uri: 'https://s3.ap-northeast-2.amazonaws.com/selfly.dilrong.com/system/LOGO.png'}} style={{width: 85, height: 27, margin: 10}}/>
        <TextInput style={styles.searchBar} placeholder='Search...'/>
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
    },
    searchBar :{
        width: '65%',
        height: '70%',
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
        margin: 7
    }
});

export default Header;