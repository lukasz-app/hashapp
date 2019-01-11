import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface Props {
  hash: string;
  label: string;
}

export default class HashView extends Component<Props> {
  state = {};

  render() {
    const { hash, label } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.hashContainer}>
          <Text style={styles.hash}>{hash}</Text>
        </View>
      </View>
    );
  }
}
