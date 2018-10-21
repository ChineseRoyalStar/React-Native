/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import PropTypes from 'prop-types'; // 在代码最开始导入PropTypes类
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationActions} from 'react-navigation';

export default class Mine extends Component {
  static navigationOptions = {
    title: '登 录 中',
  }

  render() {
    console.log('list state of route.');
    console.log(this.props.navigation.state);
    return (
      <View style={styles.container}>
        <Text style={styles.textPromptStyle}>
          我 的 
        </Text>
      </View>
    );
  }

  componentWillUnmount() {
    console.log('Mine will close');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  textPromptStyle: {
    fontSize: 20
  },
  bigTextPromptStyle: {
    width: 300,
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 60
  }
});
