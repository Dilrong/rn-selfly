import React from 'react';
import { Dimensions, ScrollView } from 'react-native';
import HTML from 'react-native-render-html';

const htmlContent;

export default class ContentContainer extends React.Component {
    render() {
        return (
            <ScrollView style={{flex: 1}}>
                <HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width}/>
            </ScrollView>
        );
    }
}