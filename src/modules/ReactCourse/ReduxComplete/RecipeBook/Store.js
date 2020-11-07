import { createStore, applyMiddleware } from 'redux';
import Reducer from './Reducer'
import Log from './Log'
import Api from './Api'

const middlewareEnhancer = applyMiddleware(Log, Api);
const store = createStore(Reducer, middlewareEnhancer);

export default store;


