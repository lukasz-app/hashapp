import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Clipboard } from 'react-native';
import styles from './styles';
import { Images } from '../../global';

interface Props {
  hash: string;
  label: string;
}

export default class HashView extends Component<Props> {
  state = {};

  copyHash = () => {
    const { hash } = this.props;
    Clipboard.setString(hash);
  };

  render() {
    const { hash, label } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.rowLabelContiner}>
          <Text style={styles.label}>{label}</Text>
          <TouchableOpacity onPress={this.copyHash}>
            <Image source={Images.copy} style={styles.copyIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.hashContainer}>
          <Text style={styles.hash}>{hash}</Text>
        </View>
      </View>
    );
  }
}
