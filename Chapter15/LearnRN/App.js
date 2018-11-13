  /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Picker, View, Text} from 'react-native';

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
      <View style={styles.container}>
        <Picker sytle={styles.picker} selectedValue={this.state.choice} onValueChange={this.onValueChange} itemStyle={styles.pickerItemStyle}>
        {this.options.map((aOption) => <Picker.Item label={aOption} value={aOption} key={aOption}/>)}
        </Picker>
        <Text style={styles.textStyle}>{'\r\n\r\n\r\n\r\n\r\n'}你选择了:{this.state.choice}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  picker: {
    width: 200,
    height: 600,
  },  
  pickerItemStyle: {
    width: 100,
    height: 600,
  }, 
  textStyle: {
    width: 200,
    height: 50,
  }
});

