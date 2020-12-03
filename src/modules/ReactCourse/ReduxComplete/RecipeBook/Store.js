import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './Sagas/index';
import Reducer from './Reducer'
import Log from './Log'

const sagaMiddleware = createSagaMiddleware();
const middlewareEnhancer = applyMiddleware(Log, sagaMiddleware);
const store = createStore(Reducer, middlewareEnhancer);

sagaMiddleware.run(rootSaga);
export default store;


