import {
  REQUEST_POKEDEX,
  GET_POKEDEX,
  ERROR_POKEDEX,
} from "../ActionTypes";

const initialState = {
  gettingData: false,
  pokedexData: null,
  pokedexError: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POKEDEX: {
      return {
        ...state,
        gettingData: true,
      };
    }
    case GET_POKEDEX: {
      return {
        ...state,
        gettingData: false,
        pokedexData: action.payload,
      };
    }
    case ERROR_POKEDEX: {
      return {
        ...state,
        gettingData: true,
        pokedexData: null,
        pokedexError: action.payload,
      };
    }
    default:
      return state;
  }
}