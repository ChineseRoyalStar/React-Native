/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {AsyncStorage} from 'react-native';

let angryMood = require('./image/angry.jpg');
let peaceMood = require('./image/angry.jpg');
let happyMood = require('./image/angry.jpg');
let sadMood = require('./image/angry.jpg');
let miseryMood = require('./image/angry.jpg');

export default class DataHandler {  

  static realDiaryList = [];
  static listIndex = 0;
  static getAllTheDiary() {
    return new Promise(
      function(resolve, reject) {
        AsyncStorage.getAllKeys().then(
          (Keys) => {
            if(Keys.length === 0) {
              resolve(DataHandler.realDiaryList);
              console.log('注意, rewove后的语句还会被执行, 因此resolve后如果有代码, 结束处理必须要跟return语句!');
              return;
            }
            AsyncStorage.multiGet(Keys).then(
              (results)=>{
                console.log(results);
                let resultsLength = results.length;
                for(let counter = 0;counter < resultsLength; counter++) {
                  DataHandler.realDiaryList[counter] = JSON.parse(results[counter][1]);
                  console.log(DataHandler.realDiaryList[counter]);
                  switch(DataHandler.realDiaryList[counter].mood) {
                    case 2: 
                      DataHandler.realDiaryList[counter].mood = angryMood;
                      break;
                    case 3: 
                      DataHandler.realDiaryList[counter].mood = sadMood;
                      break; 
                    case 4: 
                      DataHandler.realDiaryList[counter].mood = happyMood;
                      break;
                    case 5: 
                      DataHandler.realDiaryList[counter].mood = miseryMood;
                      break;
                    default: 
                      DataHandler.realDiaryList[counter].mood = peaceMood;
                  }
                  let ctime =  new Date(DataHandler.realDiaryList[counter].time);
                  DataHandler.realDiaryList[counter].time = '' + ctime.getFullYear() + '年' + (ctime.getMonth() + 1) + '月' + ctime.getDate() + '日 星期' + (ctime.getDay() + 1) + ' ' + ctime.getHours() + ':' + ctime.getMinutes();
                  resolve(DataHandler.realDiaryList);
                }
              }
            ).catch(
              (error)=> {
                console.log('读取信息失败'+error);
              }
            )
          }
        ).catch(
          (error)=>{
            console.log('A error happens while read all the diary.');
            console.log(error);
            AsyncStorage.clear();
            let aValue = {
              diaryTime: '没有历史日记',
              diaryTItle: '没有历史日记',
              diaryBody: ''
            };
            resolve(aValue);
          }
        )
      }
    );
  }

  static bubleSortDiaryList() {
    let tempObj;
    for(let i = 0; i < DataHandler.realDiaryList.length; i++) {
      for(let j = 0; j < DataHandler.realDiaryList.length-i-1; j++) {
        if (DataHandler.realDiaryList[j].index > DataHandler.realDiaryList[j+1].index) {
          tempObj = DataHandler.realDiaryList[j];
          DataHandler.realDiaryList[j] = DataHandler.realDiaryList[j+1];
          DataHandler.realDiaryList[j+1] = tempObj;
        }
      }
    }
  }

  static getPrevousDiary() {
    if(DataHandler.listIndex === 0) return null;
    DataHandler.listIndex--;
    let resultsLength = DataHandler.listIndex;
    let newMoodIcon;
    switch(DataHandler.realDiaryList[resultsLength].mood) {
      case 2:
        newMoodIcon = angryMood;
        break;
      case 3:
        newMoodIcon = sadMood;
        break;
      case 4:
        newMoodIcon = sadMood;
        break;
      case 5:
        newMoodIcon = sadMood;
        break;
      default:
        newMoodIcon = peaceMood;
    }
    let newTitle = DataHandler.realDiaryList[resultsLength].title;
    let newBody = DataHandler.realDiaryList[resultsLength].body;
    let ctime = new Date(DataHandler.realDiaryList[resultsLenght].time);
    let timeString = '' + ctime.getFullYear() + '年' + (ctime.getMonth() + 1) + '月' + ctime.getDate() + '日 星期' + (ctime.getDay() + 1) + ' ' + ctime.getHours() + ':' + ctime.getMinutes();
    return {
      diaryMood: newMoodIcon,
      diaryTime: timeString,
      diaryTitle: newTitle,
      diaryBody: newBody
    };
  }

  static getNextDiary() {
    if(DataHandler.listIndex === DataHandler.realDiaryList.length - 1) return null;
    DataHandler.listIndex++;
    let resultsLength = DataHandler.listIndex;
    let newMoodIcon;
    switch(DataHandler.realDiaryList[resultsLength].mood) {
      case 2:
        newMoodIcon = angryMood;
        break;
      case 3:
        newMoodIcon = sadMood;
        break;
      case 4:
        newMoodIcon = sadMood;
        break;
      case 5:
        newMoodIcon = sadMood;
        break;
      default:
        newMoodIcon = peaceMood;
    }
    let newTitle = DataHandler.realDiaryList[resultsLength].title;
    let newBody = DataHandler.realDiaryList[resultsLength].body;
    let ctime = new Date(DataHandler.realDiaryList[resultsLength].time);
    let timeString = '' + ctime.getFullYear() + '年' + (ctime.getMonth() + 1) + '月' + ctime.getDate() + '日 星期' + (ctime.getDay() + 1) + ' ' + ctime.getHours() + ':' + ctime.getMinutes();
    return {
      diaryMood: newMoodIcon,
      diaryTime: timeString,
      diaryTitle: newTitle,
      diaryBody: newBody
    };
  }

  static saveDiary(newDiaryMood, newDiaryBody, newDiaryTitle) {
    return new Promise(function(resolve, reject) {
      let currentTime = new Date();
      let timeString = '' + currentTime.getFullYear() + '年' + (currentTime.getMonth() + 1) + '月' + currentTime.getDate() + '日 星期' + (currentTime.getDay() + 1) + ' ' + currentTime.getHours() + ':' + currentTime.getMinutes();
      let aDiary = Object();
      aDiary.title = newDiaryTitle;
      aDiary.body = newDiaryBody;
      aDiary.mood = newDiaryMood;
      aDiary.time = currentTime;
      aDiary.sectionID = ' ' + currentTime.getFullYear() + ' 年 ' + (currentTime.getMonth() + 1) + '月';
      aDiary.index = Date.parse(currentTime);
      AsyncStorage.setItem('' + aDiary.index, JSON.stringify(aDiary)).then(
        ()=> {
          let totalLength = DataHandler.realDiaryList.length;
          DataHandler.realDiaryList[totalLength] = aDiary;
          DataHandler.listIndex = totalLength;
          let newMoodIcon;
          switch(newDiaryMood) {
            case 2:
             newMoodIcon = angryMood;
              break;
            case 3:
              newMoodIcon = sadMood;
              break;
            case 4:
              newMoodIcon = happyMood;
              break;
            case 5:
              newMoodIcon = miserMood;
              break;
            default:
             newMoodIcon = peaceMood;
          }
          let aValue = {
            uiCode: 1,
            diaryTime: timeString,
            diaryTitle: newDiaryTitle,
            diaryMood: newMoodIcon,
            diaryBody: newDiaryBody
          };
          resolve(aValue);
        }
      ).catch(
        (error)=> {
          console.log('Saving failed, error' + error.message);
        }
      );
    });
  }
}

