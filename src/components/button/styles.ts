import { StyleSheet } from 'react-native';
import { AppStyles, Colors } from '../../global';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: Colors.maxGreen,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerInactive: {
    backgroundColor: Colors.silver
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.white
  }
});
