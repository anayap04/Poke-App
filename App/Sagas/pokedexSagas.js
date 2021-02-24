import { call, put } from "@redux-saga/core/effects";
import { ERROR_POKEDEX, GET_POKEDEX } from "../Redux/ActionTypes";

export function* getPokedexData(pokemon) {
  const apiToCall = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  const response = yield call(apiToCall);

  if(response.ok) {
    yield put({
      type: GET_POKEDEX,
      pokedexData: response.data,
    })
  } else {
    yield put({
      type: ERROR_POKEDEX,
      pokedexError: response.problem
    })
  }
}