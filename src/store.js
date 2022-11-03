import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import thunk from "redux-thunk";

import {coursesReducer} from './reducers/courses';
import {courseReducer} from './reducers/course';
import {userReducer} from './reducers/user';
import {loadingBarReducer, loadingBarMiddleware} from 'react-redux-loading-bar';
import { getAllCourses } from './actions/courses';

const reducers = combineReducers({   
    
  course: courseReducer,
  courses: coursesReducer,
  user: userReducer,
  loadingBar: loadingBarReducer
});



const store = configureStore({
  reducer: reducers,
  middleware: [thunk, loadingBarMiddleware()],
  devTools: process.env.NODE_ENV !== 'production',
});


store.dispatch(getAllCourses());

store.subscribe(() => console.log(store.getState()));


export default store;