import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';
import { HashView, Button } from '../../components';
import SHA1 from '../../util/sha1';
import SHA256 from '../../util/sha256';

interface Props {}
interface State {
  text: string;
  textHashed: string;
  hashSHA1: string;
  hashSHA256: string;
}

export default class Hello extends Component<Props, State> {
  state = {
    text: '',
    hashSHA1: '',
    hashSHA256: '',
    textHashed: ''
  };

  hashInput = () => {
    this.setState({
      hashSHA1: SHA1(this.state.text),
      hashSHA256: SHA256(this.state.text),
      textHashed: this.state.text
    });
  };

  onChangeText = (text: string) => {
    this.setState({ text });
  };

  render() {
    const { hashSHA1, hashSHA256, text, textHashed } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.inputRowContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter text to be hashed"
              autoFocus
              multiline
              onChangeText={this.onChangeText}
              autoCapitalize="none"
            />
          </View>
          <Button label="Hash" onPress={this.hashInput} disabled={!text.length} />
        </View>
        {!!hashSHA1.length && <HashView hash={hashSHA1} label={`SHA1 hash for "${textHashed}"`} />}
        {!!hashSHA256.length && (
          <HashView hash={hashSHA256} label={`SHA256 hash for "${textHashed}"`} />
        )}
      </View>
    );
  }
}
