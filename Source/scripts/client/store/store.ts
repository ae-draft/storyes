import {createStore, combineReducers, applyMiddleware, Store} from 'redux';
import thunkMiddleware from 'redux-thunk';

let _middlewaresArr = [thunkMiddleware];
const createStoreWithMiddleware = applyMiddleware(..._middlewaresArr)(createStore);

export function configureStore(initialState) {
   return createStoreWithMiddleware(combineReducers({
      
   }), initialState);
}

export function getStore(initialState?): Store { 
	return configureStore(initialState);
}