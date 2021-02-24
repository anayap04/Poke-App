import {all, takeLatest} from "@redux-saga/core/effects";
import {REQUEST_POKEDEX} from "../Redux/ActionTypes";
import {getPokedexData} from "./pokedexSagas";

export default function* rootSagas() {
  yield all([
    takeLatest(REQUEST_POKEDEX, getPokedexData)
  ])
}