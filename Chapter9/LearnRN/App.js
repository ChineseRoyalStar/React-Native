/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, ProgressViewIOS} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {progress: 0};
    this.progressTimer = null;
    this.updateProgress = this.updateProgress.bind(this);
  }
  componentDidMount() {
    this.updateProgress();
  }
  updateProgress() {
    var progress = (this.state.progress + 0.0025) % 1;
    this.setState({progress});
    this.progressTimer = window.requestAnimationFrame(() => this.updateProgress());
  }
  componentWillUnmount() {
    window.cancelAnimationFrame(this.progressTimer);
  }
  render() {
    return(
      <ProgressViewIOS style={{top: 100}} progress={this.state.progress} progressTintColor={'red'}/>
    );
  }
}