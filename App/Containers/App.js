import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView,View} from 'react-native';
import {Appbar, TextInput, Button} from 'react-native-paper';

//Componentes
import PokemonCard from './PokemonCard';

//Acciones
import {requestForm, requestPokedex} from '../Redux/Actions';

//Estilos
import styles from './Styles/AppStyles';

import {mapInfo} from '../Utils/pokedexUtils';

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

  componentDidUpdate(prevProps) {
    const {pokeData} = this.props;
    if (prevProps.pokeData !== pokeData) {
      this.getPokemonData(pokeData);
    }
  }
  
  getPokemonData = (data) => {
    const {form} = this.props;
    const url = data.forms ? data.forms[0].url : null;
    form(url);
  }
  callService = pokemon => {
    const {request} = this.props;
    request(pokemon);
  }

  setText = text => {
    this.setState({pokemon: text})
  }

  render() {
    const {formData} = this.props;
    
    const pokemonInfo = formData ? mapInfo(formData) : null;
   
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
      {pokemonInfo ? <PokemonCard photoUrl={pokemonInfo} /> : null}
    </SafeAreaView>
    </View>)
  }

}

const mapStateToProps = (state) => {
  const {pokedexData, formData} = state
  return {
    pokeData: pokedexData,
    formData: formData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    request: pokemon => dispatch(requestPokedex(pokemon)),
    form: url => dispatch(requestForm(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
