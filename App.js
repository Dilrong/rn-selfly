import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListContainer } from './containers';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ListContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
