import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import thunk from "redux-thunk";

import {coursesReducer} from './reducers/courses';
import {courseReducer} from './reducers/course';
import {userReducer} from './reducers/user';
import {cartReducer} from './reducers/cart';
import {loadingBarReducer, loadingBarMiddleware} from 'react-redux-loading-bar';
import { getAllCourses } from './actions/courses';
// import { decodeToken } from 'react-jwt';
// import { isExpired } from 'react-jwt';
// import { clearUser, addUser } from './actions/user';
import { getBasket } from './actions/cart';

const reducers = combineReducers({   
    
  course: courseReducer,
  courses: coursesReducer,
  user: userReducer,
  cart: cartReducer,
  loadingBar: loadingBarReducer
});



const store = configureStore({
  reducer: reducers,
  middleware: [thunk, loadingBarMiddleware()],
  devTools: process.env.NODE_ENV !== 'production',
});


store.dispatch(getAllCourses());
// store.dispatch(getBasket());

store.subscribe(() => console.log(store.getState()));




export default store;