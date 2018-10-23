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
    this.startFromLeft = true;
    this.moveNeedhandle = false;
    this.state = {
      leftViewWidth: 0,
      rightViewWidth: totalWidth-40,
      leftViewColor: 'grey',
      rightViewColor: 'grey'
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
    let touchPointX = gestureState.x0;
    if (touchPointX < 20) return;
    if (touchPointX > totalWidth - 20) return;
    if ((touchPointX > 90) && (touchPointX < (totalWidth - 90))) return;

    this.moveNeedhandle = true;
    if (touchPointX < 90) {
      this.startFromLeft = true;
      let leftViewWidth = touchPointX - 20;
      let rightViewWidth = totalWidth - 40 - leftViewWidth;
      let leftViewColor = 'green';
      this.setState({leftViewColor, leftViewWidth, rightViewWidth});
    }

    this.startFromLeft = false;
    let rightViewWidth = totalWidth - touchPointX - 20;
    let leftViewWidth = totalWidth - 40 - rightViewWidth;
    let rightViewColor = 'red';
    this.setState({rightViewColor, leftViewWidth, rightViewWidth});
  }

  _onPanResponderMove(e, gestureState) {
    if (!this.moveNeedhandle) return;
    let touchPointX = gestureState.moveX;
    if(this.startFromLeft) {
      let leftViewWidth = touchPointX - 20;
      let rightViewWidth = totalWidth - 40 - leftViewWidth;
      let leftViewColor = 'green';
      this.setState({leftViewColor, leftViewWidth, rightViewWidth});
      return;
    }else {
      let rightViewWidth = totalWidth - touchPointX - 20;
      let leftViewWidth = totalWidth - 40 - rightViewWidth;
      let rightViewColor = 'red';
      this.setState({rightViewColor, leftViewWidth, rightViewWidth});
      return;
    }
  }

  _onPanResponderEnd(e, gestureState) {
    this.moveNeedhandle = false;
    this.setState({rightViewColor: 'grey', leftViewColor: 'grey', leftViewWidth: 0, rightViewWidth: totalWidth - 40})
  }
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.barViewStyle} {...this.watcher.panHandlers} >
          <View style={[styles.setHeightStyle, {width: this.state.leftViewWidth, backgroundColor: this.state.leftViewColor}]}/>
          <View style={[styles.setHeightStyle, {width: this.state.rightViewWidth, backgroundColor: this.state.rightViewColor}]}/>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  barViewStyle: {
    width: totalWidth - 40,
    height: 50,
    left: 20,
    top: 50,
    flexDirection: 'row'
  },
  container: {
    flex: 1
  },
  setHeightStyle: {
    height: 50
  }
});