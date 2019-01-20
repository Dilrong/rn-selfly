import { createStackNavigator, createAppContainer } from 'react-navigation';
import {ListContainer, ContentContainer } from './containers';

const AppNavigator = createStackNavigator({
    List: {
        screen: ListContainer
    },
    Content: {
        screen: ContentContainer
    }
});

export default createAppContainer(AppNavigator);