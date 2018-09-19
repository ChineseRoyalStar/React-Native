/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default class App extends Component {

  componentWillMount() {
    this.image1 = require('./girl.png');
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.imageStyle} resizeMode={'cover'} source={this.image1} />
        <Image style={styles.imageStyle} resizeMode={'contain'} source={this.image1} />
        <Image style={styles.imageStyle} resizeMode={'stretch'} source={this.image1} />
        <Image style={styles.imageStyle} resizeMode={'center'} source={this.image1} />
        <Image style={styles.imageStyle} resizeMode={'repeat'} source={this.image1} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'grey',
  },
  imageStyle: {
    margin: 2, 
    backgroundColor: 'white',
    width: 100,
    height: 100
  }
});
