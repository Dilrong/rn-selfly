import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import axios from 'react-native-axios';
import { CardView } from '../../components';

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
        <ScrollView>
          {this.state.data.map((data, index) => (
            <CardView
              key={index}
              data={data}
            />
          ))}
        </ScrollView>
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
