import React, { useState, useEffect, useRef } from "react";
import { dashContext } from "./dashContext";
import { paginate } from "./../../utils/paginate";
import NewCourseDialog from "./../admin/dialogs/NewCourseDialog";
import EditCourseDialog from './../admin/dialogs/EditCourseDialog';
import DeleteCourseDialog from './../admin/dialogs/DeleteCourseDialog';
import ImageCourseDialog from './../admin/dialogs/ImageCourseDialog';
import { orderBy } from "lodash";
import  SimpleReactValidator  from 'simple-react-validator';

const AdminContext = ({ courses, children }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(5);
    const [currentCourse, setCurrentCourse] = useState({});
    const [search, setSearch] = useState("");
    const [courseList, setCourseList] = useState([]);
    const [newCourseDialog, setNewCourseDialog] = useState(false);
    const [editCourseDialog, setEditCourseDialog] = useState(false);
    const [deleteCourseDialog, setDeleteCourseDialog] = useState(false);
    const [imageCourseDialog, setImageCourseDialog] = useState(false);

    useEffect(() => setCourseList(courses), [courses]);

    const validator = useRef(
        new SimpleReactValidator({
            element: message => <div style={{ color: "red" }}>{message}</div>
        })
    );

    const openNewCourseDialog = () => setNewCourseDialog(true);
    const closeNewCourseDialog = () => setNewCourseDialog(false);

    

    const openEditCourseDialog = (course) => {
        setEditCourseDialog(true);
        setCurrentCourse(course);
    }
    const closeEditCourseDialog = () => setEditCourseDialog(false);


    const openDeleteCourseDialog = (course) => {
        setDeleteCourseDialog(true);
        setCurrentCourse(course);
    }
    const closeDeleteCourseDialog = () => setDeleteCourseDialog(false);


    const openImageCourseDialog = (course) => {
        setImageCourseDialog(true);
        setCurrentCourse(course);
    }
    const closeImageCourseDialog = () => setImageCourseDialog(false);



    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    const filteredCourses = courseList.filter((course) => course.title.toLowerCase().includes(search.toLowerCase()));

    const courseData = paginate(filteredCourses, currentPage, perPage);


    const sortCoursesAsc = () => {
        setCourseList(orderBy(courseList, "price", "asc"));
    }

    const sortCoursesDes = () => {
        setCourseList(orderBy(courseList, "price", "desc"));
    }



    return (
        <dashContext.Provider
            value={{
                currentPage,
                perPage,
                handlePageChange,
                courseData,
                openNewCourseDialog,
                openEditCourseDialog,
                openDeleteCourseDialog,
                openImageCourseDialog,
                setSearch,
                filteredCourses,
                sortCoursesAsc,
                sortCoursesDes,
                validator,
            }}
        >
            <NewCourseDialog
                showDialog={newCourseDialog}
                closeDialog={closeNewCourseDialog}
            />
            <EditCourseDialog
                showDialog={editCourseDialog}
                closeDialog={closeEditCourseDialog}
                course={currentCourse}
            />
            <DeleteCourseDialog
                showDialog={deleteCourseDialog}
                closeDialog={closeDeleteCourseDialog}
                course={currentCourse}
            />
            <ImageCourseDialog
                showDialog={imageCourseDialog}
                closeDialog={closeImageCourseDialog}
                course={currentCourse}
            />
            {children}
        </dashContext.Provider>
    );
};

export default AdminContext;
