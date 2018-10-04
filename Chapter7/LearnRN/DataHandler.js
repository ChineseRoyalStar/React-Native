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

export default class DataHander {  

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
                DataHander.bubleSortDiaryList();
                if (resultsLength > 0) {
                  resultsLength--;
                  DataHander.listIndex = resultsLength;
                  let newMoodIcon;
                  switch(DataHander.realDairyList[resultsLength].mood) {
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
                  let newtitle = DataHander.realDiaryList[resultsLength].title;
                  let newbody = DataHander.realDiaryList[resultsLength].body;
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
    
  }
}

