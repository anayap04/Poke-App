import {StyleSheet} from 'react-native';
import colors from '../../Utils/pokemonColors';
const PokemonCardStyles = type => ({
  cardContent: {
    backgroundColor: '#323D48',
  },
  cardTitle: {
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  chipContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 4,
    paddingRight: 4,
    flexDirection:'row',
    backgroundColor: '#CC0000',
  },
  chip: {
    width: '50%',
    alignContent: 'center', 
    justifyContent: 'center',
    backgroundColor: '#3B4CCA',
    borderRadius: 9,
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: 2,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  chipText: {
    color: 'white',
    fontFamily: 'Lato-Blod',
  },
  imageStyle: {
    width: '100%',
    height: 200,
    borderWidth: 10,
    borderColor: 'dee4e6',
  },
  title: {
    fontFamily: 'Lato-Black',
    fontSize: 32,
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
    backgroundColor: '#323D48',
    width: '100%',
  },
  textStyleDesc: {
    backgroundColor: 'rgba(50, 61, 72, 0.8)',
    width: '100%',
    fontSize: 16,
    
  },
});
  
export default PokemonCardStyles;