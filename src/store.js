// import { combineReducers } from "redux";
// import {coursesReducer} from './reducers/courses';
// import {courseReducer} from './reducers/course';
// import {userReducer} from './reducers/user';
// import {cartReducer} from './reducers/cart';
// import { getAllCourses } from './actions/courses';

// const store = configureStore({
//   reducer: reducers,
//   middleware: [thunk, loadingBarMiddleware()],
//   devTools: process.env.NODE_ENV !== 'production',
// });

// const reducers = combineReducers({   
//   course: courseReducer,
//   courses: coursesReducer,
//   user: userReducer,
//   cart: cartReducer,
//   loadingBar: loadingBarReducer
// });

import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";

import cartReducer from './features/cartSlice';
import coursesReducer from './features/coursesSlice';
import courseReducer from './features/courseSlice';
import userReducer from './features/userSlice';
import { getAllCourses } from './features/coursesSlice';

import {loadingBarReducer, loadingBarMiddleware} from 'react-redux-loading-bar';


export const store = configureStore({
  reducer: {
    cart: cartReducer,
	  course: courseReducer,
	  courses: coursesReducer,
	  user: userReducer,
	  loadingBar: loadingBarReducer
  },
  middleware: [thunk, loadingBarMiddleware()],
  devTools: process.env.NODE_ENV !== 'production',
});


store.dispatch(getAllCourses());

store.subscribe(() => console.log(store.getState()));


export default store;