/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions,PixelRatio, TextInput} from 'react-native';

const {height, width} = Dimensions.get('window');
const pixelRatio = PixelRatio.get();
let widthOfMargin = Dimensions.get('window').width * 0.05;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputedNum: '',
      inputPW: ''
    }; 
    this.updatePW = this.updatePW.bind(this);
  }
  updateNum(newText) {
    this.setState((oldState) => {
      for(var aName in oldState) {
        console.log(aName);
        console.log(oldState[aName]);
      }
      return {
        inputedNum: newText,
        aBrandnewStateVariable: 'I am a new variable.'
      };
    }, this.changeNumDone);
  }
  
  changeNumDone() {
    console.log('React Native has changed inputed Num');
  }

  updatePW(newText) {
    this.setState(() => {
      return {
        inputPW: newText,
      };
    });
  }

  render() {
    let aValue;
    console.log('Render has beee excuted.');
    console.log('Screen height is:' + height);
    console.log('aValue is:' + aValue);
    console.log('The type of aValue is:' + typeof(aValue));
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInputStyle} placeholder={'请输入手机号'} onChangeText={(newText) => {this.updateNum(newText)}}/>
        <Text style={styles.textPromptStyle}>您输入的手机号:{this.state.inputedNum}</Text>
        <TextInput style={styles.textInputStyle} 
        placeholder={'请输入密码'} 
        secureTextEntry={true}
        onChangeText={this.updatePW}/>
        <Text style={styles.bigTextPrompt}>确 定</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  textInputStyle: {
    margin: widthOfMargin,
    backgroundColor: 'gray',
    height: 30,
    fontSize: 20
  },
  textPromptStyle: {
    margin: widthOfMargin,
    fontSize: 20
  },
  bigTextPrompt: {
    margin: widthOfMargin,
    backgroundColor: 'gray',
    color: 'white',
    textAlign: 'center',
    fontSize: 30
  },
});
