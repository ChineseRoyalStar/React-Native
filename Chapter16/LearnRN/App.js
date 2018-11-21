  /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';

import FLAnimatedImage from './FLAnimatedImage';

export default class App extends Component {

  render() {
   return (
    <View style={styles.container}>
      <FLAnimatedImage style={styles.container1} src='https://n.sinaimg.cn/tech/transform/317/w200h117/20181120/bUrh-hmhhnqt1561961.gif' resizeMode="contain"></FLAnimatedImage>
      <Text style={styles.textStyle}>Hello, world.</Text>
    </View>);
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  container1: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#F5FCFF',
  },
  textStyle:{
    position: 'absolute',
    top: 320,
    left:50,
    height: 40,
    fontSize: 30,
    backgroundColor: 'transparent'
  }
});

