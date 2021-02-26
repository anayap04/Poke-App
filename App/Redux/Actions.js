import {
  ERROR_POKEDEX,
  GET_POKEDEX,
  REQUEST_POKEDEX,
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
} from "./ActionTypes"


export const requestPokedex = data => {
  return {
    type: REQUEST_POKEDEX,
    actionPayload: data,
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

export const requestForm = data => {
  return {
    type: REQUEST_FORM,
    actionPayload: data,
  };
};

export const getForm = payload => {
  return {
    type: GET_FORM,
    payload: payload,
  };
};

export const errorForm = error => {
  return {
    type: ERROR_FORM,
    error: error,
  };
};

export const requestDesc = data => {
  return {
    type: REQUEST_DESC,
    actionPayload: data,
  };
};
  
export const getDesc = payload => {
  return {
    type: GET_DESC,
    payload: payload,
  };
};
  
export const errorDesc = error => {
  return {
    type: ERROR_DESC,
    error: error,
  };
};

export const requestType = data => {
  return {
    type: REQUEST_TYPE,
    actionPayload: data,
  };
};
  
export const getType = payload => {
  return {
    type: GET_TYPE,
    payload: payload,
  };
};
  
export const errorType = error => {
  return {
    type: ERROR_TYPE,
    error: error,
  };
};

export const requestAbilities = data => {
  return {
    type: REQUEST_ABILITIES,
    actionPayload: data,
  };
};
  
export const getAbilities = payload => {
  return {
    type: GET_ABILITIES,
    payload: payload,
  };
};
  
export const errorAbilities = error => {
  return {
    type: ERROR_ABILITIES,
    error: error,
  };
};