/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, Image, StatusBar} from 'react-native';

let angryMood = require('./image/angry.jpg');
import MCV from './MCV';

export default class DiaryList extends Component {  

  updateSearchKeyword() {
    
  }

  render() {
    return (
      <View style={MCV.container}>
        <StatusBar hidden={true}/>
        <View style={MCV.firstRow} >
         <View style={{borderWidth: 1}}>
          <TextInput autoCapitalize="none" placeholder='输入搜索关键词' clearButtonMode='while-editing' onChangeText={this.updateSearchKeyword} style={MCV.searchBarTextInput}/>
         </View>
         <TouchableOpacity>
           <Text style={MCV.middleButton}>
            写日记
           </Text>
         </TouchableOpacity>
        </View>
        <View style={MCV.diaryAbstractList}>
          <View style={MCV.secondRow}>
            <Image sytle={MCV.moodStyle} source={angryMood}/>
            <View style={MCV.subViewInReader}>
              <TouchableOpacity onPress={this.props.selectLististItem}>
                <Text style={MCV.textInReader}>
                  某变量记录假日记列表标题
                </Text>
              </TouchableOpacity>
              <Text style={MCV.textInReader}>
                  某变量记录假日记列表时间
                </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

