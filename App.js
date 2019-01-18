import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListContainer } from './containers';
import { Header, StatusBar } from './components';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#F9CA24' barStyle='dark-content'/>
        <Header/>
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
