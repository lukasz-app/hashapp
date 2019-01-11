import { StyleSheet } from 'react-native';
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
    paddingTop: 30
  }
});

export default styles;
