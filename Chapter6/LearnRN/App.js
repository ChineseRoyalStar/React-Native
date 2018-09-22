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
        <Text style={styles.font20}>
          我是20号字体
            <Text style={styles.boldFont20}>
            {'\r\n'}我是加粗20号字体
              <Text styles={styles.balckBoldFont20}>
                {'\r\n'}我是加粗黑色20号字体
              </Text>
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
  font20: {
    fontSize: 20,
    textAlign: 'center'
  },
  boldFont20: {
    fontWeight:'bold'
  },
  balckBoldFont20: {
    color: 'black'
  }
});
