import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";

const initialState = {
  auth: {
    current: {
      data: null,
      errorFields: null,
    },
    isLoggedIn: false,
    isLoading: false,
    isSuccess: false,
  },
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export default store;
