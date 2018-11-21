  /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, NativeModules, requireNativeComponent} from 'react-native';
import PropTypes from 'prop-types'

var {ScaleToFill, ScaleAspectFit, ScaleAspectFill} = NativeModules.RNFLAnimatedImageManager;

var RNFLAnimatedImage = requireNativeComponent('RNFLAnimatedImage', FLAnimatedImage);

var MODES = {
  'stretch': ScaleToFill,
  'contain': ScaleAspectFit,
  'cover': ScaleAspectFill
}

export default class FLAnimatedImage extends Component {

  render() {
    var contentMode = MODES[this.props.resizeMode] || MODES.stretch;
    return (
    <RNFLAnimatedImage
      {...this.props}
      contentMode={contentMode} />
    );
  }
}

FLAnimatedImage.propTypes = {
  contentMode: PropTypes.number,
  src: PropTypes.string,
  resizeMode: PropTypes.string,
  onFrameChange: PropTypes.func,
  ...View.propTypes
};

