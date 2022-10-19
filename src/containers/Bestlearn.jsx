import React from "react";
import {Routes, Route} from 'react-router-dom'
import Course from "./../components/course/Course";
import MainLayout from "../components/layouts/MainLayout";
import Login from "../components/login/Login";
import Archive from './../components/course/Archive';
import Register from './../components/register/Register';
import UserProfile from './../components/profile/UserProfile';
import SingleCourse from './../components/course/SingleCourse';


const Bestlearn = (props) => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/course" element={<SingleCourse />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/" exact element={<Course />} />
      </Routes>
    </MainLayout>
  );
};

export default Bestlearn;
