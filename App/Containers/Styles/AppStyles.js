import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const AppStyles = StyleSheet.create({
  safeAreaView : {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  barStyle: {
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#CC0000',
  },
  buttonStyle: {
    marginTop: 10,
    backgroundColor: '#3B4CCA',
    borderRadius: 9,
    borderWidth: 1,
    borderColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  container: {
    backgroundColor: '#CC0000',
    height: '100%',
    flex: 1,
  },
  imageLogo: {
    height: 240,
    width: 240,
    marginTop: 100,
    marginLeft: 60,
  },
  contentError: {
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    fontFamily: 'Lato-Black',
    fontSize: 32,
    color: '#FAFAFA',
  },
  subtitle: {
    color: 'white',
    fontFamily: 'Lato-Blod',
    fontSize: 20,
  },
});

export default AppStyles;