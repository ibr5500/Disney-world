import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import charactersReducer from './characters/characters';

const reducer = combineReducers({
  characters: charactersReducer,
});

const store = configureStore({ reducer });

export default store;
