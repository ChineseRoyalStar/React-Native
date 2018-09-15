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
    this.state = {bigButtonPointerEvents:null};
    this.onBigButtonPressed = this.onBigButtonPressed.bind(this);
    this.onSmallButtonPressed = this.onSmallButtonPressed.bind(this);
  }

  onBigButtonPressed() {
    console.log('Big button pressed');
  }

  onSmallButtonPressed() {
    if (this.state.bigButtonPointerEvents === null) {
      console.log('big button will not reponde.');
      this.setState({bigButtonPointerEvents:'none'});
      return;
    }
    console.log('big button will response.');
    this.setState({bigButtonPointerEvents:null});
  }

  render() {
    return (
      <View style={styles.container} onLayout={this._onLayout}>
        <Text style={styles.sButtonStyle} onPress={this.onSmallButtonPressed}>
          Small button
        </Text>
        <Text style={styles.bButtonStyle} onPress={this.onBigButtonPressed} pointerEvents={this.state.bigButtonPointerEvents}>
          Big button
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sButtonStyle: {
    fontSize:20, left:130, top:50, width:150, height:35, backgroundColor:'grey'
  },
  bButtonStyle: {
    fontSize:20, left:130, top:130, width:150, height:70, backgroundColor:'grey'
  }
});
