import React from 'react';
import { Dimensions, ScrollView } from 'react-native';
import HTML from 'react-native-render-html';

const htmlContent=`<h1>Helloworld!</h1>`;

export default class ContentContainer extends React.Component {
    static navigationOptions = {
        header: null,
      }

    render() {
        return (
            <ScrollView style={{flex: 1}}>
                <HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width}/>
            </ScrollView>
        );
    }
}