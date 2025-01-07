import {createStore, applyMiddleware} from 'redux'

import loggerMiddleware from './loggerMiddleware';

import financeReducer from './financeReducer'

export default createStore(financeReducer, applyMiddleware(loggerMiddleware));