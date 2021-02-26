import {
  REQUEST_POKEDEX,
  GET_POKEDEX,
  ERROR_POKEDEX,
  REQUEST_FORM,
  GET_FORM,
} from '../ActionTypes';

const initialState = {
  gettingData: false,
  pokedexData: null,
  pokedexError: null,
  gettingFormData: false,
  formData: null,
  formDataError: null,
  gettingDescData: false,
  descData: null,
  descDataError: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POKEDEX: {
      return {
        ...state,
        gettingData: true,
        payload: action.actionPayload,
      };
    }
    case GET_POKEDEX: {
      return {
        ...state,
        gettingData: false,
        pokedexData: action.pokedexData,
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
    case REQUEST_FORM: {
      return {
        ...state,
        gettingFormData: true,
        payload: action.actionPayload,
      };
    }
    case GET_FORM: {
      return {
        ...state,
        gettingFormData: false,
        formData: action.formData,
        formDataError: null,
      };
    }
    case ERROR_POKEDEX: {
      return {
        ...state,
        gettingFormData: true,
        formData: null,
        formDataError: action.payload,
      };
    }
    case REQUEST_DESC: {
      return {
        ...state,
        gettingDescData: true,
        payload: action.actionPayload,
      };
    }
    case GET_DESC: {
      return {
        ...state,
        gettingDescData: false,
        descData: action.descData,
        descDataError: null,
      };
    }
    case ERROR_DESC: {
      return {
        ...state,
        gettingDescData: true,
        descData: null,
        descDataError: action.payload,
      };
    }
    default:
      return state;
  }
}