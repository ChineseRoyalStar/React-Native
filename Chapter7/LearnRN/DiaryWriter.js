/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, StatusBar} from 'react-native';

import MCV from './MCV';

export default class DiaryWriter extends Component {

  returnPressed() {
    Alert.alert(
      '请确认',
      '您确定要退回日记列表吗',
      [
        {text: '确定'},
        {text: '取消'}
      ]
    );
  }

  render() {
    return (
      <View style={MCV.container}>
        <StatusBar hidden={true} />
          <View style={MCV.firstRow}>
            <TouchableOpacity onPress={this.returnPressed}>
              <Text style={MCV.smallButton}>
                返回
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.returnPressed}>
              <Text style={MCV.smallButton}>
                某变量当前按钮文字
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.returnPressed}>
              <Text style={MCV.smallButton}>
                保存
              </Text>
            </TouchableOpacity>
          </View>
          <TextInput style={MCV.titleInputStyle} placeholder={'写个日记标题吧'}/>
          <TextInput style={MCV.diaryBodyStyle} multiline={true} placeholder={'日记正文请在此输入'}/>
      </View>
    );
  }
}
