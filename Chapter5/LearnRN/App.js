/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';

export default class App extends Component {

  onButtonPressed() {

  }
  render() {
    return (
      <View style={styles.container}>
        {/* <TouchableHighlight onPress={this.onButtonPressed}>
          <View style={styles.button}/>
        </TouchableHighlight> */}
        {/* <TouchableOpacity onPress={this.onButtonPressed} activeOpacity={0.85}>
          <View style={styles.button}/>
        </TouchableOpacity> */}
        {/* <TouchableNativeFeedback onPress={this.onButtonPressed} activeOpacity={0.85}>
          <View style={styles.button}/>
        </TouchableNativeFeedback> */}
        <TouchableWithoutFeedback onPress={this.onButtonPressed} activeOpacity={0.85}>
          <View style={styles.button}/>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },
  button: {
    width: 120,
    height: 70,
    backgroundColor: 'grey',
  }
});
