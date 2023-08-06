import http from './httpService';
import config from './config.json';

export const getCourses = () => {
    return http.get(`${config.localapi}/api/courses`);
};

export const getCourse = (courseId: string) => {
    return http.get(`${config.localapi}/api/course/${courseId}`);
};

export const newCourse = (course: any) => {
    return http.post(`${config.localapi}/api/course`, course, {
        headers: { "Content-Type": "multipart/form-data" },
      });
};

export const updateCourse = (courseId: string, course: any) => {
    return http.put(`${config.localapi}/api/course/${courseId}`, course);
};

export const deleteCourse = (courseId: string) => {
    return http.delete(`${config.localapi}/api/course/${courseId}`);
};