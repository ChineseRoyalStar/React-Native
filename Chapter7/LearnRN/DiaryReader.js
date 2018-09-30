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
    console.log("<--------- Load Data ---------->");

    this.loadData();

    console.log("<--------- Delete Data ---------->");

    // 删除数据
    // AsyncStorage.clear()
    // AsyncStorage.mutiRemove();

    // 修改数据
    // AyncStorage.mergeItem(aKey, saValue)
    // AyncStorage.multiMerge(aArray)

    // JSON对象存储
    // JSON.string(constantData)
    // JSON.parse(newJSONString)

    // AyncStorage API存储数据的无序性

    AsyncStorage.removeItem('1').then(
      ()=>{

      }
    ).catch(
      (error)=>{
        console.log('error:' + error.messgae);
      }
    )

    console.log("<--------- Reload Data ---------->");

    this.loadData();

    console.log("<--------- End Reload Data ---------->");
  }

  loadData(){
    AsyncStorage.getAllKeys().then(
      (keys)=>{
        let arrayLen = keys.length;
        for(let counter=0; counter < arrayLen; counter++) {
          console.log('key ' + counter + ':' + keys[counter]);
            AsyncStorage.getItem(keys[counter]).then(
              (result)=>{
              console.log('key ' + keys[counter] + ' getItem data:' + result); 
            }
          ).catch(
              (errors)=>{
                console.log('error:' + error.message);
              }
          )
        }
      }
    ).catch(
      (error)=>{
        
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
