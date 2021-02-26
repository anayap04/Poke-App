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