import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './Sagas/Recipes';
import reducer from './Reducer'
import Log from './Log'

const sagaMiddleware = createSagaMiddleware();
const middlewareEnhancer = applyMiddleware(Log, sagaMiddleware);
const store = createStore(reducer, middlewareEnhancer);

sagaMiddleware.run(rootSaga);
export default store;


