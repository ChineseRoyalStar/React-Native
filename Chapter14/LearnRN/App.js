/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Image, View, Text, ScrollView, CameraRoll, Platform} from 'react-native';

let postServerUri = 'http://192.168.199.162:8888/upload';

export default class App extends Component {

  constructor(props) {
    super(props) 
    this.state = {image: null};
    this.fetchParams = {first: 1000};
  }

  componentWillMount() {
    CameraRoll.getPhotos(this.fetchParams).then(
      (data) => {
        let image = null;
        let maxcounter = data.edges.length;
        for(let counter=0; counter < maxcounter; counter++) {
          if( Platform.OS === 'ios') {
            let nameLen = data.edges[counter].node.image.filename.length;
            let extName = data.edges[counter].node.image.filename.substring(nameLen-3);
            if(extName === 'JPG') { //JPG
              image = data.edges[counter].node.image;
              break;
            }
          }else {
              if ( data.edges[counter].node.type === 'image/jpeg') {
                image = data.edges[counter].node.image;
                break;
              }
            }
        }
        if ( image === null) {
          console.log('there is no jpeg file!');
          return;
        }
        if ( Platform.OS === 'iOS') image.filename = 'b.png'//'b.jpg';
        this.setState({image});
        let body = new FormData();
        body.append('photo', {
          uri: image.uri,
          name: image.filename,
          filename: image.filename,
          type: 'image/png'//'image/jpg'
        });
        body.append('Content-Type', 'image/png'); //'image/jpg'
        let aObj = {
          method: 'POST',
          header: {
            "Content-Type": "multipart/form-data"
          },
          body:body
        }
        fetch(postServerUri, aObj).then(
          (result) => {
            console.log(result);
          }
        ).catch(
          (error) => console.log(error)
        );
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
          <Image style={styles.imageStyle} source={this.state.image}/>
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
  imageStyle: {
    width: 300,
    height: 500
  }
})
