/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Dimensions, PanResponder, Platform, View} from 'react-native';

var totalWidth = Dimensions.get('window').width;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.watcher = null;
    this.startX = 0;
    this.state = {
      leftPoint: 1
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
    this.startX = gestureState.x0;
  }

  _onPanResponderMove(e, gestureState) {
    let leftPoint;
    if (gestureState.moveX < this.startX) {
      leftPoint = 1;
    }else {
      if (gestureState.moveX > totalWidth - 42 - 48 + this.startX) {
        leftPoint = totalWidth - 42 - 48;
      }
      else {
        leftPoint = gestureState.moveX - this.startX;
      }
    }
    this.setState(()=>{
      return {leftPoint};
    });
  }

  _onPanResponderEnd(e, gestureState) {
    let leftPoint = 1;
    this.setState(()=>{
      return {leftPoint};
    })
  }
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.barViewStyle}>
          <View style={[styles.buttonViewStyle, {left: this.state.leftPoint}]} {...this.watcher.panHandlers}/>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  barViewStyle: {
    width: totalWidth - 40,
    height: 50,
    backgroundColor: 'grey',
    borderRadius: 25,
    left: 20,
    top: 50,
    flexDirection: 'row'
  },
  container: {
    flex: 1
  },
  buttonViewStyle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'white',
    left: 1,
    top: 1
  }
});