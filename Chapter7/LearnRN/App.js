/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import DiaryList from './DiaryList';
import DiaryReader from './DiaryReader';
import DiaryWriter from './DiaryWriter';
import DataHander from './DataHandler';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uiCode:1,
      diaryMood: null,
      diaryTime: '读取中......',
      diaryTitle: '读取中......',
      diaryBody: '读取中......'
    };
    //this.bindAllMyFunction();
    
  }

  bindAllMyFunction(){
    this.selectLististItem = this.selectLististItem.bind(this);
    this.writeDiary = this.writeDiary.bind(this);
    this.returnPressed = this.returnPressed.bind(this);
    this.saveDiaryAndReturn = this.saveDiaryAndReturn.bind(this);
    this.readingPreviousPressed = this.readingPrevioudPressed.bind(this);
    this.readingNextPressed = this.readingNextPressed.bind(this);
  }

  readingPreviousPressed(){
    
  }

  readingNextPressed() {

  }

  returnPressed() {

  }

  saveDiaryAndReturn() {
    this.setState({uiCode: 1});
  }

  showDiaryList() {
    return (
      <DiaryList/>
    );
  }

  showDiaryReader() {
    return (
      <DiaryReader/>
    );
  }

  showDiaryWriter() {
    return (
      <DiaryWriter/>
    );
  }

  render() {
    return this.showDiaryWriter();
  }
}