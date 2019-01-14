import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Images } from '../../global';

interface Props {
  onMorePressed: () => void;
}
interface State {}

export default class Header extends Component<Props, State> {
  render() {
    const { onMorePressed } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>HashApp</Text>
        <TouchableOpacity onPress={onMorePressed}>
          <Image source={Images.more} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}
