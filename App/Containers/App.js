import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView,View, Text, ScrollView, Image} from 'react-native';
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
    const {pokedexData} = this.props;
    if (prevProps.pokedexData !== pokedexData) {
      this.getPokemonData(pokedexData);
    }
  }
  
  getPokemonData = (data) => {
    const {form, desc, type, abilities} = this.props;
    const urlForm = data.forms ? data.forms[0].url : null;
    const urlDesc =  data.species ? data.species.url : null;
    const urlType = data.types ? data.types[0].type.url : null;
    const arrayUrl = data.abilities 
      ? data.abilities.map(a => a.ability.url) 
      : null;
  
    form(urlForm);
    desc(urlDesc);
    type(urlType);
    abilities(arrayUrl);
  }

  /**
   * Una vez encuentra que hay cmabio en el estado,
   * esta función mappea el texto para evitar 
   * inyección de código y hace la llamada al servicio
   * @param {*} pokemon 
   */
  callService = pokemon => {
    const {request} = this.props;
    const newText = pokemon.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');    
    request(newText.toLowerCase());
    this.resetText();
  }

  /**
   * En esta función además de ingresar el pokemon a buscar,
   * @param {*} text ingresado por el usuario
   */
  setText = text => {
    this.setState({pokemon: text});
  }

  resetText = () => {
    this.setState({pokemon: ''})
  }

  /**
   * En esta función se renderiza el contenido mientras no haya error
   */
  renderContent = () => {
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

    return (pokemonInfo ?
        <View>
          <PokemonCard 
            pokemonImage={pokemonInfo.pokemonImage}
            pokemonName={pokemonInfo.pokemonName}
            pokemonText={pokemonInfo.pokemonText}
            pokemonType={pokemonInfo.pokemonType}
            pokemonAbilities={pokemonInfo.pokemonAbilities}
          /> 
        </View> 
      :  <Image 
      style={styles.imageLogo}
      source={require('../../assets/images/descarga.png')}
    />
    );
  };

  renderError = () => {
    const {pokedexError} = this.props;
    return (
      <View style={styles.contentError}>
        <Text style={styles.title}>{pokedexError}</Text>
        <Text style={styles.subtitle}>
          {`El pokemon '${this.state.pokemon}' no aparece`}
        </Text>
      </View>)
  }

  render() {
    const {pokedexError} = this.props;

    return( 
    <View style={styles.container}>
      <Appbar style={styles.barStyle} />
        <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.scrollView}>
        <TextInput
          label="Busca Tu pokemon"
          value={this.state.pokemon}
          onChangeText={text => this.setText(text)}
        />
        <Button 
          mode="contained" 
          style={styles.buttonStyle}
          onPress={() => this.callService(this.state.pokemon)}>
          <Text>Buscar</Text>
        </Button>
        {!pokedexError ? this.renderContent() : this.renderError()}
        </ScrollView>
      </SafeAreaView>
    </View>)
  }

}

const mapStateToProps = (state) => {
  const {
    pokedexData,
    pokedexError,
    formData,
    descData,
    typeData,
    abilitiesData,
  } = state;

  return {
    pokedexData: pokedexData,
    pokedexError: pokedexError,
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
