import React from 'react';
import axios from 'react-native-axios';
import { StyleSheet, View, ScrollView, TouchableHighlight } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { CardView, StatusBar, Header } from '../../components';

export default class ListContainer extends React.Component {
  state = {
    data: [],
    isLoading: false
  }

  componentDidMount(){
    this.getPostData();
  }

  getPostData = () => {
    return axios.get('http://selfly.dilrong.com/posts')
    .then((response) => {
      this.setState({
        data: response.data.rows,
        isLoading: true
      })
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#F9CA24' barStyle='dark-content'/>
        <Header/>
        <ScrollView>
          {this.state.data.map((data, index) => (
            <TouchableHighlight
              key={index}
              onPress={() => this.props.navigation.navigate('Content')}
            >
              <CardView
                key={index}
                data={data}
              />
            </TouchableHighlight>
          ))}
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ECF0F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});