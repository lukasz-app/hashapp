import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { AppStyles } from './global';

export default class App extends Component {
  render() {
    return (
      <View style={[AppStyles.container]}>
        <Text>Hello world!</Text>
        <Text>This is hashapp</Text>
      </View>
    );
  }
}
