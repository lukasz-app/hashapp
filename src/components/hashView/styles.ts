import { StyleSheet } from 'react-native';
import { AppStyles, Colors } from '../../global';

export default StyleSheet.create({
  container: {
    marginTop: 16,
    alignSelf: 'stretch'
  },
  rowLabelContiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6
  },
  hashContainer: {
    alignSelf: 'stretch',
    borderColor: Colors.queenBlue,
    borderWidth: 1,
    borderRadius: 3,
    padding: 2
  },
  hash: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.richBlack
  },
  copyIcon: {
    height: 20,
    width: 20
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.queenBlue
  }
});
