/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Image, View, Text, ScrollView, CameraRoll, TouchableHighlight} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props) 
    this.state = {images: []};
    this.fetchParams = {first: 30};
  }

  componentWillMount() {
    CameraRoll.getPhotos(this.fetchParams).then(
      (data) => {
        const assets = data.edges;
        const images = assets.map((asset) => asset.node.image);
        this.setState({images});
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
      <ScrollView style={styles.container}>
        <View style={styles.imageGrid}>
          {this.state.images.map((image) => 
            <Image style={styles.image} source={{uri: image.uri}} key={image.uri} />)}
        </View>
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  imageGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  image: {
    width: 100,
    height: 100,
    margin: 10
  }
})
