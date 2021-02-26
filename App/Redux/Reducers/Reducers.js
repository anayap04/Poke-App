import {
  REQUEST_POKEDEX,
  GET_POKEDEX,
  ERROR_POKEDEX,
  REQUEST_FORM,
  GET_FORM,
  ERROR_FORM,
  REQUEST_DESC,
  GET_DESC,
  ERROR_DESC,
  REQUEST_TYPE,
  GET_TYPE,
  ERROR_TYPE,
  REQUEST_ABILITIES,
  GET_ABILITIES,
  ERROR_ABILITIES,
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
  gettingTypeData: false,
  typeData: null,
  typeDataError: null,
  gettingAbilitiesData: false,
  abilitiesData: null,
  abilitiesDataError: null,
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
    case ERROR_FORM: {
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
    case REQUEST_TYPE: {
      return {
        ...state,
        gettingTypeData: true,
        payload: action.actionPayload,
      };
    }
    case GET_TYPE: {
      return {
        ...state,
        gettingTypeData: false,
        typeData: action.typeData,
        typeDataError: null,
      };
    }
    case ERROR_TYPE: {
      return {
        ...state,
        gettingTypeData: true,
        typeData: null,
        typeDataError: action.payload,
      };
    }
    case REQUEST_ABILITIES: {
      return {
        ...state,
        gettingTypeData: true,
        payload: action.actionPayload,
      };
    }
    case GET_ABILITIES: {
      return {
        ...state,
        gettingAbilitiesData: false,
        abilitiesData: action.abilitiesData,
        abilitiesDataError: null,
      };
    }
    case ERROR_ABILITIES: {
      return {
        ...state,
        gettingTypeData: true,
        abilitiesData: null,
        abilitiesDataError: action.payload,
      };
    }
    default:
      return state;
  }
}