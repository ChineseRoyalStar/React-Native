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
 
  _onLayout(event) {

    {
      let {x,y,width,height} = event.nativeEvent.layout;
      console.log('width from View onLyout:' + width); //打印宽
      console.log('height from View onLayout' + height); //打印高
      console.log('x from View onLayout:' + x);
      console.log('y from View onLayout:' + y);
    }
    // 使用解构赋值取得设备屏幕的宽和高,与onLayout函数上根的宽、高做比较
    let Dimensions = require('Dimensions');
    let {width,height} = Dimensions.get('window');
    console.log('width from Demensions:' + width);
    console.log('height from Demensions:' + height);
    console.log('\r\n');
  }

  _onLayoutText(event) {

    let {x,y,width,height} = event.nativeEvent.layout;
    console.log('width from View onLyout:' + width); //打印宽
    console.log('height from View onLayout' + height); //打印高
    console.log('x from View onLayout:' + x);
    console.log('y from View onLayout:' + y);
  }

  render() {
    return (
      <View style={styles.container} onLayout={this._onLayout}>
        <Text style={styles.welcome} onLayout={this._onLayoutText}>
          Welcome to React Native!
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
    backgroundColor: '#F5FCEF',
  },
  welcome: {
    fontSize: 20,
    textAlign:'center',
    margin: 10,
  }
});
