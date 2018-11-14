  /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, PickerIOS, View, Text} from 'react-native';

let postServerUri = 'http://192.168.2.105:8888/upload';
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {choice: ''};
    this.options = ['选项一','选项二','选项三','选项四','选项五'];
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(choice, noUse) {
    this.setState({choice});
  }

  render(){
    return (
      <View>
        <PickerIOS selectedValue={this.state.choice} onValueChange={this.onValueChange}>
        {this.options.map((aOption) => <PickerIOS.PickerItemIOS label={aOption} value={aOption} key={aOption}/>)}
        </PickerIOS>
        <Text style={styles.welcome}>你选择了:{this.state.choice}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 30,
  }
});

