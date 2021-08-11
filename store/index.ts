



import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from './modules';

const combinedReducers = combineReducers({ ...reducers });
const configuredStore = createStore(combinedReducers, compose(applyMiddleware(thunkMiddleware)));

export default configuredStore;
