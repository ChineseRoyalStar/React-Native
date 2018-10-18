/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, ActivityIndicator} from 'react-native';

export default class App extends Component {

  render() {
    return(
      <View style={{top: 40}} >
        <ActivityIndicator animating={true} color={'blue'} size={'large'} />
        <ActivityIndicator animating={true} color={'blue'} size={'small'} />
      </View>
    );
  }
}