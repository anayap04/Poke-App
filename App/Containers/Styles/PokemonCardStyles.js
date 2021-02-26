import {StyleSheet} from 'react-native';
import colors from '../../Utils/pokemonColors';
const PokemonCardStyles = type => ({
  cardTitle: {
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  chipContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 4,
    paddingLeft: 4,
    flexDirection:'row',
    backgroundColor: '#CC0000',
  },
  chip: {
    width: '45%',
    alignContent: 'center', 
    justifyContent: 'center',
    backgroundColor: '#3B4CCA',
    borderRadius: 9,
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  chipText: {
    color: 'white',
    fontFamily: 'Lato-Blod',
  },
  imageContent: {
    borderWidth: 20,
    borderColor: '#DEE4E6',
    borderRadius: 2,
    backgroundColor: colors(type),
  },
  imageStyle: {
    width: '100%',
    height: 250,
  },
  title: {
    fontFamily: 'Lato-Black',
    fontSize: 32,
    color: '#FAFAFA',
  },
  subtitleContent: {
    borderColor: colors(type),
    borderWidth: 4,
    borderRadius: 6,
    paddingLeft: 4,
    paddingRight: 4,
  },
  subtitle: {
    color: colors(type),
    fontFamily: 'Lato-Blod',
    fontSize: 20,
  },
  textInfo: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
  },
  contentText: {
    padding: 20,
    backgroundColor: 'rgba(242, 234, 234, 0.8)',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  textStyleDesc: {
    fontFamily: 'Lato-Regular',
    fontSize: 20,
  },
});
  
export default PokemonCardStyles;