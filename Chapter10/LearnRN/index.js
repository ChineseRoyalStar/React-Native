/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {DrawerNavigator} from 'react-navigation';
import LoginLeaf from './LoginLeaf';
import WaitingLeaf from './WaitingLeaf';
import Mine from './Mine';

const SimpleApp = DrawerNavigator({
    Login: {screen: LoginLeaf},
    Wait: {screen: WaitingLeaf},
    Mine: {screen: Mine, },
});

AppRegistry.registerComponent(appName, () => SimpleApp);
