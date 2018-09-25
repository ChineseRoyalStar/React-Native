/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Dimensions, Clipboard} from 'react-native';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {textFromClipboard: ''};
    this.copyToClipboard = this.copyToClipboard.bind(this);
    this.pasteFromClipboard = this.pasteFromClipboard.bind(this);
  }

  pasteFromClipboard() {
    Clipboard.getString().then(
      (textFromClipboard)=>{
        this.setState({textFromClipboard});
      }
    ).catch(
      (error)=>{
        console.log('pasteFromClipboard error');
        console.log(error);
      }
    );
  }

  copyToClipboard() {
    Clipboard.setString('ABCD 你好');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.state.textFromClipboard}</Text>
        <Text style={styles.instructions} onPress={this.copyToClipboard}>Press to Copy something to Clipboard.</Text>
        <Text style={styles.instructions} onPress={this.pasteFromClipboard}>Press to Paste.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 15,
    backgroundColor: 'grey',
    fontSize: 30
  }
});
