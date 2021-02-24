import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';



const PokemonCard = props => {
  const {photoUrl} = props;

  return (
  <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
  )
};

export default PokemonCard;