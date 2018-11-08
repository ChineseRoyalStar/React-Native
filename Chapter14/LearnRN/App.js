/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, CameraRoll} from 'react-native';

export default class App extends Component {

  componentWillMount() {
    this.fetchParams = {first: 50};
    CameraRoll.getPhotos(this.fetchParams).then(
      (data) => {
        this.getPhotosResults(data)
      }
    ).catch(
      (error) => {
        console.log('a error occur while get photos.');
        console.log(error);
      }
    );
  }

  logError(error) {
    console.log("error:" + error);
  }

  getPhotosResults(data) {
    var assets = data.edges;
    let len = assets.length;
    let asset;
    for(let i=0; i<len; i++) {
      asset = assets[i].node;
    }
    console.log(asset);
    if (!data.page_info.has_next_page) {
      console.log('all the photo info is got.');
      return;
    }
    this.fetchParams = {fisrt:50, after:data.page_info.end_cursor};
    console.log('get next 50 photos.');
    CameraRoll.getPhotos(this.fetchParams).then(
      (data) => {
        this.getPhotosResults(data);
      }
    ).catch(
      (error) => {
        console.log('a error occur while get photos.');
        console.log(error);
      }
    );
  }

  render(){
    return null;
  }
}
