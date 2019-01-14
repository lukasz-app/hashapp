import { StyleSheet } from 'react-native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import Colors from './Colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignSelf: 'stretch'
  },
  screenContainer: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: getBottomSpace() + 20
  }
});

export default styles;
