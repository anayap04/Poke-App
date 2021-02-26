import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView,View, Text} from 'react-native';
import {Appbar, TextInput, Button} from 'react-native-paper';

//Components
import PokemonCard from './PokemonCard';

//Actions
import {
  requestAbilities,
  requestDesc,
  requestForm,
  requestPokedex,
  requestType,
} from '../Redux/Actions';

//Styles
import styles from './Styles/AppStyles';

//Utils
import {mapInfo} from '../Utils/pokedexUtils';

/**
 * App container
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
    const {form, desc, type, abilities} = this.props;
    const urlForm = data.forms ? data.forms[0].url : null;
    const urlDesc =  data.forms ? data.species.url : null;
    const urlType = data.types ? data.types[0].type.url : null;
    const arrayUrl = data.abilities 
      ? data.abilities.map(a => a.ability.url) 
      : null;
  
    form(urlForm);
    desc(urlDesc);
    type(urlType);
    abilities(arrayUrl);
  }

  callService = pokemon => {
    const {request} = this.props;
    request(pokemon);
  }

  setText = text => {
    this.setState({pokemon: text})
  }

  render() {
    const {
      formData,
      descData,
      typeData,
      abilitiesData,
    } = this.props;

    const pokemonInfo = 
      formData && 
      descData &&
      typeData &&
      abilitiesData
        ? mapInfo(
          formData,
          descData,
          typeData,
          abilitiesData) 
        : null;

    return( 
    <View>
    <Appbar style={styles.barStyle} />
    <SafeAreaView>
      <TextInput
        label="Busca Tu pokemon"
        value={this.state.pokemon}
        onChangeText={text => this.setText(text)}
      />
      <Button 
        mode="contained" 
        onPress={() => this.callService(this.state.pokemon)}>
        <Text>Buscar</Text>
      </Button>
      {pokemonInfo ? 
        <PokemonCard 
          pokemonImage={pokemonInfo.pokemonImage}
          pokemonName={pokemonInfo.pokemonName}
          pokemonText={pokemonInfo.pokemonText}
          pokemonType={pokemonInfo.pokemonType}
        /> 
        : null}
    </SafeAreaView>
    </View>)
  }

}

const mapStateToProps = (state) => {
  const {
    pokedexData,
    formData,
    descData,
    typeData,
    abilitiesData,
  } = state;

  return {
    pokeData: pokedexData,
    formData: formData,
    descData: descData,
    typeData: typeData,
    abilitiesData: abilitiesData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    request: pokemon => dispatch(requestPokedex(pokemon)),
    form: url => dispatch(requestForm(url)),
    desc: url => dispatch(requestDesc(url)),
    type: url => dispatch(requestType(url)),
    abilities: arrayUrl => dispatch(requestAbilities(arrayUrl)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
