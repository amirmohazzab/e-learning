import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { deleteCourse, getCourses, newCourse, updateCourse } from "../services/courseService";
import {successMessage} from '../utils/message';

const initialState = {
  status: "idle",
  courses: [],
  error: {},
};

export const getAllCourses = createAsyncThunk("/courses/getCourses", async () => {
    const {data} = await getCourses();
    return data.courses;
});

export const createNewCourse = createAsyncThunk("courses/newCourse", async (course) => { 
 
     const {data, status } = await newCourse(course);
      if (status === 201) successMessage("course was successfully created");
     return data.course;
     
});

export const handleCourseUpdate = createAsyncThunk("courses/updateCourse", async (_data) => { 

        // const response = await updateCourse(courseId, updatedCourse);
        // return response.data;

        const {data, status } = await updateCourse(_data.courseId, _data.data);
        if (status === 200) successMessage("course was successfully edited");
       return data.course;
});


export const handleCourseDelete = createAsyncThunk("courses/deleteCourse", async (courseId) => { 

      const { status } = await deleteCourse(courseId);
      if (status === 200) {
        successMessage("course was successfully deleted");
        return courseId;
      }
});


const coursesSlice = createSlice({
  name: "courses",
  initialState: initialState,
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

