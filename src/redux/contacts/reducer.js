import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addContact, deleteContact, addFilter } from './actions';

const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [addFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});