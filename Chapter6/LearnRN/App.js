/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Dimensions, Keyboard} from 'react-native';

let totalHeight = Dimensions.get('window').height;

export default class App extends Component {

  componentDidMount() {
    var aref = this.tempfunc.bind(this);
    window.setTimeout(aref, 1);
  }

  tempfunc() {
    this.refs.aTextInputRef.measure(this.getTextInputPosition);
  }

  getTextInputPosition(fx, fy, width, height, px, py) {
    console.log('getTextInputPosition');
    console.log('Component width is:' + width);
    console.log('Component height is: ' + height);
    console.log('X offset to frame: ' + fx);
    console.log('Y offset to frame: ' + fy);
    console.log('X offset to page: ' + px);
    console.log('Y offset to page: ' + py);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{boarderWidth: 1}}>
          <TextInput style={styles.textInputStyle} ref='aTextInputRef' defaultValue='Ajfg你好'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  textInputStyle: {
    width: 200,
    height: 55,
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,
    paddingBottom: 0
  }
});
