import React, {useEffect} from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import Course from "./../components/course/Course";
import MainLayout from "../components/layouts/MainLayout";
import Login from "../components/login/Login";
import Archive from './../components/course/Archive';
import Register from './../components/register/Register';
import UserProfile from './../components/profile/UserProfile';
import SingleCourse from './../components/course/SingleCourse';
import { useSelector, useDispatch } from 'react-redux';
import { paginate } from './../utils/paginate';
import { isExpired, decodeToken } from "react-jwt";
import { addUser, clearUser } from "../actions/user";
import Logout from './../components/login/logout';
import { isEmpty } from "lodash";
import UserContext from "../components/context/userContext";
import NotFound from './../components/common/NotFound';



const Bestlearn = () => {


  const courses = useSelector(state => state.courses);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const indexCourses = paginate(courses, 1, 8); 

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token){
      const myDecodedToken = decodeToken(token);
      const isMyTokenExpired = isExpired(token);

      if(isMyTokenExpired){
        localStorage.removeItem("token");
        dispatch(clearUser());
      }
       else dispatch(addUser(myDecodedToken.user));       
    }

  },[]);

  

  return (
    <MainLayout>
      <Routes>
        
      <Route path="/login" element={ isEmpty(user) ? (
          <UserContext>
            <Login />
          </UserContext>
        ) : <Navigate to="/" />} />

        <Route path="/logout" element={ isEmpty(user) ? <Navigate to="/" /> : <Logout />} />
        <Route path="/register" element={ isEmpty(user) ? (
          <UserContext>
            <Register />
          </UserContext>
        ) : <Navigate to="/" />} />

        <Route path="/archive" element={<Archive />} />
        <Route path="/course/:id" element={<SingleCourse />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/" exact element={<Course courses={indexCourses} />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
};


export default Bestlearn;
