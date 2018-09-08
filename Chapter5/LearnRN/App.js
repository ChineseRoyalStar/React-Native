/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class App extends Component {
 
  constructor(props) {
    super(props);
    this._onTouchMove = this._onTouchMove.bind(this);
    this._onTouchStart = this._onTouchStart.bind(this);
    this._onTouchEnd = this._onTouchEnd.bind(this);
  }

  _onTouchMove(event) {
    console.log("touch move: " + event.thisStamp + ', X:' + event.nativeEvent.locationX + ', Y' + event.nativeEvent.locationY);
  }

  _onTouchStart(event) {
    console.log("touch start: " + event.thisStamp + ', X:' + event.nativeEvent.locationX + ', Y' + event.nativeEvent.locationY);
  }

  _onTouchEnd(event) {
    console.log("touch end: " + event.thisStamp + ', X:' + event.nativeEvent.locationX + ', Y' + event.nativeEvent.locationY);
  }

  render() {
    return (
      <View style={styles.container} onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove} onTouchEnd={this.onTouchEnd}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCEF',
  }
});
