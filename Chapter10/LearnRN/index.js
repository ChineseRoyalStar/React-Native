/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {StackNavigator} from 'react-navigation';
import LoginLeaf from './LoginLeaf';
import WaitingLeaf from './WaitingLeaf';

const SimpleApp = StackNavigator({
    Home: {screen: LoginLeaf},
    Wait: {screen: WaitingLeaf},
},{
    cardStyle: 'modal',
   // headerMode: 'none'
})

AppRegistry.registerComponent(appName, () => SimpleApp);
