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

  static realDairyList = [];
  static listIndex = 0;
  static getAllTheDiary() {
    return new Promise(
      function(resolve, reject) {
        AsyncStorage.getAllKeys().then(
          (keys) => {
            if(keys.length === 0) {
              let returnValue = {
                diaryTime: '没有历史日记',
                diaryTitle: '没有历史日记',
                diaryBody: ''
              }
              resolve(returnValue);
              console.log('注意, rewove后的语句还会被执行, 因此resolve后如果有代码, 结束处理必须要跟return语句!');
              return;
            }
            AsyncStorage.multiGet(Keys).then(
              (results)=>{
                let resultsLength = results.length;
                for(let counter = 0;counter < resultsLength; counter++) {
                  DataHandler.realDairyList[counter] = JSON.parse(results[counter][1]);
                }
                DataHandler.bubleSortDiaryList();
                if (resultsLength > 0) {
                  resultsLength--;
                  DataHandler.listIndex = resultsLength;
                  let newMoodIcon;
                  switch(DataHandler.realDairyList[resultsLength].mood) {
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
                      newMoodIcon = miseryMood;
                      break;
                    default: 
                      newMoodIcon = peaceMood;
                      break;
                  }
                  let newtitle = DataHandler.realDiaryList[resultsLength].title;
                  let newbody = DataHandler.realDiaryList[resultsLength].body;
                  let ctime =  new Date(DataHandler.realDairyList[resultsLenght].time);
                  let timeString = '' + ctime.getFullYear + '年' + (ctime.getMonth() + 1) + '月' + ctime.getDate() + '日 星期' + (ctime.getDay() + 1) + ' ' + ctime.getHours() + ':' + ctime.getMinutes();
                  let rValue = {
                    diaryMood: newMoodIcon,
                    diaryTime: timeString,
                    diaryTitle: newtitle,
                    diaryBody: newbody
                  }
                  resolve(rValue);
                }else {
                  let returnValue = {
                    diaryTime: '没有历史日记',
                    diaryTitle: '没有历史日记',
                    diaryBody: ''
                  }
                  resolve(returnValue);
                }
              }
            ).catch(
              (error)=> {
                console.log(error);
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
      for(let j = 0; j < DataHandler.realDairyList.length-i-1; j++) {
        if (DataHandler.realDairyList[j].index > DataHandler.realDairyList[j+1].index) {
          tempObj = DataHandler.realDairyList[j];
          DataHandler.realDairyList[j] = DataHandler.realDairyList[j+1];
          DataHandler.realDairyList[j+1] = tempObj;
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
    let newTitle = DataHandler.realDairyList[resultsLength].title;
    let newBody = DataHandler.realDairyList[resultsLength].body;
    let ctime = new Date(DataHandler.realDiaryList[resultsLenght].time);
    let timeString = '' + ctime.getFullYear + '年' + (ctime.getMonth() + 1) + '月' + ctime.getDate() + '日 星期' + (ctime.getDay() + 1) + ' ' + ctime.getHours() + ':' + ctime.getMinutes();
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
    let newTitle = DataHandler.realDairyList[resultsLength].title;
    let newBody = DataHandler.realDairyList[resultsLength].body;
    let ctime = new Date(DataHandler.realDiaryList[resultsLength].time);
    let timeString = '' + ctime.getFullYear + '年' + (ctime.getMonth() + 1) + '月' + ctime.getDate() + '日 星期' + (ctime.getDay() + 1) + ' ' + ctime.getHours() + ':' + ctime.getMinutes();
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
      let timeString = '' + currentTime.getFullYear + '年' + (currentTime.getMonth() + 1) + '月' + currentTime.getDate() + '日 星期' + (currentTime.getDay() + 1) + ' ' + currentTime.getHours() + ':' + currentTime.getMinutes();
      let aDiary = Object();
      aDiary.title = newDiaryTitle;
      aDiary.body = newDiaryBody;
      aDiary.mood = newDiaryMood;
      aDiary.time = currentTime;
      aDiary.sectionID = ' ' + currentTime.getFullYear() + ' 年 ' + (currentTime.getMonth() + 1) + '月';
      aDiary.index = Date.parse(currentTime);
      AsyncStorage.setItem('' + aDiary.index, JSON.stringify(aDiary)).then(
        ()=> {
          let totalLength = DataHandler.realDairyList.length;
          DataHandler.realDairyList[totalLength] = aDiary;
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

