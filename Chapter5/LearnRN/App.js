/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

let nativeImageSource = require('nativeImageSource'); //导入nativeImageSource函数

export default class App extends Component {
  render() {
    let ades = {
      ios:'story-background',
      width: 100, height: 100
    };
    
    return (
      <View style={styles.container}>
        <Image style={styles.imageStyle} source={nativeImageSource(ades)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor:'grey',
  },
  imageStyle: {
    margin: 2, 
    backgroundColor: 'white',
    width: 100,
    height: 100
  }
});
