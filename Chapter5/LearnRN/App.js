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
        <View style={styles.vs} />
        <View style={styles.vs2} />
        <View style={styles.vs} />
        <View style={styles.vs1} />
        <View style={styles.vs} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'white'
  },
  vs: {
    height: 50,
    backgroundColor: 'gray',
  },
  vs1: {
    flex:1,
    height: 50,
    backgroundColor: 'black',
  },
  vs2: {
    flex:2,
    height: 50,
    backgroundColor: 'black',
  }
});
