import { getCourses } from "../services/courseService.js";
//import { successMessage } from './../utils/message';

export const getAllCourses = () => {
    return async dispatch => {
        const { data } = await getCourses();
        await dispatch({ type: "INIT", payload: data.courses });
    };
};