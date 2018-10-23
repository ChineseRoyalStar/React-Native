/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Dimensions, PanResponder, View, Image} from 'react-native';

var totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;
let startHeight = totalHeight - totalWidth/2 + 5;
let PixelRatio = require('PixelRatio');
let pixelRatio = PixelRatio.get();
let centerX = 5 + (totalWidth/2-10)/2;
let centerY = startHeight + (totalWidth/2-10)/2;
var unTouchedIcon = require('./cry.png');
var touchedIcon = require('./smile.png');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.watcher = null;
    this.startX = 0;
    this.state = {
      imageIcon: unTouchedIcon,
      width: (totalWidth/2-10)/4,
      height: (totalWidth/2-10)/4,
      left: ((totalWidth/2-10) - ((totalWidth/2-10)/4))/2,
      top: ((totalWidth/2-10) - ((totalWidth/2-10)/4))/2,
      borderRadius: (totalWidth/2-10)/8
    };
    this._onPanResponderGrant = this._onPanResponderGrant.bind(this);
    this._onPanResponderMove = this._onPanResponderMove.bind(this);
    this._onPanResponderEnd = this._onPanResponderEnd.bind(this);
  }

  componentWillMount() {
    this.watcher = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: this._onPanResponderGrant,
      onPanResponderMove: this._onPanResponderMove,
      onPanResponderEnd: this._onPanResponderEnd,
    });
  }

  _onPanResponderGrant(e, gestureState) {
    let distance = this.caculateDistance(gestureState.x0, gestureState.y0);
    if (distance < (totalWidth/2-10)/8) {
      this.dragStart = true;
      this.setState(()=>{
        return {imageIcon: touchedIcon};
      })
    }
  }

  _onPanResponderMove(e, gestureState) {
    if(!this.dragStart) return;
    let distance = this.caculateDistance(gestureState.moveX, gestureState.moveY);
    if (distance < (totalWidth/2-10)/8) return;
    if (distance > (totalWidth/2-10)/2) {

    }
    let left = ((totalWidth/2 - 10) - ((totalWidth/2-10)/4))/2 - distance + (totalWidth/2-10)/8;
    let top = ((totalWidth/2 - 10) - ((totalWidth/2-10)/4))/2 - distance + (totalWidth/2-10)/8;
    let width = 2 * distance;
    let height = 2 * distance;
    let borderRadius = distance;
    this.setState(()=>{
      return {left, top, width, height, borderRadius};
    })
  }

  _onPanResponderEnd(e, gestureState) {
    let imageIcon = unTouchedIcon;
    let width = (totalWidth/2-10)/4;
    let height = (totalWidth/2-10)/4;
    let left = ((totalWidth/2-10) - ((totalWidth/2-10)/4))/2;
    let top = ((totalWidth/2-10) - ((totalWidth/2-10)/4))/2;
    let borderRadius = (totalWidth/2-10)/8;
    this.dragStart = false;
    this.setState(()=>{
      return {imageIcon, left, top, width, height, borderRadius};
    });
  }

  caculateDistance(x,y) {
    return Math.sqrt(Math.pow((x-centerX),2) + Math.pow((y-centerY),2));
  }

  render() {
    return(
      <View style={styles.container}>
      <View style={styles.transparentViewStyle} {...this.watcher.panHandlers}>
          <View style={[styles.shadowViewStyle, {borderRadius: this.state.borderRadius, left: this.state.left, top: this.state.top, width: this.state.width, height: this.state.height}]} />
          <Image style={styles.touchImageStyle} source={this.state.imageIcon} />
      </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  touchImageStyle: {
    width: (totalWidth/2-10)/4,
    height: (totalWidth/2-10)/4,
    borderRadius: (totalWidth/2-10)/8,
    position: 'absolute',
    left: ((totalWidth/2-10) - ((totalWidth/2-10)/4))/2,
    top: ((totalWidth/2-10) - ((totalWidth/2-10)/4))/2,
    backgroundColor: 'grey'
  },
  shadowViewStyle: {
    width: (totalWidth/2-10)/4,
    height: (totalWidth/2-10)/4,
    left: ((totalWidth/2-10) - ((totalWidth/2-10)/4))/2,
    top: ((totalWidth/2-10) - ((totalWidth/2-10)/4))/2,
    backgroundColor: 'blue',
    borderRadius: (totalWidth/2-10)/8,
    position: 'absolute'
  },
  transparentViewStyle: {
    width: totalWidth/2 - 10,
    height: totalWidth/2 - 10,
    backgroundColor: 'transparent',
    left: 5, 
    top: startHeight
  }
});