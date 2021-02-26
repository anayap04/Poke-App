import {call, put, all} from "redux-saga/effects";
import {
  ERROR_ABILITIES,
  ERROR_DESC,
  ERROR_FORM,
  ERROR_POKEDEX,
  ERROR_TYPE,
  GET_ABILITIES,
  GET_DESC,
  GET_FORM,
  GET_POKEDEX,
  GET_TYPE,
} from "../Redux/ActionTypes";

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

export function* getPokemonType(payload) {
  
  const fetchUrl = payload.actionPayload;
    const headers = {
      'Content-Type': 'application/json',
    };
    const res = yield call(fetch, fetchUrl, { method: 'GET', headers });
    const response = yield res.json();

  if(response) {
    yield put({
      type: GET_TYPE,
      typeData: response,
    })
  } else {
    yield put({
      type: ERROR_TYPE,
      typeDataError: response.problem
    })
  }
}

export function* getPokemonAbilities(payload) {
  
  const fetchUrl = payload.actionPayload;
  const headers = {
    'Content-Type': 'application/json',
  };
  const res =  yield all (fetchUrl.map(url => {
    return call( fetch, url, headers)
  }));

  const response = yield all (res.map( r => {
    return r.json();
  }));
  
  if(response) {
    yield put({
      type: GET_ABILITIES,
      abilitiesData: response,
    })
  } else {
    yield put({
      type: ERROR_ABILITIES,
      abilitiesDataError: response.problem
    })
  }
}
