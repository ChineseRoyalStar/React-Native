/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class App extends Component {

  render() {
    let aLongString = "我很长,显示不下怎么办";
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle} ellipsizeMode='head' numberOfLines={1}>{aLongString}</Text>
        <Text style={styles.textStyle} ellipsizeMode='middle' numberOfLines={1}>{aLongString}</Text>
        <Text style={styles.textStyle} ellipsizeMode='tail' numberOfLines={1}>{aLongString}</Text>
        <Text style={styles.textStyle} ellipsizeMode='clip' numberOfLines={1}>{aLongString}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  textStyle: {
    height: 45,
    width: 200,
    fontSize: 30,
    backgroundColor: 'gray',
    textAlign: 'center',
    margin: 5
  }
});
