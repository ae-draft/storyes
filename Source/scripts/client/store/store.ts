import {createStore, combineReducers, applyMiddleware, Store} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { browserHistory } from 'react-router'
import { routerReducer, routerMiddleware } from 'react-router-redux'

let _middlewaresArr = [
    thunkMiddleware,
    routerMiddleware(browserHistory)
];
const createStoreWithMiddleware = applyMiddleware(..._middlewaresArr)(createStore);

export function configureStore(initialState) {
   return createStoreWithMiddleware(combineReducers({
      routing: routerReducer
   }), initialState);
}

export function getStore(initialState?): Store {
    return configureStore(initialState);
}