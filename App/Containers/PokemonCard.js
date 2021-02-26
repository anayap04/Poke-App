import * as React from 'react';
import { useState } from 'react';
import {View, Image} from 'react-native';
import {Chip, Title, Subheading, Text} from 'react-native-paper';
import { removeAccents } from '../Utils/pokedexUtils';

//Styles
import styleFn from './Styles/PokemonCardStyles';

/**
 * Para esta tarjeta se puede agregar más información
 * @param {*} props 
 */
const PokemonCard = props => {
  const {
    pokemonName,
    pokemonImage,
    pokemonText,
    pokemonType,
    pokemonAbilities,
  } = props;
  const typeId = removeAccents(pokemonType);
  const styles = styleFn(typeId);
  const [value, setValue] = useState(pokemonText);

  const renderMoreInfo = () => {
    const listInfo = [
      {title: 'Información', text: pokemonText, id: 0}, 
      {title: 'Estadísticas', text: pokemonAbilities, id: 1}
    ];
    return listInfo.map(info => {
      return (
      <Chip
        style={styles.chip}
        key={info.id}
        onPress={() => setValue(info.text)}>
        <Text style={styles.chipText}>{info.title}</Text>
      </Chip>);
    })
  }

  return (
    <View style={styles.cardContent}>
      <View style={styles.cardTitle}>
        <Title style={styles.title}>{pokemonName}</Title>
        <View style={styles.subtitleContent}>
          <Subheading style={[styles.subtitle]}>{pokemonType}</Subheading>
        </View>
      </View>
      <View style={styles.imageContent}>
        <Image 
          style={styles.imageStyle}
          source={{uri: pokemonImage}}
        />

      </View>
      <View style={styles.chipContainer}>
        {renderMoreInfo()}
      </View>
      <View style={styles.contentText}>
        <Text style={styles.textStyleDesc}>{value}</Text>
      </View>
    </View>
  )
};

export default PokemonCard;