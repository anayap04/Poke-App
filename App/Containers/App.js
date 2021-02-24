import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView,View} from 'react-native';
import {Appbar} from 'react-native-paper';

//Componentes
import PokemonCard from './PokemonCard';

//
import {requestPokedex} from '../Redux/Actions';

//Estilos
import styles from './Styles/AppStyles';

/**
 * Container principal de la aplicación
 */
export class App extends Component {

  render() {
    return( 
    <View>
    <Appbar style={styles.barStyle} />
    <SafeAreaView>
      <PokemonCard />
    </SafeAreaView>
    </View>)
  }

}


const mapDispatchToProps = dispatch => {
  return {
    request: pokemon => requestPokedex(),
  }
}

export default connect(null, mapDispatchToProps)(App)
