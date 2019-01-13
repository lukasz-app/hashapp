import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';
import { HashView, Button } from '../../components';
import SHA1 from '../../util/sha1';

interface Props {}
interface State {
  text: string;
  textHashed: string;
  hash: string;
}

export default class Hello extends Component<Props, State> {
  state = {
    text: '',
    hash: '',
    textHashed: ''
  };

  hashInput = () => {
    this.setState({ hash: SHA1(this.state.text), textHashed: this.state.text });
  };

  onChangeText = (text: string) => {
    this.setState({ text });
  };

  render() {
    const { hash, text, textHashed } = this.state;
    const hashViewLabel = `SHA1 hash for "${textHashed}"`;
    return (
      <View style={styles.container}>
        <View style={styles.inputRowContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter text to be hashed"
              autoFocus
              multiline
              onChangeText={this.onChangeText}
            />
          </View>
          <Button label="Hash" onPress={this.hashInput} disabled={!text.length} />
        </View>
        {!!hash.length && <HashView hash={hash} label={hashViewLabel} />}
      </View>
    );
  }
}
