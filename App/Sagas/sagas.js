import {all, takeEvery, takeLatest} from "@redux-saga/core/effects";
import {REQUEST_DESC, REQUEST_FORM, REQUEST_POKEDEX} from "../Redux/ActionTypes";
import {getPokedexData, getFormData, getPokemonDesc} from "./pokedexSagas";

export default function* rootSagas() {
  yield all([
    takeLatest(REQUEST_POKEDEX, getPokedexData),
    takeLatest(REQUEST_FORM, getFormData),
    takeLatest(REQUEST_DESC, getPokemonDesc)
  ])
}