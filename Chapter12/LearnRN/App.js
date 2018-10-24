/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Dimensions, PanResponder, View, Image} from 'react-native';

export default class App extends Component {
 
  componentWillMount() {

    let REQUEST_URL = 'https://www.sojson.com/open/api/lunar/json.shtml';
    let map = {
      method: 'GET'
    };

    let privateHeaders = {
      'Private-header1':'value1',
      'Private-header2':'value2',
      'Content-Type':"text/plain",
      'User-Agent':'textAgent'
    }
    map.headers = privateHeaders;
    map.follow = 20;
    map.timeout = 0;
    map.size = 0;
    fetch(REQUEST_URL).then(
      (result) => {
        console.log(result.url);
        console.log(result.ok);
        console.log(result.status);
        console.log(result.statusText);
        result.json().then(
          (obj)=>{
            console.log('the response body after json.');
            console.log(obj);
          }
        ).catch(
          (error)=>{
            console.log('a error occour while parse response body.');
            console.log(error);
          }
        )
      }
    ).catch((error)=> {
      console.log('error:'+error);
    })
  }
  render(){
    return null;
  }
}

