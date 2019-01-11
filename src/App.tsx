import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { AppStyles } from './global';
import { Home } from './containers';

export default class App extends Component {
  render() {
    return (
      <View style={AppStyles.root}>
        <Home />
      </View>
    );
  }
}
