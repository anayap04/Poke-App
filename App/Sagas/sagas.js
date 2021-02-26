import {all, takeLatest} from "@redux-saga/core/effects";

//Action Types
import {
  REQUEST_ABILITIES,
  REQUEST_DESC,
  REQUEST_FORM,
  REQUEST_POKEDEX,
  REQUEST_TYPE,
} from "../Redux/ActionTypes";

//Sagas
import {
  getPokedexData,
  getFormData,
  getPokemonDesc,
  getPokemonType,
  getPokemonAbilities,
} from "./pokedexSagas";

export default function* rootSagas() {
  yield all([
    takeLatest(REQUEST_POKEDEX, getPokedexData),
    takeLatest(REQUEST_FORM, getFormData),
    takeLatest(REQUEST_DESC, getPokemonDesc),
    takeLatest(REQUEST_TYPE, getPokemonType),
    takeLatest(REQUEST_ABILITIES, getPokemonAbilities),
  ])
}