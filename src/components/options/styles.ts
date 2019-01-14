import { StyleSheet } from 'react-native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { AppStyles, Colors } from '../../global';

export default StyleSheet.create({
  container: {
    paddingVertical: 10,
    alignSelf: 'stretch',
    backgroundColor: Colors.darkBlue,
    paddingBottom: 12,
    paddingHorizontal: 20
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.platinum
  }
});
