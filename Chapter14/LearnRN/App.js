/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Image, View, Text, CameraRoll, TouchableHighlight} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props) 
    this.state = {image: null};
    this.fetchParams = {first: 1};
    this.nextPic = this.nextPic.bind(this);
    this.count = 1;
  }

  componentWillMount() {
    this.fetchParams = {first: 50};
    CameraRoll.getPhotos(this.fetchParams).then(
      (data) => {
        let image = data.edges[0].node.image;
        this.setState({image});
      }
    ).catch(
      (error) => {
        console.log('a error occur while get photos.');
        console.log(error);
      }
    );
  }

  nextPic() {
    this.count = this.count + 1;
    let number = this.count;
    CameraRoll.getPhotos(this.fetchParams).then(
      (data) => {
        let image = data.edges[this.count].node.image;
        this.setState({image});
      }
    ).catch(
      (error) => {
        console.log('a error occur while get photos.');
        console.log(error);
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.nextPic}>
          <Image source={this.state.image} style={styles.imageStyle}/>
        </TouchableHighlight>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  btnStyle: {
    height: 20,
    width: 200,
  },
  imageStyle: {
    width: 300,
    height: 500
  }
})
