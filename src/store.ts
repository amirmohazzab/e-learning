
import { Middleware, configureStore } from '@reduxjs/toolkit';
import thunk, { ThunkMiddleware } from "redux-thunk";
import {loadingBarReducer, loadingBarMiddleware} from 'react-redux-loading-bar';
import { isExpired, decodeToken } from 'react-jwt';

import cartReducer from './features/cartSlice';
import coursesReducer from './features/coursesSlice';
import courseReducer from './features/courseSlice';
import userReducer from './features/userSlice';
import { addUser, clearUser } from './features/userSlice';
import { getAllCourses } from './features/coursesSlice';
import {IRootState, IToken} from "./utils/types";



export const store = configureStore({
  reducer: {
    cart: cartReducer,
	  course: courseReducer,
	  courses: coursesReducer,
	  user: userReducer,
	  loadingBar: loadingBarReducer
  },
  middleware: [thunk as ThunkMiddleware<IRootState>, loadingBarMiddleware() as Middleware],
  devTools: process.env.NODE_ENV !== 'production',
});


const token = localStorage.getItem("token");
if (token) {
  const myDecodedToken: IToken | null = decodeToken(token);
  const isMyTokenExpired = isExpired(token);

  if (isMyTokenExpired) {
    localStorage.removeItem("token");
    store.dispatch(clearUser());
  } else {
    store.dispatch(addUser(myDecodedToken?.user));
  }
}

store.dispatch(getAllCourses());

store.subscribe(() => console.log(store.getState()));

export default store;