  /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppState} from 'react-native';

export default class App extends Component {

  onValueChange(choice, noUse) {
    this.setState({choice});
  }

  componentWillMount() {
    AppState.addEventListener('change', this._handleAppStateChange.bind(this));
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange(newState) {
    console.log('Appstate is:' + newState);
  }

  render(){
    return null;
  }
}

