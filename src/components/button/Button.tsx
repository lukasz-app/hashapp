import React, { StatelessComponent } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';

interface Props {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

const Button: StatelessComponent<Props> = ({ label, onPress, disabled }) => (
  <TouchableOpacity
    style={[styles.container, disabled && styles.containerInactive]}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={[styles.label]}>{label}</Text>
  </TouchableOpacity>
);

export default Button;
