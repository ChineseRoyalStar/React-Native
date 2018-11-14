  /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Slider, View, Text} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {aValue: 0};
    this.onValueChange = this.onValueChange.bind(this);
    this.onSlidingComplete = this.onSlidingComplete.bind(this);
  }

  componentDidMount() {
  }

  onValueChange(aValue) {
    this.setState({aValue});
  }

  onSlidingComplete(aValue) {
    this.setState({aValue});
    console.log('complete, value:' + aValue);
  }

  componentWillMount() {
    window.cancelAnimationFrame(this.progressTimer);
  }

  render(){
    return (
      <View>
        <Slider style={{margin:30}} disabled={false} onValueChange={this.onValueChange} onSlidingComplete={this.onSlidingComplete}/>
        <Text>{'    '}你选择了{this.state.aValue}</Text>
      </View>
    );
  }
}

