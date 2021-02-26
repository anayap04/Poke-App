import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';



const PokemonCard = props => {
  const {
    pokemonName,
    pokemonImage,
    pokemonText,
    pokemonType,
  } = props;

  return (
  <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" />
    <Card.Content>
      <Title>{pokemonName}</Title>
      <Paragraph>{pokemonText} {pokemonType}</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: pokemonImage}} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
  )
};

export default PokemonCard;