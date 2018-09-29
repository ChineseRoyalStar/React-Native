/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, AsyncStorage} from 'react-native';

let constantData = require('./data/SimpleSample.json');

export default class App extends Component {

  constructor(props) {
    super(props);
    console.log("<--------- Save Data ---------->");
    // AsyncStorage.setItem('name', 123).then( //使用Promise机制的方法
    //   ()=>{ //定义操作成功的处理函数
    //     // 当操作保存成功后需要做的操作
    //   } // 不定义rejection状态处理函数,使用Promise机制发生错误时的回调函数
    // ).catch(
    //   (error)=>{
    //     console.log(' error' + error.message);
    //   }
    // );
    AsyncStorage.multiSet([['1', '张三'], ['2','李四']]).then(
      ()=>{
       console.log('svae successfully') 
      }
    ).catch(
      (errors)=>{
        console.log(' errors length: ' + errors.length);
        if(errors.length > 0) {
          console.log('1st error message: ' + errors[0].message);
        }else {

        }
      }
    )
  }

  render() {
    return (
      <View style={styles.container}></View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 1
  },
});
