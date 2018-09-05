/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions,PixelRatio, TextInput, Alert} from 'react-native';

const {height, width} = Dimensions.get('window');
const pixelRatio = PixelRatio.get();
let widthOfMargin = Dimensions.get('window').width * 0.05;

export default class LoginLeaf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputedNum: '',
      inputPW: ''
    }; 
    this.updatePW = this.updatePW.bind(this);
    this.jumpToWaiting = this.jumpToWaiting.bind(this);
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
        <Text style={styles.bigTextPrompt} onPress={() => this.userPressAddressBook()}>确 定</Text>
      </View>
    );
  }

  userPressConfirm() {

    // Alert.alert(
    //   '弹出框标题提示语',
    //   '弹出框正文提示语',
    //   [
    //     { text: '选项一', onPress: this.option1Selected },
    //     { text: '选项二', onPress: this.option2Selected },
    //     { text: '选项三', onPress: this.option3Selected },
    //     { text: '选项四', onPress: this.option4Selected },
    //     { text: '选项五', onPress: this.option5Selected, style: 'cancel' },
    //   ],
    //   {
    //     // onDismiss: () => {
    //     //   // onDismiss时需要进行的业务处理
    //     // }
    //     cancelable: false
    //   }
    // );

    Alert.alert(
      '提示',
      '确定使用'+this.state.inputedNum+'号码登录吗?',
      [
        {text: '取消', onPress:(()=>{}), style: 'cancel'},
        {text: '确定', onPress: this.jumpToWaiting}
      ]
    );
   
  }

  jumpToWaiting() {
     this.props.onLoginPressed(this.state.inputedNum, this.state.inputPW);
  }

  option1Selected() {
    console.log('optionSelectd.');
  }

  option2Selected() {
    console.log('optionSelectd.');
  }

  option3Selected() {
    console.log('optionSelectd.');
  }

  option4Selected() {
    console.log('optionSelectd.');
  }

  option5Selected() {
    console.log('optionSelectd.');
  }

  userPressAddressBook() {
    console.log('userPressAddressBook is called.');
    var {NativeAppEventEmitter} = require('react-native');
    //向事件接收器注册接受名为NativeModuleMsg的事件,并且指定收到事件后的处理函数
    //NativeAppEventEmitter.addListener('NativeModuleMsg', (reminder) => {
      //this.handleNativeInterfaceMsg(reminder.message);  
    //}); //指定处理名称为message的消息,与Objective-C代码中指定的消息名称一致
    let ExampleInterface = require('react-native').NativeModules.ExampleInterface;
    ExampleInterface.sendMessage('{\"msgType\":\"pickContact\"}').then(
      (result)=> {
        console.log(result);
        let msgObj = JSON.parse(result);
        this.setState({inputedNum: msgObj.peerNumber});
      }
    ).catch (
      (error)=>{
        console.log(error);
        console.log(error.message);
        console.log(error.code);
        console.log(error.nativeStackIOS);
        console.log(error.nativeStackIOS.length);
      }
    );
  }

  //事件处理函数, 把收到的消息打印在调试日志中,并解释出消息中的号码,显示在手机屏幕上
  handleNativeInterfaceMsg(aMsg) {
    console.log(aMsg);
    let msgObject = JSON.parse(aMsg);
    this.setState({inputedNum:msgObject.peerNumber});
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
