import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CardView = () => (
    <View style={styles.container}>
        <Text style={styles.CardCategory}>testCategory</Text>
        <Text style={styles.CardTitle}>testTitle</Text>
        <Text style={styles.CardContent}>testContent</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        elevation: 5,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#fff',
        backgroundColor: '#fff',
        width: '90%',
        margin: 8,
        elevation: 5
    },
    CardCategory: {
        width: '100%',
        fontSize: 10,
        color: '#7f8c8d',
        padding: 5
    },
    CardTitle: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 5
    },
    CardContent: {
        width: '100%',
        fontSize: 12,
        padding: 5
    },
});

export default CardView;