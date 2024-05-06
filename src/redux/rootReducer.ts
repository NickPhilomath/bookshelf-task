import { combineReducers } from 'redux';

import authReducer from './auth/reducer';
import booksReducer from './books/reducer';

// combine all reducers.
const rootReducer = combineReducers({
  auth: authReducer,
  books: booksReducer,
});

export default rootReducer;
