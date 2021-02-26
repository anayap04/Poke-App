import 'react-native';
import React from 'react';
import {App, mapStateToProps, mapDispatchToProps} from '../App/Containers/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const props = {
  pokedexData: {},
  pokedexError: null,
  formData: {},
  descData: {},
  typeData: {},
  abilitiesData: {},
};

it('renders correctly', () => {
  const component = renderer.create(<App {...props} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot(); 
});

it('mapToStateProps Test', () => {

  const state = {
    pokedexData: {},
    pokedexError: {},
    formData: {},
    descData: {},
    typeData: {},
    abilitiesData: {},
  };
  const result = mapStateToProps(state);
  expect(result.pokedexData).toEqual(state.pokedexData);
  expect(result.pokedexError).toEqual(state.pokedexError);
  expect(result.formData).toEqual(state.formData);
  expect(result.descData).toEqual(state.descData);
  expect(result.typeData).toEqual(state.typeData);
  expect(result.abilitiesData).toEqual(state.abilitiesData);
})
