import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CardView = ({data}) => (
    <View style={styles.container}>
        <Text style={styles.CardCategory}>{data.postCategory}</Text>
        <Text style={styles.CardTitle}>{data.postTitle}</Text>
        <Text style={styles.CardContent}>{data.postSubTitle}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        elevation: 5,
        borderRadius: 7,
        borderWidth: 0.5,
        borderColor: '#fff',
        backgroundColor: '#fff',
        width: 350,
        margin: 8,
        elevation: 5
    },
    CardCategory: {
        width: '100%',
        fontSize: 10,
        color: '#7f8c8d',
        paddingTop: 10,
        paddingLeft: 10
    },
    CardTitle: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10
    },
    CardContent: {
        width: '100%',
        fontSize: 12,
        paddingLeft: 10,
        paddingBottom: 10
    },
});

export default CardView;