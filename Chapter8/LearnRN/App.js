/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, ScrollView, RefreshControl, View, Text} from 'react-native';

import DiaryList from './DiaryList';
import DiaryReader from './DiaryReader';
import DiaryWriter from './DiaryWriter';
import DataHandler from './DataHandler';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.onSrollBeginDrag = this._onSrollBeginDrag.bind(this);
    this.onSrollEndDrag = this._onScrollEndDrag.bind(this);
    this.onMomentumScrollBegin = this._onMomentumScrollBegin.bind(this);
    this.onMomentumScrollEnd = this._onMomentumScrollEnd.bind(this);
    this.onRefresh = this._onRefresh.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  _onSrollBeginDrag() {
    console.log('Begin Drag');
  }

  _onScrollEndDrag() {
    console.log('End Drag');
  }

  _onMomentumScrollBegin() {
    console.log('_onMonmentumScrollBegin');
  }

  _onMomentumScrollEnd() {
    console.log('_onMomentumScrollEnd');
  }

  _onRefresh() {
    console.log('_onRefresh is called');
  }

  onScroll(aEvent) {
    console.log('onScroll is called');
    console.log(aEvent.nativeEvent);
  }

  render() {
    return(
      <View style={styles.container}>
      <ScrollView style={styles.scrollView} 
        onMomentumScrollBegin={this._onMomentumScrollBegin} 
        onMomentumScrollEnd={this._onMomentumScrollEnd} 
        onSrollBeginDrag={this._onSrollBeginDrag} 
        onScroll={this.onScroll} 
        refreshControl={
          <RefreshControl refreshing={true} 
            onRefresh={this._onRefresh} 
            tintColor='#ff0000' 
            title='Loading...' 
            colors={['#ff0000','#00ff00','#0000ff']} 
            progressBackgroundColor='#ffff000'/>
          }
          onScrollEndDrag={this._onScrollEndDrag}>
        <View style={styles.aView} />
          <ScrollView horizontal={true} style={styles.midScrollView}>
            <View style={styles.bView} />
            <View styls={styles.bView} />
          </ScrollView>
        <View style={styles.aView} />
      </ScrollView>
    </View>
    );
  }
}

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'grey'
  },
  scrollView: {
    backgroundColor: '#CCCCCC'
  },
  midScrollView: {
    height: 150,
    borderWidth: 1,
    borderColor: 'black'
  },
  aView: {
    margin: 1,
    padding: 0,
    backgroundColor: '#eaeaea',
    height: 375,
  },
  bView: {
    flex: 1,
    height: 148, 
    width: 300,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'grey',
  }
})