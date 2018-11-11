/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, DatePickerIOS, View} from 'react-native';

let postServerUri = 'http://192.168.2.105:8888/upload';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date1: new Date(),
      date2: new Date(),
      date3: new Date(),
    }
    this.timeZoneOffsetInHours = 8 * 60;
    console.log(this.timeZoneOffsetInHours);
    this.onDateChange1 = this.onDateChange1.bind(this);
    this.onDateChange2 = this.onDateChange2.bind(this);
    this.onDateChange3 = this.onDateChange3.bind(this);
  }

  onDateChange1(date1) {
    console.log("event1"+date1);
    this.setState({date1});
  }

  onDateChange2(date2) {
    console.log("event1"+date2);
    this.setState({date2});
  }

  onDateChange3(date3) {
    console.log("event1"+date3);
    this.setState({date3});
  }

  render(){
    return (
      <View style={styles.container}>
       <DatePickerIOS date={this.state.date1} mode="datetime" timeZoneOffsetInMinutes={this.timeZoneOffsetInHours} onDateChange={this.onDateChange1} />
       <DatePickerIOS date={this.state.date2} mode="date" onDateChange={this.onDateChange2} />
       <DatePickerIOS date={this.state.date3} mode="time" onDateChange={this.onDateChange3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey'
  },
  webView: {
    backgroundColor: 'white',
    height: 350,
  }
});

