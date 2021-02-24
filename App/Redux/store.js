import {applyMiddleware, createStore} from "redux";

//Reducer
import rootReducer from "./Reducers/Reducers";

//Sagas
import rootSagas from '../Sagas/sagas';
import reduxSaga from "redux-saga";

const sagaMiddleware = reduxSaga();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas)

export default store;

