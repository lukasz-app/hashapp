import { StyleSheet } from 'react-native';
import { AppStyles, Colors } from '../../global';

export default StyleSheet.create({
  container: {
    ...AppStyles.screenContainer
  },
  inputRowContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: Colors.nicel,
    flex: 1,
    borderRadius: 3,
    marginRight: 6,
    justifyContent: 'center',
    paddingLeft: 2
  }
});
