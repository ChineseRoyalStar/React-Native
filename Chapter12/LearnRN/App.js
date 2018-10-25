/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Dimensions, PanResponder, View, Text} from 'react-native';

export default class App extends Component {
 
  constructor(props) {
    super(props);
    this.ws = null;
    this.sendPressed = this.sendPressed.bind(this);
  }

  componentWillMount() {
    this.ws = new WebSocket('ws://192.168.199.162:8281');
    this.ws.onopen = ()=> {
      console.log('on open is called.');
      console.log('the ws ready state in onpen is:' + this.ws.readyState);
    };
    this.ws.onmessage = (msg)=> {
      console.log(msg);
      console.log('on message is called, message:' + msg.data);
    };
    this.ws.onclose = ()=> {
      console.log('Websocket connection closed.');
    };
    this.ws.onerror = (e)=> {
      console.log(e);
    };
  }

  componentWillUnmount() {
    this.ws.close(1000, "Closing normally");
  }
  
  sendPressed() {
    console.log('message click');
    console.log(this.ws.readyState);
    this.ws.send('something');
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={this.sendPressed}>Press to send message</Text>
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
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'grey',
  }
});

