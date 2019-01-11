import { StyleSheet } from 'react-native';
import { AppStyles } from '../../global';

export default StyleSheet.create({
  container: {
    ...AppStyles.screenContainer
  },
  inputRowContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 4
  }
});
