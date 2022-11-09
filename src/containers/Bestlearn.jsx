import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Course from "./../components/course/Course";
import MainLayout from "../components/layouts/MainLayout";
import Login from "../components/login/Login";
import Archive from "./../components/course/Archive";
import Register from "./../components/register/Register";
import UserProfile from "./../components/profile/UserProfile";
import SingleCourse from "./../components/course/SingleCourse";
import { useSelector, useDispatch } from "react-redux";
import { paginate } from "./../utils/paginate";
import { isExpired, decodeToken } from "react-jwt";
import { addUser, clearUser } from "../actions/user";
import Logout from "./../components/login/logout";
import { isEmpty } from "lodash";
import UserContext from "../components/context/userContext";
import NotFound from "./../components/common/NotFound";
import PrivateLayout from "./../components/layouts/PrivateLayout";
import Dashboard from './../components/admin/Dashboard';
import CourseTable from './../components/admin/CourseTable';
import AdminContext from "../components/context/AdminContext";

const Bestlearn = () => {
  const courses = useSelector((state) => state.courses);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const indexCourses = paginate(courses, 1, 8);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const myDecodedToken = decodeToken(token);
      const isMyTokenExpired = isExpired(token);

      if (isMyTokenExpired) {
        localStorage.removeItem("token");
        dispatch(clearUser());
      } else dispatch(addUser(myDecodedToken.user));
    }
  }, []);

  return (
    <Routes>
        <Route path="/dashboard/courses" exact   
                                  element={ !isEmpty(user) && user.isAdmin ? (
                                            <PrivateLayout>  
                                                <AdminContext courses={courses} > 
                                                    <CourseTable  />
                                                </AdminContext>
                                            </PrivateLayout> ) : (
                                            <PrivateLayout>
                                                <Navigate to="/" /> 
                                            </PrivateLayout> )}
        />
        <Route path="/dashboard" exact
                                  element={ !isEmpty(user) && user.isAdmin ? (
                                            <PrivateLayout> 
                                                <Dashboard courses={courses} /> 
                                            </PrivateLayout> ) : (
                                            <PrivateLayout>
                                                <Navigate to="/" />
                                            </PrivateLayout> )}
        /> 
        <Route path="/login" element={ isEmpty(user) ? (
                                        <MainLayout>
                                            <UserContext>
                                              <Login />
                                            </UserContext>
                                        </MainLayout> ) : (
                                        <MainLayout>
                                            <Navigate to="/" /> 
                                        </MainLayout> )}
        />
        <Route path="/logout" element={isEmpty(user) ? (
                                                        <MainLayout>
                                                            <Navigate to="/"/>
                                                        </MainLayout> ) : (
                                                        <MainLayout>
                                                            <Logout/>
                                                        </MainLayout> )}
        />
        <Route path="/register" element={isEmpty(user) ? (
                                            <MainLayout>
                                                <UserContext>
                                                    <Register />
                                                </UserContext>
                                            </MainLayout> ) : (
                                            <MainLayout>
                                                <Navigate to="/" /> 
                                            </MainLayout> )}
        />
        <Route path="/archive" element={
                                        <MainLayout>
                                            <Archive/>
                                        </MainLayout>}/>
        <Route path="/course/:id" element={
                                         <MainLayout>
                                            <SingleCourse/>
                                         </MainLayout>}
        />
        <Route path="/user-profile" element={   
                                            <MainLayout>
                                                <UserProfile/>
                                            </MainLayout>}
        />
        <Route path="/" exact element={ indexCourses.length > 0 ? (
                                                        <MainLayout>
                                                             <Course courses={indexCourses} />
                                                        </MainLayout> ) : (
                                                        <MainLayout>
                                                            <h2 style={{textAlign: "center",
                                                                margin: "2em" }} >
                                                                No Course to show
                                                            </h2>
                                                        </MainLayout> )}
        />
        <Route path="*" exact element={
                                        <MainLayout>
                                             <NotFound/>
                                        </MainLayout>}                        
        />
    </Routes>
  );
};

export default Bestlearn;
