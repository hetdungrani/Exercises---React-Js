// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from './userSlice';
// const store = configureStore({
//   reducer: {rootReducer},
// });



import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../appwrite/config';

const rootReducer = combineReducers({
  user: userReducer,
  // add other reducers here
});

const store = configureStore({
  reducer: {rootReducer},
});
export default store;