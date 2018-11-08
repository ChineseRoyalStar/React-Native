/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, TouchableOpacity, View, WebView, StatusBar} from 'react-native';

export default class App extends Component {

  render(){
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <WebView automaticallyAdjustContentInsets={false} style={styles.webView} source={require('./A.html')} javaScriptEnabled={true} domStorageEnabled={true} startInLoadingState={true}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  },
  webView: {
    backgroundColor: 'white',
    height: 350,
  }
});

