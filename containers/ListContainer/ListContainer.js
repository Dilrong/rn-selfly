import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CardView } from '../../components';

export default class ListContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CardView/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ECF0F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
