/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import DiaryList from './DiaryList';
import DiaryReader from './DiaryReader';
import DiaryWriter from './DiaryWriter';
import DataHandler from './DataHandler';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uiCode:1,
      diaryList: [],
      diaryMood: null,
      diaryTime: '读取中......',
      diaryTitle: '读取中......',
      diaryBody: '读取中......'
    };
    this.bindAllMyFunction();
    DataHandler.getAllTheDiary().then(
      (result)=>{
        console.log('返回数据:'+result);
        this.setState({diaryList:result});
      }
    ).catch(
      (error)=>{
        console.log('读取错误');
        console.log(error);
      }
    )
  }

  bindAllMyFunction(){
    this.selectLististItem = this.selectLististItem.bind(this);
    this.writeDiary = this.writeDiary.bind(this);
    this.returnPressed = this.returnPressed.bind(this);
    this.saveDiaryAndReturn = this.saveDiaryAndReturn.bind(this);
    this.readingPreviousPressed = this.readingPreviousPressed.bind(this);
    this.readingNextPressed = this.readingNextPressed.bind(this);
  }

  readingPreviousPressed(){
    let previousDiary = DataHandler.getPrevousDiary();
    if(previousDiary === null) return;
    this.setState(previousDiary);
  }

  readingNextPressed() {
    let nextDiary = DataHandler.getNextDiary();
    if(nextDiary === null) return;
    this.setState(nextDiary);
  }

  returnPressed() {
    this.setState({uiCode:1});
  }

  saveDiaryAndReturn(newDiaryMood, newDiaryBody, newDiaryTitle) {
    DataHandler.saveDiary(newDiaryMood, newDiaryBody, newDiaryTitle).then(
      (result)=>{
        this.setState(result);
      }
    ).catch(
      (error)=>{
        console.log(error);
      }
    );
  }

  writeDiary() {
    this.setState(()=>{
      return {
        uiCode:3
      };
    });
  }

  searchKeyword(keyword) {
    console.log('search keyword is:' + keyword);
  }

  selectLististItem() {
    this.setState({uiCode: 2});
  }

  showDiaryList() {
    return (
      <DiaryList 
        fakeListTitle={this.diaryTitle} 
        fakeListTime={this.diaryTime} 
        fakeListMood={this.diaryMood} 
        selectLististItem={this.selectLististItem} 
        searchKeyword={this.searchKeyword}
        diaryList={this.state.diaryList}
        writeDiary={this.writeDiary}/>
    );
  }

  showDiaryReader() {
    return (
      <DiaryReader returnToDiaryList={this.returnPressed} diaryTitle={this.state.diaryTitle} diaryMood={this.state.diaryMood} diaryTime={this.state.diaryTime} readingPrevioudPressed={this.readingPreviousPressed} readingNextPressed={this.readingNextPressed} returnPressed={this.returnPressed} diaryBody={this.state.diaryBody}/>
    );
  }

  showDiaryWriter() {
    return (
      <DiaryWriter returnPressed={this.returnPressed} saveDiary={this.saveDiaryAndReturn}/>
    );
  }

  render() {
    if(this.state.uiCode === 1) return this.showDiaryList();
    if(this.state.uiCode === 2) return this.showDiaryReader();
    if(this.state.uiCode === 3) return this.showDiaryWriter();
  }
}