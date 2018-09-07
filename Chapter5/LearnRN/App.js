/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';


export default class App extends Component {
 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcome} opacity={0} />
        <View style={styles.welcome} opacity={0.1} />
        <View style={styles.welcome} opacity={0.25} />
        <View style={styles.welcome} opacity={0.5} />
        <View style={styles.welcome} opacity={0.75} />
        <View style={styles.welcome} opacity={1} />
        <View style={styles.welcome} opacity={5} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'grey'
  },
  welcome: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: 'white',
  }
});
