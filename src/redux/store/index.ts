import { applyMiddleware, createStore } from 'redux';
import { LoadingType } from '../actions/types';
import rootReducer from '../reducers/rootReducer';
import { StoreState } from './types';

import createSagaMiddleware from 'redux-saga';
import albunsSaga from '../sagas/postsSaga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
	const store = createStore<StoreState, LoadingType, any, any>(rootReducer, applyMiddleware(sagaMiddleware));
	sagaMiddleware.run(albunsSaga);

	return store;
}
