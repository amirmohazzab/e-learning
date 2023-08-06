import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { deleteCourse, getCourses, newCourse, updateCourse } from "../services/courseService";
import {successMessage} from '../utils/message';
import { ICourse, ICoursesState } from "../utils/types";

const initialState: ICoursesState = {
  status: "idle",
  courses: [],
  error: {},
};

export const getAllCourses: any = createAsyncThunk("/courses/getCourses", async () => {
    const {data} = await getCourses();
    return data.courses;
});

export const createNewCourse: any = createAsyncThunk("courses/newCourse", async (course: ICourse) => { 
 
     const {data, status } = await newCourse(course);
      if (status === 201) successMessage("course was successfully created");
     return data.course;
     
});


interface HandleCourseUpdateParams {
  courseId: string;
  data: ICourse;
}

export const handleCourseUpdate: any = createAsyncThunk("courses/updateCourse", async ({courseId, data}: HandleCourseUpdateParams) => { 

        const {data: responseData, status } = await updateCourse(courseId, data);
        if (status === 200) successMessage("course was successfully edited");
       return responseData.course;
});


export const handleCourseDelete: any = createAsyncThunk("courses/deleteCourse", async (courseId: string) => { 

      const { status } = await deleteCourse(courseId);
      if (status === 200) {
        successMessage("course was successfully deleted");
        return courseId;
      }
});


const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllCourses.fulfilled, (state, action) => {
        state.status= "completed";
        state.courses= action.payload;
      })
      .addCase(getAllCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createNewCourse.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createNewCourse.fulfilled, (state, action) => {
           state.courses.push(action.payload);   
      })
      .addCase(createNewCourse.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(handleCourseUpdate.pending, (state) => {
        state.status = "loading";
      })
      .addCase(handleCourseUpdate.fulfilled, (state, action) => {
        const { courseId } = action.payload;
        const updatedCourseIndex = state.courses.findIndex(course => course._id === courseId);
		    state.courses[updatedCourseIndex] = action.payload;

      })
      .addCase(handleCourseUpdate.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;   
      })
      .addCase(handleCourseDelete.pending, (state) => { 
        state.status = "loading";
      })
      .addCase(handleCourseDelete.fulfilled, (state, action) => {
          state.courses = state.courses.filter(course => course._id !== action.payload);
      })
      .addCase(handleCourseDelete.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
}});

export default coursesSlice.reducer

