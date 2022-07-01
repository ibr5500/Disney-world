import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import charactersReducer from './characters/characters';

const reducer = combineReducers({
  characters: charactersReducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk, logger));

export default store;
