import { StyleSheet } from 'react-native';
import { AppStyles, Colors } from '../../global';

export default StyleSheet.create({
  container: {
    ...AppStyles.screenContainer
  },
  inputRowContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  inputContainer: {
    borderWidth: 1,
    paddingVertical: 8,
    borderColor: Colors.nicel,
    flex: 1,
    borderRadius: 3,
    justifyContent: 'center',
    paddingLeft: 2
  }
});
