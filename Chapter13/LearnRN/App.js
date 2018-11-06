/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, TouchableOpacity, View, WebView, StatusBar} from 'react-native';

export default class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      source: {
        uri: 'http://news.sina.com.cn'
      }
    };
    
    this.status = 'No Page Loaded',
    this.backButtonEnabled = false,
    this.forwardButtonEnabled = false,
    this.inputURL = '';
    this.onNavigationStateChange = this.onNavigationStateChange.bind(this);
    this.goBack = this.goBack.bind(this);
    this.goForward = this.goForward.bind(this);
    this.pressGoButton = this.pressGoButton.bind(this);
  }

  onNavigationStateChange(navState) {
    this.setState({
      backButtonEnabled: navState.canGoBack,
      forwardButtonEnabled: navState.canGoForward,
      status: navState.title
    });
  }

  goBack() {
    this.refs.webViewRef.goBack();
  }

  goForward() {
    this.refs.webViewRef.goForward();
  }

  pressGoButton() {
    var uri = this.inputURL.toLowerCase();
    if (uri === this.state.source.uri) {
      this.refs.webViewRef.reload();
    }
    else {
      let source = {};
      source.uri = uri;
      this.setState({source});
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.addressBarRow}>
          <TouchableOpacity onPress={this.goBack} style={this.state.backButtonEnabled?styles.navButton:styles.disabledButton}>
            <Text>{'<'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goForward} style={this.state.forwardButtonEnabled?styles.navButton:styles.disabledButton}>
            <Text>{'>'}</Text>
          </TouchableOpacity>
          <TextInput ref='urlInputRef' autoCapitalize="none" defaultValue={this.state.uri} onSubmitEditing={this.pressGoButton} onChangeText={(newText) => {this.inputURL=newText}} clearButtonMode='while-editing' style={styles.addressBarTextInput}/>
          <TouchableOpacity onPress={this.pressGoButton}>
            <View style={styles.goButton}>
              <Text>
                Go!
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <WebView ref='webViewRef' automaticallyAdjustContentInsets={false} style={styles.webView} source={this.state.source} javaScriptEnabled={true} domStorageEnabled={true} onNavigationStateChange={this.onNavigationStateChange} startInLoadingState={true}/>
        <View style={styles.StatusBar}>
          <Text style={styles.statbarText}>{this.state.status}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  },
  addressBarRow: {
    flexDirection: 'row',
    padding: 8,
  },
  webView: {
    backgroundColor: 'white',
    height: 350,
  },
  addressBarTextInput: {
    backgroundColor: 'white',
    borderColor: 'transparent',
    borderRadius: 3,
    borderWidth: 1,
    height: 24,
    paddingLeft: 10,
    paddingTop: 3,
    paddingBottom: 3,
    flex: 1,
    fontSize: 14,
  },
  navButton: {
    width: 20,
    padding: 3,
    marginRight: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: 'transparent',
    borderRadius: 3,
  },
  disabledButton: {
    width: 20,
    padding: 3,
    marginRight: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderColor: 'transparent',
    borderRadius: 3,
  },
  goButton: {
    height: 24,
    padding: 3,
    marginLeft: 8,
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'transparent',
    borderRadius: 3,
    alignSelf: 'stretch',
  },
  statusBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    height: 22,
  },
  statusBarText: {
    color: 'white',
    fontSize: 13,
  }
});

