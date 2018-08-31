/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class WaitingLeaf extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textPromptStyle}>
          登录使用手机号:{this.props.phoneNumber}
        </Text>
        <Text style={styles.bigTextPrompt}>
          登录使用密码:{this.props.userPW}
        </Text>
        <Text style={styles.bigTextPrompt} onPress={()=>this.onGobackPressed()}>
          返 回
        </Text>
      </View>
    );
  }

  onGobackPressed() {
    this.props.onGobackPressed();
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
  bigTextPrompt: {
    width: 300,
    backgroundColor: 'gray',
    color: 'white',
    textAlign: 'center',
    fontSize: 60
  },
});
