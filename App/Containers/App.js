import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView,View} from 'react-native';
import {Appbar, TextInput, Button} from 'react-native-paper';

//Componentes
import PokemonCard from './PokemonCard';

//Acciones
import {requestPokedex} from '../Redux/Actions';

//Estilos
import styles from './Styles/AppStyles';

/**
 * Container principal de la aplicación
 */
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: '',
    }
  }

  callService = pokemon => {
    const {request} = this.props;
    request(pokemon);
  }

  setText = text => {
    this.setState({pokemon: text})
  }

  render() {
    const {pokeData} = this.props;
    return( 
    <View>
    <Appbar style={styles.barStyle} />
    <SafeAreaView>
      <TextInput
        label="Busca Tu pokemon"
        value={this.state.pokemon}
        onChangeText={text => this.setText(text)}
      />
      <Button mode="contained" onPress={() => this.callService(this.state.pokemon)}>
        Buscar
      </Button>
      {pokeData ? <PokemonCard /> : null}
    </SafeAreaView>
    </View>)
  }

}

const mapStateToProps = (state) => {
  const {pokedexData} = state
  return {pokeData: pokedexData}
}

const mapDispatchToProps = dispatch => {
  return {
    request: pokemon => requestPokedex(),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
