/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Dimensions, Clipboard} from 'react-native';

let constantData = require('./data/SimpleSample.json');

export default class App extends Component {

  constructor(props) {
    super(props);
    console.log("constantData's type:" + typeof(constantData));
    console.log("empolyee's type:" + typeof(constantData.employees));
    console.log("empolyee's length:" + constantData.employees.length);
    console.log("No.1's givenName:" + constantData.employees[0].givenName);
    console.log("No.1's salary:" + constantData.employees[0].salary);
    console.log("Type of No.1's salary:" + typeof(constantData));
  }

  render() {
    return (
      <View style={styles.container}></View>
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
});
