/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default class App extends Component {

  render() {
    let imageSource = {
      uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537805686&di=346db4a85138f77b1027869082388183&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.25pp.com%2Fuploadfile%2Fbizhi%2Fipad3%2F2014%2F0610%2F20140610085320240_ipad.jpg',
      // headers: {
      //   Authorization1: 'someAuthToken',
      //   Authorization2: 'someAuthToken'
      // }
    };
    return (
      <View style={styles.container} onLayout={this._onLayout}>
        <Image style={styles.imageStyle} source={imageSource} />
      </View>
    );
  }

  componentWillMount() {

    let imageSource = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537805686&di=346db4a85138f77b1027869082388183&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.25pp.com%2Fuploadfile%2Fbizhi%2Fipad3%2F2014%2F0610%2F20140610085320240_ipad.jpg';
    Image.prefetch(imageSource).then(
      (result)=>{ console.log('prefetch successfully') } //当预下载成功时,返回值时true,不需要做任何处理
    ).catch(
      (error)=> {
        console.log('error when prefetch.');
        console.log(error);
      }
    )
    //this.image1 = require('./girl1.jpg');
  }

  componentDidMount() {

    let imageSource = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537805686&di=346db4a85138f77b1027869082388183&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.25pp.com%2Fuploadfile%2Fbizhi%2Fipad3%2F2014%2F0610%2F20140610085320240_ipad.jpg';
  
    Image.getSize(imageSource, (width, height)=>{
      //正确获取宽和高, 进行相关处理
      console.log(width+' '+height);
    }, (error)=> {
      console.log(error); //取宽、高出错
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    width: 200,
    height:200
  }
});
