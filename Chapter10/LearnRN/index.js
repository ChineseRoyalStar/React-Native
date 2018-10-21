/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {StackNavigator, TabNavigator} from 'react-navigation';
import LoginLeaf from './LoginLeaf';
import WaitingLeaf from './WaitingLeaf';
import Mine from './Mine';

const MainScreenNavigator = StackNavigator({
    Login: {screen: LoginLeaf},
    Wait: {screen: WaitingLeaf},
},{
    cardStyle: 'modal',
});

const SimpleApp = TabNavigator({
    Home: {screen: MainScreenNavigator, },
    Mine: {screen: Mine, }
})

AppRegistry.registerComponent(appName, () => SimpleApp);
