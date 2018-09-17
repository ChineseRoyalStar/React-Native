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
 
  // pointEvents是字符串类型的属性, 它可以取值为none、box-one、box-only、auto.
  // 当取值为none时,发生在本组件与本组件的子组件上的触摸事件都会交给本组件的父组件处理.
  // 当取值为box-none时,发生在本组件显示范围内(非本组件的子组件显示范围内)的事件将交由本组件的父组件处理,发生在本组件的子组件显示范围内的触摸事件由子组件处理
  // 当取值为box-only时,发生在本组件显示范围内的触摸事件将全部由本组件处理(即使触摸事件发生在本组件的子组件显示范围内).
  // 而auto的行为视组件的不同而不同,并不是所有的子组件都支持box-none和box-only两个值
  
  constructor(props) {
    super(props);
    this.state = {bigButtonPointerEvents:null};
    this.onBigButtonPressed = this.onBigButtonPressed.bind(this);
    this.onSmallButtonPressed = this.onSmallButtonPressed.bind(this);
  }

  onBigButtonPressed() {
    console.log('Big button pressed');
  }

  onSmallButtonPressed() {
    if (this.state.bigButtonPointerEvents === null) {
      console.log('big button will not reponde.');
      this.setState({bigButtonPointerEvents:'none'}); //改变状态机变量值
      return;
    }
    console.log('big button will response.');
    this.setState({bigButtonPointerEvents:null}); //改变状态机变量值
  }

  render() {
    return (
      <View style={styles.container} onLayout={this._onLayout}>
        <Text style={styles.sButtonStyle} onPress={this.onSmallButtonPressed}>
          Small button
        </Text>
        <Text style={styles.bButtonStyle} onPress={this.onBigButtonPressed} pointerEvents={this.state.bigButtonPointerEvents}>
          Big button
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sButtonStyle: {
    fontSize:20, left:130, top:50, width:150, height:35, backgroundColor:'grey'
  },
  bButtonStyle: {
    fontSize:20, left:130, top:130, width:150, height:70, backgroundColor:'grey'
  }
});
