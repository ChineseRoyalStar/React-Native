/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Image} from 'react-native';

var aImage = require('./1.png');

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textImputStyle} defaultValue='Ajfg你好' clearButtonMode='while-editing'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  textImputStyle: {
    width: 200,
    height: 70,
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
