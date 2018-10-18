/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, Switch} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {aSwitch: true};
    this.onSwitchChanged = this.onSwitchChanged.bind(this);
  }
  onSwitchChanged() {
    this.setState(()=>{
      return ({aSwitch: !this.state.aSwitch});
    });
  }
  render() {
    return(
      <View>
        <Switch style={{margin: 20}} onValueChange={this.onSwitchChanged} value={this.state.aSwitch} />
        <Switch style={{margin: 20}} onValueChange={this.onSwitchChanged} value={!this.state.aSwitch} />
      </View>
    );
  }
}