/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Dimensions, Keyboard} from 'react-native';

let totalHeight = Dimensions.get('window').height;

export default class App extends Component {

  constructor(props) {
    super(props);
    this.keyboardDidShowListener = null;
    this.keyboardDidHideListener = null;
    this.state = {KeyboardShown: false};
    this.onDismissKeyboard = this.onDismissKeyboard.bind(this);
  }

  keyboardWillShowHandler(event) {
    this.setState({KeyboardShown: true});
  }

  keyboardWillHideHandler(event) {
    this.setState({KeyboardShown: false});
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardWillShowHandler.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardWillHideHandler.bind(this));
  }

  componentWillUnmount() {
    if (this.keyboardDidShowListener != null) {
      this.keyboardDidShowListener.remove();
    }
    if (this.keyboardDidHideListener != null) {
      this.keyboardDidHideListener.remove();
    }
  }
  onDismissKeyboard() {
    Keyboard.dismiss();
    console.log('is it get focus?' + this.refs.bottomInput.isFocused());
  }

  render() {
    return (
      <View style={[styles.container, this.state.KeyboardShown && styles.bumpedContainer]}>
        <Text style={styles.buttonStyle} onPress={this.onDismissKeyboard}> Dimiss Keyboard </Text>
        <TextInput style={styles.textInputStyles} ref='bottomInput' onFocus={() => this.setState({bumpedUp: 0})}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bumpedContainer: {
    marginBottom: 210,
    marginTop: -210
  },
  buttonStyle: {
    top: 250,
    fontSize: 30,
    backgroundColor: 'grey'
  },
  textInputStyles: {
    position: 'absolute',
    top: totalHeight - 80,
    borderWidth: 1,
    borderColor: 'red',
    left: 20,
    width: 200,
    height: 30,
    fontSize: 20,
    backgroundColor: 'grey',
  }
});
