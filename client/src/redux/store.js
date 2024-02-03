import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice.js'

// Define a simple reducer
const rootReducer = (state = {}, action) => {
  // Handle actions and update state as needed
  return state;
};

// Create the Redux store with the rootReducer
export const store = configureStore({
  reducer: {user : userReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
