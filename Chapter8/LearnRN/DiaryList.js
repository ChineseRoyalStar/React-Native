/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ListView, View, Text, TextInput, TouchableOpacity, Image, StatusBar} from 'react-native';

import MCV from './MCV';

export default class DiaryList extends Component {  

  constructor(props) {
    super(props);
    this.state = {
      diaryListDataSource: new ListView.DataSource({rowHasChanged:(oldRow, newRow)=>oldRow !== newRow})
    };
    this.updateSearchKeyword = this.updateSearchKeyword.bind(this);
    this.renderListItem = this.renderListItem.bind(this);
  }

  componentWillMount() {
    if (this.props.diaryList === null) return;
    this.setState({diaryListDataSource:this.state.diaryListDataSource.cloneWithRows(this.props.diaryList)});
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      diaryListDataSource:this.state.diaryListDataSource.cloneWithRows(nextProps.diaryList)
    });
  }

  updateSearchKeyword(newTest) {
    this.props.updateSearchKeyword(newText);
  }

  render() {
    console.log('list的datasource'+this.props.diaryList.length);
    return (
      <View style={MCV.container}>
        <StatusBar hidden={true}/>
        <View style={MCV.firstRow} >
         <View style={{borderWidth: 1}}>
          <TextInput autoCapitalize="none" placeholder='输入搜索关键词' clearButtonMode='while-editing' onChangeText={this.updateSearchKeyword} style={MCV.searchBarTextInput}/>
         </View>
         <TouchableOpacity onPress={this.props.writeDiary}>
           <Text style={MCV.middleButton}>
            写日记
           </Text>
         </TouchableOpacity>
        </View>
        {
          (
            (this.props.diaryList.length !== 0)?
            (
              <ListView dataSource={this.state.diaryListDataSource} renderRow={this.renderListItem}>
              </ListView>
            ):
            (
              <View style={{flex:1, justifyContent:'center'}}>
                <Text style={{fontSize: 18}}>您还没有写日记哦</Text>
              </View>
            )
          )
        }
      </View>
    );
  }

  renderListItem(log, sectionID, rowID) {
    return (
      <TouchableOpacity onPress={()=>this.props.selectLististItem(rowID)}>
        <View style={MCV.secondRow}>
            <Image style={MCV.moodStyle} source={log.mood}/>
            <View style={MCV.subViewInReader}>
              <Text style={MCV.textInReader}>{log.title}</Text>
              <Text style={MCV.textInReader}>{log.time}</Text>
            </View>
        </View>
      </TouchableOpacity>
    );
  }
}

