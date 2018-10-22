/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Dimensions, PanResponder, ProgressViewIOS, Text, ProgressBarAndroid, Platform, View} from 'react-native';

var totalWidth = Dimensions.get('window').width;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.watcher = null;
    this.state = {progress: 0};
    this._onPanResponderGrant = this._onPanResponderGrant.bind(this);
    this._onPanResponderMove = this._onPanResponderMove.bind(this);
  }

  componentWillMount() {
    this.watcher = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: this._onPanResponderGrant,
      onPanResponderMove: this._onPanResponderMove,
    });
  }

  _onPanResponderGrant(e, gestureState) {
    let touchPointX = gestureState.x0;
    let progress;
    if (touchPointX < 20) progress = 0;
    else {
      if (touchPointX > (totalWidth-40)) progress = 1;
      else progress = (touchPointX - 20) / (totalWidth - 40);
    }
    this.setState({progress});
  }

  _onPanResponderMove(e, gestureState) {
    let touchPointX = gestureState.moveX;
    let progress;
    if (touchPointX < 20) progress = 0;
    else {
      if (touchPointX > (totalWidth-40)) progress = 1;
      else progress = (touchPointX - 20) / (totalWidth - 40);
    }
    this.setState({progress});
  }

  render() {
    return(
      <View style={styles.container}>
        {
          (
            (Platform.OS === 'ios') ? 
            (
              <ProgressViewIOS style={styles.ProgressViewStyle} progress={this.state.progress}/>
            ):(
              <ProgressBarAndroid style={styles.ProgressViewStyle} styleAttr="Horizontal" indeterminate={false} progress={this.state.progress} />
            )
          )
        }
        <Text style={styles.textStyle}>你选择了{Math.round(this.state.progress*100)}%</Text>
        <View style={styles.touchViewStyle} {...this.watcher.panHandlers} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  ProgressViewStyle: {
    width: totalWidth - 40,
    left: 20,
    top: 50,
  },
  container: {
    flex: 1
  },
  touchViewStyle: {
    width: totalWidth - 20,
    height: 40,
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 10,
    top: 32,
  },
  textStyle: {
    fontSize: 30,
    left: 20,
    top: 70,
  }
});