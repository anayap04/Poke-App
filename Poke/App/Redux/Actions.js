import {ERROR_POKEDEX, GET_POKEDEX, REQUEST_POKEDEX} from "./ActionTypes"


export const requestPokedex = () => {
  return {
    type: REQUEST_POKEDEX,
  };
};

export const getPokedex = payload => {
  return {
    type: GET_POKEDEX,
    payload: payload,
  };
};

export const errorPokedex = error => {
  return {
    type: ERROR_POKEDEX,
    error: error,
  };
};