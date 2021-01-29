import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import { persistConfig } from '../config/persistConfig';

import booksReducer from './reducers';

const rootReducer = combineReducers({
  booksReducer: persistReducer(persistConfig, booksReducer)
});
export const store = createStore(rootReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);