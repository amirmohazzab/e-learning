import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { getCourse } from "../services/courseService";
import { ICourseState } from '../utils/types';

const initialState: ICourseState = {
  status: "idle",
  course: {},
  error: {},
};


export const getSingleCourse: any = createAsyncThunk("course/getCourse", async (courseId: string) => {
    const {data} = await getCourse(courseId);
    return data.course;
});


const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSingleCourse.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSingleCourse.fulfilled, (state, action) => {
        state.status= "completed";
        state.course= action.payload;
      })
      .addCase(getSingleCourse.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default courseSlice.reducer

