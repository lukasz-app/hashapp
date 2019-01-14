import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { AppStyles } from './global';
import { Home } from './containers';
import { Header, Options } from './components';

interface State {
  optionsExpanded: boolean;
  hashOnType: boolean;
}

export default class App extends Component<{}, State> {
  state = {
    optionsExpanded: false,
    hashOnType: false
  };

  onMorePressed = () => {
    this.setState(({ optionsExpanded }) => ({ optionsExpanded: !optionsExpanded }));
  };

  hashOnTypeChanged = () => {
    this.setState(({ hashOnType }) => ({ hashOnType: !hashOnType }));
  };

  render() {
    const { optionsExpanded, hashOnType } = this.state;
    return (
      <View style={AppStyles.root}>
        <StatusBar translucent barStyle="light-content" />
        <Header onMorePressed={this.onMorePressed} />
        <Options
          expanded={optionsExpanded}
          hashOnType={hashOnType}
          hashOnTypeChanged={this.hashOnTypeChanged}
        />
        <Home hashOnType={hashOnType} />
      </View>
    );
  }
}
