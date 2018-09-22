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
    return (
      <View style={styles.container}>
        <Text style={styles.barStyle}>
          我是20号字体
            <Text style={styles.boldFont}>
            {'\r\n'}我是加粗20号字体
            </Text>
        </Text>
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
  barStyle: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    textShadowOffset: {width:5, height:5},
    textShadowRadius: 2,
    textShadowColor: 'grey'
  },
  boldFont: {
    fontWeight: 'bold'
  }
});
