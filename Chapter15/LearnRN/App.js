  /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, VibrationIOS,Vibration,View,Text} from 'react-native';

export default class App extends Component {

  startVibration() {
    let pattern = [0,500,200,500];
    Vibration.vibrate(pattern);
    console.log('vib is called.');
  }

  render() {
   return (
    <View style={styles.container}>
      <Text style={styles.welcome} onPress = {this.startVibration.bind(this)}>Press to Vibrate</Text>
      <Text style={styles.welcome} onPress = {()=>{Vibration.cancel()}}>Press to Cancel Vibrate</Text>
    </View>);
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'grey',
    margin: 20,
  }
});

