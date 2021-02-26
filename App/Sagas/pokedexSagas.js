import { call, put, delay } from "redux-saga/effects";
import { ERROR_DESC, ERROR_FORM, ERROR_POKEDEX, GET_DESC, GET_FORM, GET_POKEDEX } from "../Redux/ActionTypes";

export function* getPokedexData(payload) {
  
  const fetchUrl = `https://pokeapi.co/api/v2/pokemon/${payload.actionPayload}`;
    const headers = {
      'Content-Type': 'application/json',
    };
    const res = yield call(fetch, fetchUrl, { method: 'GET', headers });
    const response = yield res.json();

  if(response) {
    yield put({
      type: GET_POKEDEX,
      pokedexData: response,
    })
  } else {
    yield put({
      type: ERROR_POKEDEX,
      pokedexError: response.problem
    })
  }
}

export function* getFormData(payload) {
  
  const fetchUrl = payload.actionPayload;
    const headers = {
      'Content-Type': 'application/json',
    };
    const res = yield call(fetch, fetchUrl, { method: 'GET', headers });
    const response = yield res.json();

  if(response) {
    yield put({
      type: GET_FORM,
      formData: response,
    })
  } else {
    yield put({
      type: ERROR_FORM,
      formDataError: response.problem
    })
  }
}

export function* getPokemonDesc(payload) {
  
  const fetchUrl = payload.actionPayload;
    const headers = {
      'Content-Type': 'application/json',
    };
    const res = yield call(fetch, fetchUrl, { method: 'GET', headers });
    const response = yield res.json();

  if(response) {
    yield put({
      type: GET_DESC,
      descData: response,
    })
  } else {
    yield put({
      type: ERROR_DESC,
      descDataError: response.problem
    })
  }
}