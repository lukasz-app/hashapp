import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from './styles';
import { HashView } from '../../components';

interface Props {}
interface State {
  text: string;
  hash: string;
}

export default class Hello extends Component<Props, State> {
  state = {
    text: '',
    hash: ''
  };

  hashInput = () => {};

  onChangeText = (text: string) => {
    this.setState({ text, hash: text });
  };

  render() {
    const { hash } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.inputRowContainer}>
          <TextInput
            placeholder="Enter text to be hashed"
            autoFocus
            multiline
            returnKeyType="done"
            style={styles.input}
            numberOfLines={2}
            onChangeText={this.onChangeText}
          />
          <Button title="Hash" onPress={this.hashInput} />
        </View>
        <HashView hash={hash} label="Some hash algorithm" />
      </View>
    );
  }
}
