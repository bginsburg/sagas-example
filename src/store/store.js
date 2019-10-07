import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import {mySaga} from '../sagas/saga'

import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(sagaMiddleware,thunk)),
);

sagaMiddleware.run(mySaga)

export default store;