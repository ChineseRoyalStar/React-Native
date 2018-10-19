/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import PropTypes from 'prop-types'; // 在代码最开始导入PropTypes类
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class WaitingLeaf extends Component {
  static navigationOptions = {
    title: '登录中',
    headerRight: <Button title="Info"/>
  }

  constructor(props) {
    super(props);
    this.onGobackPressed = this.onGobackPressed.bind(this);
  }

  render() {
    const {params} = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text style={styles.textPromptStyle}>
          登录使用手机号:{params.phoneNumber}
        </Text>
        <Text style={styles.bigTextPrompt}>
          登录使用密码:{params.userPW}
        </Text>
        <Text style={styles.bigTextPrompt} onPress={()=>this.onGobackPressed()}>
          返 回
        </Text>
      </View>
    );
  }

  onGobackPressed() {
    this.props.navigation.goBack();
  }
}

WaitingLeaf.propTypes = { 
  phoneNumber: PropTypes.string,
  userPW: PropTypes.string
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
    fontSize: 20
  },
});
