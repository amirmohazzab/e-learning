import { getCourses, newCourse, updateCourse, deleteCourse } from "../services/courseService.js";
import { successMessage } from './../utils/message';

export const getAllCourses = () => {
    return async dispatch => {
        const { data } = await getCourses();
        await dispatch({ type: "INIT", payload: data.courses });
    };
};


export const createNewCourse = (course) => {
    return async (dispatch, getState) => {
        const { data, status } = await newCourse(course);
        if (status === 201) successMessage("course was successfully created");
        await dispatch({
            type: "ADD_COURSE",
            payload: [...getState().courses, data.course],
        });
    };
};


export const handleCourseUpdate = (courseId, updatedCourse) => {
    return async (dispatch, getState) => {
        const courses = [...getState().courses];
        const filteredCourses = courses.filter(
            (course) => course._id !== courseId
        );

        try {
            const { data, status } = await updateCourse(
                courseId,
                updatedCourse
            );
            console.log(data);
            if (status === 200) {
                successMessage("course was successfully edited");
                await dispatch({
                    type: "UPDATE_COURSE",
                    payload: [data.course, ...filteredCourses],
                });
            }
        } catch (ex) {
            await dispatch({ type: "UPDATE_COURSE", payload: [...courses] });
        }
    };
};


export const handleCourseDelete = (courseId) => {
    return async (dispatch, getState) => {
        const courses = [...getState().courses];
        const filteredCourses = courses.filter(
            (course) => course._id !== courseId
        );

        try {
            await dispatch({
                type: "DELETE_COURSE",
                payload: [...filteredCourses],
            });
            const { status } = await deleteCourse(courseId);

            if (status === 200) successMessage("course was successfully deleted");
        } catch (ex) {
            await dispatch({ type: "DELETE_COURSE", payload: [...courses] });
        }
    };
};
