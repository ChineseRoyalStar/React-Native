  /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, PermissionsAndroid} from 'react-native';

export default class App extends Component {

  componentDidMount() {
    let para = {
      enableHightAccuract: true,
      timeout: 20000,
      maximumAge: 1000
    };
    navigator.geolocation.getCurrentPosition(this.getPositionResult, this.logError, para);
    this.watchID = navigator.geolocation.watchPosition(this.getPositionResult);
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }
  
  getPositionResult(aPosition) {
    console.log(aPosition);
  }

  logError(aError) {
    console.log(aError);
  }

  render(){
    return null;
  }
}

