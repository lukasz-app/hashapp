import React, { Component } from 'react';
import { Image, View, Text, Switch } from 'react-native';
import styles from './styles';

interface Props {
  expanded: boolean;
  hashOnType: boolean;
  hashOnTypeChanged: () => void;
}
interface State {}

export default class Options extends Component<Props, State> {
  render() {
    const { expanded, hashOnType, hashOnTypeChanged } = this.props;
    if (!expanded) {
      return null;
    }
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Text style={styles.label}>Hash on type</Text>
          <Switch onValueChange={hashOnTypeChanged} value={hashOnType} />
        </View>
      </View>
    );
  }
}
