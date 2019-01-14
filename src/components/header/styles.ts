import { StyleSheet } from 'react-native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { AppStyles, Colors } from '../../global';

export default StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(true),
    alignSelf: 'stretch',
    backgroundColor: Colors.darkBlue,
    paddingBottom: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  label: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.platinum
    // marginBottom: 6
  },
  icon: {
    height: 30,
    width: 30
  }
});
