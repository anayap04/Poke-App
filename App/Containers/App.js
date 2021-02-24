import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Appbar} from 'react-native-paper';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import PokemonCard from './PokemonCard';

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


export default App;
